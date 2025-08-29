import { Button } from "@/components/ui/halloween-button";
import showcaseImage from "@/assets/costumes-showcase.jpg";

const categories = [
  {
    id: 'adults',
    title: 'Adult Costumes',
    description: 'Sophisticated & scary costumes for grown-up Halloween fun',
    emoji: '🧛‍♂️',
    features: ['Premium Materials', 'Perfect Fit', 'Trendy Designs'],
    popular: ['Vampires', 'Witches', 'Superheroes', 'Classic Monsters']
  },
  {
    id: 'kids',
    title: 'Kids Costumes',
    description: 'Safe, fun & adorable costumes for little trick-or-treaters',
    emoji: '👻',
    features: ['Child-Safe Materials', 'Easy to Wear', 'Comfortable Fit'],
    popular: ['Princesses', 'Superheroes', 'Animals', 'Disney Characters']
  },
  {
    id: 'couples',
    title: 'Couples Costumes',
    description: 'Matching & coordinated costumes for romantic Halloween',
    emoji: '💑',
    features: ['Coordinated Designs', 'Multiple Sizes', 'Photo-Ready'],
    popular: ['Movie Duos', 'Historical Pairs', 'Pop Culture', 'Classic Couples']
  },
  {
    id: 'groups',
    title: 'Group Costumes',
    description: 'Epic group themes for parties, friends & family events',
    emoji: '👨‍👩‍👧‍👦',
    features: ['Bulk Pricing', 'Size Variety', 'Team Themes'],
    popular: ['Movie Casts', 'Decades Themes', 'Fantasy Groups', 'TV Shows']
  }
];

export default function ProductCategories() {
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
            From spine-chilling scares to adorable treats, we have the perfect costume for every Halloween celebration in West LA
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
              <Button variant="halloween" size="lg">
                🛒 Shop All Categories
              </Button>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

              <Button variant="spooky" className="w-full" size="lg">
                Shop {category.title}
              </Button>
            </div>
          ))}
        </div>

        {/* Local Service Areas */}
        <div className="mt-16 text-center">
          <div className="spooky-card max-w-4xl mx-auto">
            <h3 className="font-spooky text-3xl mb-4 text-secondary-glow">Serving West LA's Spookiest Neighborhoods</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
              <div className="text-primary font-semibold">📍 Marina del Rey</div>
              <div className="text-primary font-semibold">📍 Westchester</div>
              <div className="text-primary font-semibold">📍 Venice Beach</div>
              <div className="text-primary font-semibold">📍 Santa Monica</div>
              <div className="text-primary font-semibold">📍 West LA</div>
            </div>
            <p className="mt-4 text-muted-foreground">Fast local delivery & in-store pickup available!</p>
          </div>
        </div>
      </div>
    </section>
  );
}