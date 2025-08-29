const testimonials = [
  {
    name: "Sarah M.",
    location: "Marina del Rey",
    rating: 5,
    text: "Found the perfect vampire costume for our Halloween party! The quality was amazing and the customer service was fantastic. Definitely shopping here again!",
    costume: "Adult Vampire Costume"
  },
  {
    name: "Mike & Lisa",
    location: "Santa Monica", 
    rating: 5,
    text: "We got matching superhero costumes and were the hit of the party! Great couples selection and fast delivery to Santa Monica.",
    costume: "Couples Superhero Set"
  },
  {
    name: "Jennifer K.",
    location: "Venice",
    rating: 5,
    text: "My kids loved their costumes! Safe materials, comfortable fit, and they looked adorable trick-or-treating in Venice. Highly recommend!",
    costume: "Kids Princess & Dragon"
  },
  {
    name: "The Garcia Family",
    location: "Westchester",
    rating: 5,
    text: "Got group costumes for our family of 6. Amazing bulk pricing and everyone's costume fit perfectly! Made our Halloween photos epic.",
    costume: "Family Superhero Theme"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-spooky text-4xl md:text-6xl mb-6 text-glow">
            <span className="text-primary">Spook-tacular</span> <span className="text-secondary-glow">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our West LA neighbors are saying about their Hallow Madness experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="spooky-card hover-float">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">⭐</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-sm text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Costume Info */}
              <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                <div className="text-xs text-secondary-glow font-semibold mb-1">Purchased:</div>
                <div className="text-sm">{testimonial.costume}</div>
              </div>

              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-primary">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground flex items-center">
                  <span className="mr-1">📍</span>
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="spooky-card max-w-4xl mx-auto">
            <h3 className="font-spooky text-2xl mb-6 text-accent-glow">Why Choose Hallow Madness?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-semibold text-primary">Premium Quality</div>
                <div className="text-xs text-muted-foreground">Only the best materials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚚</div>
                <div className="font-semibold text-primary">Fast Delivery</div>
                <div className="text-xs text-muted-foreground">Same-day in West LA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-semibold text-primary">Best Prices</div>
                <div className="text-xs text-muted-foreground">Competitive local rates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold text-primary">Local Experts</div>
                <div className="text-xs text-muted-foreground">West LA Halloween pros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}