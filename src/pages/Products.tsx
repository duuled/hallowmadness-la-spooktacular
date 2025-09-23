import { useState } from 'react';
import { Button } from "@/components/ui/halloween-button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";
import flintstoneFredeImage from "@/assets/flintstone-fred-costume.jpg";
import flintstoneWilmaImage from "@/assets/flintstone-wilma-costume.jpg";
import pumpkinPonchoImage from "@/assets/pumpkin-poncho-costume.jpg";
import minionCostumeImage from "@/assets/minion-costume-set.jpg";
import crowCostumeImage from "@/assets/crow-costume-set.jpg";
import minionAccessoriesImage from "@/assets/minion-accessories-set.jpg";

const products = [
  {
    id: 'flintstone-fred',
    name: 'Fred Flintstone Adult Costume',
    category: 'adult',
    price: '$18.89',
    image: flintstoneFredeImage,
    description: 'Transform into your favorite caveman with this classic orange Flintstone costume perfect for couples or solo Halloween fun!',
    features: ['Orange spotted tunic', 'Blue necktie included', 'Comfortable fit', 'Couples costume available'],
    affiliateLink: 'https://amzn.to/3Kf5VB7'
  },
  {
    id: 'flintstone-wilma',
    name: 'Wilma Flintstone Adult Costume',
    category: 'adult',
    price: '$18.99',
    image: flintstoneWilmaImage,
    description: 'Complete your Stone Age look with this elegant white Wilma costume featuring signature stone-age style details.',
    features: ['White stone-age dress', 'Signature necklace', 'Comfortable design', 'Perfect for couples'],
    affiliateLink: 'https://amzn.to/3Iw44r8'
  },
  {
    id: 'pumpkin-poncho',
    name: 'Pumpkin Poncho Halloween Costume',
    category: 'adult',
    price: '$13.99',
    image: pumpkinPonchoImage,
    description: 'Adorable 3-piece pumpkin costume set with poncho, beret, and candy bag - perfect for Halloween festivities!',
    features: ['Orange pumpkin poncho', 'Matching knit beret', 'Candy bag included', 'Easy to wear design'],
    affiliateLink: 'https://amzn.to/42u6cXl'
  },
  {
    id: 'minion-costume',
    name: 'Minion Halloween Costume Set',
    category: 'adult',
    price: '$14.99',
    image: minionCostumeImage,
    description: 'Complete Minion transformation with goggles, yellow beanie, blue dress, suspenders and gloves!',
    features: ['Steampunk goggles', 'Yellow beanie hat', 'Blue tutu skirt', 'Black gloves included'],
    affiliateLink: 'https://amzn.to/3KfGYWk'
  },
  {
    id: 'crow-costume',
    name: 'Gothic Crow Halloween Costume',
    category: 'adult',
    price: '$32.99',
    image: crowCostumeImage,
    description: '6-piece dramatic crow costume with black feather wings, mask, and gothic accessories for a haunting Halloween look.',
    features: ['Black feather wings', 'Crow mask included', 'Gothic necklace', 'Feather cuffs'],
    affiliateLink: 'https://amzn.to/4nFcLyc'
  },
  {
    id: 'minion-accessories',
    name: 'Minion Costume Accessories Kit',
    category: 'kids',
    price: '$8.99',
    image: minionAccessoriesImage,
    description: '3-piece accessory set with vintage goggles, yellow beanie, and black gloves - perfect for DIY Minion costumes!',
    features: ['Vintage steampunk goggles', 'Yellow knit beanie', 'Black costume gloves', 'Suitable for all ages'],
    affiliateLink: 'https://amzn.to/46RRf3C'
  }
];

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'adult', label: 'Adult Costumes' },
  { id: 'kids', label: 'Kids Costumes' },
  { id: 'couples', label: 'Couples Costumes' }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Spooky Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b35' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="phantom" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="font-spooky text-4xl md:text-6xl mb-4 text-glow">
              <span className="text-primary">Spook-tacular</span>{' '}
              <span className="text-secondary-glow">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our haunting collection of premium Halloween costumes
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "halloween" : "phantom"}
              onClick={() => setSelectedCategory(category.id)}
              size="sm"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map(product => (
            <div key={product.id} className="spooky-card hover-float group">
              <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-spooky text-xl text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="text-2xl font-bold text-secondary-glow">{product.price}</div>
                </div>

                <div>
                  <h4 className="font-semibold text-accent-glow mb-2 text-sm">Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="halloween" 
                  className="w-full" 
                  size="lg"
                  asChild
                >
                  <a 
                    href={product.affiliateLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    👻 Buy Now on Amazon
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="spooky-card max-w-2xl mx-auto">
            <h2 className="font-spooky text-3xl mb-4 text-secondary-glow">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us directly and we'll help you find the perfect costume for your spooky celebration!
            </p>
            <Button variant="spooky" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}