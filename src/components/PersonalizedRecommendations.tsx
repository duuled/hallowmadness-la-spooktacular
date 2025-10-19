import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Sparkles, ExternalLink } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface Recommendation {
  title: string;
  description: string;
  category: string;
  price_range: string;
  affiliate_keywords: string[];
  amazonLink: string;
}

export default function PersonalizedRecommendations() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      // Get browsing context from localStorage
      const browsedCategories = JSON.parse(localStorage.getItem("browsedCategories") || "[]");
      const userPreferences = JSON.parse(localStorage.getItem("userPreferences") || "{}");

      const { data, error } = await supabase.functions.invoke("get-recommendations", {
        body: {
          userPreferences,
          browsedCategories,
          currentPage: window.location.pathname
        }
      });

      if (error) {
        console.error("Error fetching recommendations:", error);
        toast({
          title: "Unable to load recommendations",
          description: "Please try again later",
          variant: "destructive"
        });
        return;
      }

      setRecommendations(data.recommendations || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-3xl font-bold text-center">Loading AI Recommendations...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-center">Recommended Just For You</h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Based on your browsing and preferences, our AI has curated these perfect Halloween picks
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-shadow duration-300 bg-card/50 backdrop-blur">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full">
                  {rec.category}
                </span>
                <span className="text-sm font-bold text-muted-foreground">
                  {rec.price_range}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{rec.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{rec.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {rec.affiliate_keywords.map((keyword, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-secondary/30 rounded">
                    {keyword}
                  </span>
                ))}
              </div>

              <Button 
                className="w-full gap-2" 
                onClick={() => {
                  window.open(rec.amazonLink, '_blank');
                  // Track click
                  const clicks = JSON.parse(localStorage.getItem("affiliateClicks") || "[]");
                  clicks.push({ product: rec.title, timestamp: Date.now() });
                  localStorage.setItem("affiliateClicks", JSON.stringify(clicks));
                }}
              >
                View on Amazon <ExternalLink className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            onClick={fetchRecommendations}
            className="gap-2"
          >
            <Sparkles className="w-4 h-4" /> Get New Recommendations
          </Button>
        </div>
      </div>
    </section>
  );
}
