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

const DEFAULT_RECOMMENDATIONS: Recommendation[] = [
  {
    title: "Police Officer Cop Uniform Set for Adult Women",
    description: "Classic tailored navy police dress with badges, structured officer hat, duty belt, and toy handcuffs for adult women.",
    category: "adults",
    price_range: "$34-$45",
    affiliate_keywords: ["police costume women", "cop uniform dress"],
    amazonLink: "https://amzn.to/3UZLltL"
  },
  {
    title: "Ghost Face Scary Scream Costume for Adults",
    description: "Menacing hooded black robe with flowing jagged sleeves, signature screaming white horror mask, fake blood, and knife prop.",
    category: "adults",
    price_range: "$34-$42",
    affiliate_keywords: ["ghost face costume", "scream costume adults"],
    amazonLink: "https://amzn.to/46ePvjZ"
  },
  {
    title: "The Flintstones Bedrock Stone Age Couple Costume",
    description: "Iconic prehistoric stone age costume tunic with bold spots and oversized blue tie, perfect for couples and Halloween parties.",
    category: "couples",
    price_range: "$24-$35",
    affiliate_keywords: ["flintstones costume", "caveman couple outfit"],
    amazonLink: "https://amzn.to/4gUl73a"
  },
  {
    title: "Ghost Face Scream Kids Hooded Robe Costume",
    description: "Authentic horror classic child costume featuring full-length black hooded robe and iconic screaming Ghost Face mask.",
    category: "kids",
    price_range: "$29-$38",
    affiliate_keywords: ["kids ghost face", "scream costume children"],
    amazonLink: "https://amzn.to/4cuGLtz"
  },
  {
    title: "72\" Riding Ice Dragon Inflatable Blow-Up Costume",
    description: "Giant 72-inch mythical ice dragon ride-on costume with frosty blue wings and high-speed built-in inflation blower.",
    category: "adults",
    price_range: "$49-$59",
    affiliate_keywords: ["ice dragon costume", "inflatable blow up costume"],
    amazonLink: "https://amzn.to/4gGcdYf"
  },
  {
    title: "Adult Pumpkin Poncho Halloween Costume Set",
    description: "Easy slip-on smiling pumpkin face poncho for adults with matching stem headband and trick-or-treat candy bag.",
    category: "adults",
    price_range: "$19-$28",
    affiliate_keywords: ["adult pumpkin poncho", "jack o lantern costume"],
    amazonLink: "https://amzn.to/4yt8kMy"
  },
  {
    title: "Marvel Spider-Man Official Deluxe Zentai Costume",
    description: "Official Spider-Man 2-way stretch zentai bodysuit with invisible zippers and authentic web pattern.",
    category: "kids",
    price_range: "$35-$45",
    affiliate_keywords: ["spiderman costume", "deluxe zentai suit"],
    amazonLink: "https://amzn.to/46HdUif"
  },
  {
    title: "Kids & Adults Superhero Felt Masks Party Pack",
    description: "Colorful multi-pack soft felt superhero eye masks with elastic bands for cosplay and Halloween parties.",
    category: "kids",
    price_range: "$12-$18",
    affiliate_keywords: ["superhero masks", "kids party felt masks"],
    amazonLink: "https://amzn.to/4qYEZqE"
  },
  {
    title: "Minions Costume 3-Piece Accessories Kit",
    description: "Signature silver steampunk goggles, yellow beanie hat, and black gloves for an instant Minion costume transformation.",
    category: "kids",
    price_range: "$9-$15",
    affiliate_keywords: ["minions costume", "minion goggles beanie"],
    amazonLink: "https://amzn.to/4rhuvmx"
  },
  {
    title: "Glow Skeleton Full-Body Jumpsuit",
    description: "Detailed bone anatomy print full-body skeleton jumpsuit, breathable and ultra comfortable for Halloween celebrations.",
    category: "adults",
    price_range: "$34-$45",
    affiliate_keywords: ["skeleton costume", "glow in the dark jumpsuit"],
    amazonLink: "https://amzn.to/4gQND5F"
  }
];

export default function PersonalizedRecommendations() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>(DEFAULT_RECOMMENDATIONS);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      // Get browsing context from localStorage
      const browsedCategories = JSON.parse(localStorage.getItem("browsedCategories") || "[]");
      const userPreferences = JSON.parse(localStorage.getItem("userPreferences") || "{}");

      if (!import.meta.env.VITE_SUPABASE_URL) {
        setRecommendations(DEFAULT_RECOMMENDATIONS);
        return;
      }

      const { data, error } = await supabase.functions.invoke("get-recommendations", {
        body: {
          userPreferences,
          browsedCategories,
          currentPage: window.location.pathname
        }
      });

      if (error || !data?.recommendations) {
        console.warn("Unable to load remote recommendations, using curated picks:", error);
        setRecommendations(DEFAULT_RECOMMENDATIONS);
        return;
      }

      setRecommendations(data.recommendations || DEFAULT_RECOMMENDATIONS);
    } catch (error) {
      console.warn("Using curated fallback recommendations:", error);
      setRecommendations(DEFAULT_RECOMMENDATIONS);
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
