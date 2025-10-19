import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Mail, Gift } from "lucide-react";
import { useToast } from "./ui/use-toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // Store in localStorage for now (could be upgraded to database)
      const subscribers = JSON.parse(localStorage.getItem("newsletterSubscribers") || "[]");
      
      if (subscribers.includes(email)) {
        toast({
          title: "Already subscribed!",
          description: "You're already on our list for exclusive deals"
        });
        setLoading(false);
        return;
      }

      subscribers.push(email);
      localStorage.setItem("newsletterSubscribers", JSON.stringify(subscribers));

      // Track user preferences
      const userPreferences = JSON.parse(localStorage.getItem("userPreferences") || "{}");
      userPreferences.subscribedToNewsletter = true;
      userPreferences.email = email;
      localStorage.setItem("userPreferences", JSON.stringify(userPreferences));

      toast({
        title: "🎃 Welcome to Hallow Madness! 🎃",
        description: "Check your email for an exclusive 15% off code!"
      });

      setEmail("");
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8 bg-card/90 backdrop-blur">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Gift className="w-8 h-8 text-primary" />
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Get Exclusive Halloween Deals</h2>
            <p className="text-muted-foreground">
              Join our spooky newsletter for early access to new costumes, special discounts, and Halloween tips!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                disabled={loading}
              />
              <Button 
                type="submit" 
                disabled={loading}
                className="sm:w-auto"
              >
                {loading ? "Subscribing..." : "Get 15% Off"}
              </Button>
            </div>
            
            <p className="text-xs text-center text-muted-foreground">
              🎁 Instant bonus: Get 15% off your first order when you subscribe!
            </p>
          </form>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <p className="font-bold text-primary">Weekly</p>
              <p className="text-xs text-muted-foreground">New arrivals</p>
            </div>
            <div>
              <p className="font-bold text-primary">Exclusive</p>
              <p className="text-xs text-muted-foreground">Member deals</p>
            </div>
            <div>
              <p className="font-bold text-primary">Free</p>
              <p className="text-xs text-muted-foreground">Unsubscribe anytime</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
