import { Button } from "@/components/ui/halloween-button";
import { useNavigate } from "react-router-dom";
import showcaseImage from "@/assets/costumes-showcase.jpg";

const categories = [
  {
    id: 'adults',
    title: 'Adult Costumes',
    description: 'Sophisticated & scary costumes for grown-up Halloween fun',
    emoji: '🧛‍♂️',
    features: ['Premium Materials', 'Perfect Fit', 'Trendy Designs'],
    popular: ['Ghost Face Scream', 'Police Officer Cop', '72" Ice Dragon', 'Skeleton Jumpsuit'],
    amazonLink: 'https://amzn.to/4gQND5F',
    tiktokLink: 'https://www.tiktok.com/t/ZTHnKQoHw28Sr-bGJFE/'
  },
  {
    id: 'kids',
    title: 'Kids Costumes',
    description: 'Safe, fun & adorable costumes for little trick-or-treaters',
    emoji: '👻',
    features: ['Child-Safe Materials', 'Easy to Wear', 'Comfortable Fit'],
    popular: ['Ghost Face Kids', 'Spider-Man Zentai', 'Minions Kit', 'Superhero Masks']
  },
  {
    id: 'couples',
    title: 'Couples Costumes',
    description: 'Matching & coordinated costumes for romantic Halloween',
    emoji: '💑',
    features: ['Coordinated Designs', 'Multiple Sizes', 'Photo-Ready'],
    popular: ['The Flintstones', 'Police Officer & Cop', 'The Incredibles Duo', 'Barbie & Ken']
  }
];

export default function ProductCategories() {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b35' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-spooky text-4xl md:text-6xl mb-6 text-glow">
            <span className="text-primary">Spook-tacular</span> <span className="text-secondary-glow">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From spine-chilling scares to adorable treats, we have the perfect costume for every Halloween celebration worldwide
          </p>
        </div>

        {/* Featured Showcase Image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block rounded-2xl overflow-hidden shadow-spooky max-w-4xl mx-auto">
            <img 
              src={showcaseImage} 
              alt="Halloween costume showcase featuring adult, kids, and couples costumes" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <Button 
                variant="halloween" 
                size="lg"
                onClick={() => navigate('/products')}
              >
                🛒 Shop All Categories
              </Button>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="spooky-card hover-float group">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:animate-bounce">{category.emoji}</div>
                <h3 className="font-spooky text-2xl mb-3 text-primary">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-secondary-glow mb-3">Features:</h4>
                <ul className="space-y-1">
                  {category.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-accent-glow mb-3">Popular:</h4>
                <div className="flex flex-wrap gap-1">
                  {category.popular.map((item, index) => (
                    <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  variant="spooky" 
                  className="w-full" 
                  size="lg"
                  onClick={() => navigate('/products')}
                >
                  Shop {category.title}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Service Areas */}
        <div className="mt-16 text-center">
          <div className="spooky-card max-w-4xl mx-auto">
            <h3 className="font-spooky text-3xl mb-4 text-secondary-glow">Bringing Halloween Magic Worldwide</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">🏙️</div>
                <div className="text-primary font-semibold">Greater Los Angeles</div>
                <div className="text-xs text-muted-foreground">Same-day delivery available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🇺🇸</div>
                <div className="text-primary font-semibold">Nationwide USA</div>
                <div className="text-xs text-muted-foreground">Fast 2-5 day shipping</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-primary font-semibold">International</div>
                <div className="text-xs text-muted-foreground">Worldwide shipping available</div>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">Premium costumes delivered to your door wherever you are!</p>
          </div>
        </div>
      </div>
    </section>
  );
}