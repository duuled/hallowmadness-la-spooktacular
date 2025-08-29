import { Button } from "@/components/ui/halloween-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    costumeType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app, this would send to a backend
    alert('Thanks for your interest! We\'ll contact you soon about your Halloween costume needs.');
    setFormData({ name: '', email: '', phone: '', costumeType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-spooky text-4xl md:text-6xl mb-6 text-glow">
            <span className="text-primary">Contact</span> <span className="text-secondary-glow">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to find your perfect Halloween costume? Get in touch with West LA's premiere costume experts!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="spooky-card mb-8">
              <h3 className="font-spooky text-2xl mb-6 text-accent-glow">Visit Our Store</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-primary mr-3 mt-1">📍</span>
                  <div>
                    <div className="font-semibold">Hallow Madness</div>
                    <div className="text-muted-foreground text-sm">
                      123 Spooky Lane<br />
                      Marina del Rey, CA 90292
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-primary mr-3">📞</span>
                  <div>
                    <a href="tel:+1-310-SPOOKY1" className="font-semibold hover:text-primary transition-colors">
                      (310) SPOOKY-1
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-primary mr-3">✉️</span>
                  <div>
                    <a href="mailto:info@hallowmadness.com" className="font-semibold hover:text-primary transition-colors">
                      info@hallowmadness.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-secondary-glow mb-3">Store Hours</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>October (Halloween Season)</span>
                    <span>10am - 10pm Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regular Season</span>
                    <span>12pm - 8pm (Fri-Sun)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="spooky-card">
              <h3 className="font-spooky text-2xl mb-4 text-accent-glow">Delivery Areas</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <span className="text-primary mr-2">🚚</span>
                  Marina del Rey
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">🚚</span>
                  Westchester
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">🚚</span>
                  Venice Beach
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">🚚</span>
                  Santa Monica
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">🚚</span>
                  West LA
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">🚚</span>
                  Playa del Rey
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Same-day delivery available for orders placed before 3pm!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="spooky-card">
            <h3 className="font-spooky text-2xl mb-6 text-accent-glow">Get Your Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label htmlFor="costumeType" className="block text-sm font-medium mb-2">
                    Costume Type
                  </label>
                  <select
                    id="costumeType"
                    name="costumeType"
                    value={formData.costumeType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-muted/50 border border-input rounded-md text-foreground"
                  >
                    <option value="">Select a category...</option>
                    <option value="adult">Adult Costumes</option>
                    <option value="kids">Kids Costumes</option>
                    <option value="couples">Couples Costumes</option>
                    <option value="group">Group Costumes</option>
                    <option value="custom">Custom/Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your Halloween plans *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-muted/50"
                  placeholder="What kind of costume are you looking for? Any specific themes or requirements?"
                />
              </div>

              <Button type="submit" variant="halloween" size="lg" className="w-full">
                👻 Get My Halloween Quote
              </Button>
            </form>

            <p className="mt-4 text-xs text-muted-foreground text-center">
              We'll respond within 24 hours with costume options and pricing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}