import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import MissionSection from "@/components/MissionSection";

const Index = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = "Hallow Madness | Premium Halloween Costumes Marina del Rey, West LA, Redondo Beach";
    
    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Hallow Madness",
      "description": "Premium Halloween costume store serving Marina del Rey, Westside Los Angeles & Redondo Beach with the best costumes and spooky Halloween spirit",
      "image": "https://hallowmadness.com/logo.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Spooky Lane",
        "addressLocality": "Marina del Rey",
        "addressRegion": "CA",
        "postalCode": "90292",
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
        "Marina del Rey",
        "Westchester", 
        "Venice Beach",
        "Santa Monica",
        "West Los Angeles",
        "Playa del Rey",
        "Redondo Beach"
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
        <h1>Hallow Madness - Premium Halloween Costumes in Marina del Rey, Westside LA & Redondo Beach</h1>
        <p>
          Shop the best Halloween costumes for adults, kids, couples at Marina del Rey's premier costume store. 
          Serving Westside Los Angeles, Redondo Beach, Venice, Santa Monica, and Westchester 
          with high-quality costumes, fast local delivery and spooky Halloween spirit guaranteed.
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
                Marina del Rey, CA 90292<br />
                <a href="tel:+1-310-SPOOKY1" className="hover:text-primary">(310) SPOOKY-1</a><br />
                <a href="mailto:hallowmadness@hallowmadness.store" className="hover:text-primary">hallowmadness@hallowmadness.store</a>
              </address>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="font-semibold text-secondary-glow mb-4">Service Areas</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Marina del Rey Halloween Costumes</li>
                <li>Westchester Costume Shop</li>
                <li>Venice Beach Halloween Store</li>
                <li>Santa Monica Costume Rental</li>
                <li>West LA Halloween Outfits</li>
                <li>Playa del Rey Costume Delivery</li>
                <li>Redondo Beach Halloween Store</li>
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
            <p>&copy; 2024 Hallow Madness. All rights reserved. | Premium Halloween costumes in West LA since 2020</p>
            <p className="mt-2">
              Serving Marina del Rey, Westchester, Venice, Santa Monica, West LA, Redondo Beach and surrounding areas with 
              the finest selection of Halloween costumes, accessories, and party supplies. Bringing spooky Halloween spirit to the Westside!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;