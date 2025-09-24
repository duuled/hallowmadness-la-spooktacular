import { Button } from "@/components/ui/halloween-button";
import heroImage from "@/assets/hero-halloween.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>
      
      {/* Floating Halloween Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <div className="text-6xl">🎃</div>
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-15" style={{ animationDelay: '1s' }}>
          <div className="text-4xl">👻</div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <div className="text-5xl">🦇</div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-spooky text-6xl md:text-8xl lg:text-9xl mb-6 text-glow">
          <span className="text-primary animate-glow">Hallow</span>{" "}
          <span className="text-secondary-glow">Madness</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-foreground/90 max-w-4xl mx-auto leading-relaxed">
          Premium Halloween costumes for the most <span className="text-primary font-semibold">spook-tacular</span> celebrations in{" "}
          <span className="text-secondary-glow font-semibold">Los Angeles & beyond</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            variant="halloween" 
            size="xl"
            onClick={() => scrollToSection('products')}
            className="hover-float"
          >
            👻 Shop Costumes Now
          </Button>
          <Button 
            variant="phantom" 
            size="xl"
            onClick={() => scrollToSection('contact')}
          >
            📍 Find Us Locally
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center">
          <div className="spooky-card">
            <div className="text-2xl mb-2">👥</div>
            <div className="text-sm font-semibold">Adults</div>
          </div>
          <div className="spooky-card">
            <div className="text-2xl mb-2">👶</div>
            <div className="text-sm font-semibold">Kids</div>
          </div>
          <div className="spooky-card">
            <div className="text-2xl mb-2">💑</div>
            <div className="text-sm font-semibold">Couples</div>
          </div>
          <div className="spooky-card">
            <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
            <div className="text-sm font-semibold">Groups</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}