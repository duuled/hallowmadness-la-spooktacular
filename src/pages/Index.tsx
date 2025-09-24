import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import MissionSection from "@/components/MissionSection";

const Index = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = "Hallow Madness | Premium Halloween Costumes Los Angeles & Worldwide Shipping";
    
    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Hallow Madness",
      "description": "Premium Halloween costume store based in Los Angeles serving customers worldwide with the best costumes and spooky Halloween spirit",
      "image": "https://hallowmadness.com/logo.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Spooky Lane",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90210",
        "addressCountry": "US"
      },
      "telephone": "(310) SPOOKY-1",
      "email": "hallowmadness@hallowmadness.store",
      "url": "https://hallowmadness.com",
      "sameAs": [
        "https://facebook.com/hallowmadness",
        "https://instagram.com/hallowmadness_la",
        "https://www.tiktok.com/t/ZTHnKQoHw28Sr-bGJFE/"
      ],
      "openingHours": [
        "Mo-Su 10:00-22:00"
      ],
      "areaServed": [
        "Los Angeles",
        "California", 
        "United States",
        "Worldwide"
      ],
      "priceRange": "$$",
      "acceptsReservations": true
    };

    // Insert structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* SEO Header Content */}
      <header className="sr-only">
        <h1>Hallow Madness - Premium Halloween Costumes Los Angeles & Worldwide Shipping</h1>
        <p>
          Shop the best Halloween costumes for adults, kids, couples at Los Angeles' premier costume store. 
          Serving customers worldwide with high-quality costumes, fast shipping and spooky Halloween spirit guaranteed.
        </p>
      </header>

      {/* Main Navigation - Hidden but accessible for SEO */}
      <nav className="sr-only" aria-label="Main navigation">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#products">Costume Categories</a></li>
          <li><a href="#testimonials">Customer Reviews</a></li>
          <li><a href="#contact">Contact & Location</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" aria-labelledby="hero-heading">
        <HeroSection />
      </section>

      {/* Product Categories Section */}
      <main>
        {/* Mission Section */}
        <section id="mission" aria-labelledby="mission-heading">
          <MissionSection />
        </section>

        <section id="products" aria-labelledby="products-heading">
          <ProductCategories />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <TestimonialsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>

      {/* Footer with Local SEO Information */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Business Info */}
            <div>
              <h3 className="font-spooky text-2xl text-primary mb-4">Hallow Madness</h3>
              <address className="not-italic text-sm text-muted-foreground">
                123 Spooky Lane<br />
                Los Angeles, CA 90210<br />
                <a href="tel:+1-310-SPOOKY1" className="hover:text-primary">(310) SPOOKY-1</a><br />
                <a href="mailto:hallowmadness@hallowmadness.store" className="hover:text-primary">hallowmadness@hallowmadness.store</a>
              </address>
            </div>

            {/* Shipping Areas */}
            <div>
              <h4 className="font-semibold text-secondary-glow mb-4">Shipping Areas</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Greater Los Angeles Area</li>
                <li>California Statewide</li>
                <li>Nationwide USA Shipping</li>
                <li>International Worldwide</li>
                <li>Express & Priority Options</li>
                <li>Local Same-Day Delivery</li>
                <li>Bulk Order Shipping</li>
              </ul>
            </div>

            {/* Costume Categories */}
            <div>
              <h4 className="font-semibold text-accent-glow mb-4">Costume Categories</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Adult Halloween Costumes</li>
                <li>Kids Halloween Outfits</li>
                <li>Couples Costume Sets</li>
                <li>Group Halloween Themes</li>
                <li>Custom Costume Design</li>
                <li>Costume Accessories</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Hallow Madness. All rights reserved. | Premium Halloween costumes worldwide since 2020</p>
            <p className="mt-2">
              Based in Los Angeles, shipping worldwide with the finest selection of Halloween costumes, accessories, and party supplies. 
              Bringing spooky Halloween spirit to customers everywhere!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;