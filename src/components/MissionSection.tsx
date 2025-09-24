export default function MissionSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="spooky-card">
            <h2 className="font-spooky text-4xl md:text-5xl mb-8 text-glow">
              <span className="text-primary">Our</span> <span className="text-secondary-glow">Mission</span>
            </h2>
            
            <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
              <p>
                At <span className="text-primary font-semibold">Hallow Madness</span>, we're more than just a Halloween costume store – 
                we're your partners in creating unforgettable spooky memories! 🎃
              </p>
              
              <p>
                Based in <span className="text-accent-glow font-semibold">Los Angeles</span>, we proudly serve the entire 
                <span className="text-secondary-glow font-semibold"> Greater Los Angeles area</span> and ship 
                <span className="text-accent-glow font-semibold"> worldwide</span> with the most unique, trendy, and high-quality Halloween costumes you'll find anywhere.
              </p>
              
              <p>
                Our dedicated team searches far and wide to curate the <span className="text-primary font-semibold">best costume collections</span> – 
                from spine-tingling scary to adorably sweet – ensuring that everyone can find their perfect Halloween persona and embrace that 
                <span className="text-glow">🦇 spooky Halloween spirit 🦇</span> we all love!
              </p>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mt-8">
                <p className="text-xl font-semibold text-foreground">
                  "Making Halloween magical, one costume at a time!" 👻✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}