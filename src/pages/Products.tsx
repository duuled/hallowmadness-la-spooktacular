import { useState } from 'react';
import { Button } from "@/components/ui/halloween-button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";
import { useBrowsingTracking } from "@/hooks/useBrowsingTracking";
import pumpkinPonchoImage from "@/assets/pumpkin-poncho-costume-hq.jpg";
import skeletonJumpsuitWomenImage from "@/assets/skeleton-jumpsuit-women-hq.jpg";
import inflatableTrexImage from "@/assets/inflatable-trex-hq.jpg";
import flintstoneFredImage from "@/assets/flintstone-fred-costume-hq.jpg";
import skeletonUnicornInflatableImage from "@/assets/skeleton-unicorn-inflatable-hq.jpg";
import minionAccessoriesImage from "@/assets/minion-accessories-set-hq.jpg";
import wednesdayCostumeImage from "@/assets/images/wednesday_costume_1788741720602.jpg";
import barbieCostumeImage from "@/assets/images/barbie_costume_1788741732697.jpg";
import incrediblesCostumeImage from "@/assets/images/incredibles_costume_1788741745933.jpg";
import spidermanCostumeImage from "@/assets/images/spiderman_costume_1788742115841.jpg";
import iceDragonCostumeImage from "@/assets/images/ice_dragon_costume_1788741983072.jpg";
import inflatableBlowUpImage from "@/assets/images/inflatable_blowup_1788741995146.jpg";
import copCostumeWomenImage from "@/assets/images/cop_costume_women_1788742361288.jpg";
import ghostfaceAdultImage from "@/assets/images/ghostface_adult_1788742373034.jpg";
import ghostfaceKidsImage from "@/assets/images/ghostface_kids_1788742385092.jpg";
import superheroMasksImage from "@/assets/images/superhero_masks_1788742396906.jpg";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categories: string[];
  price: string;
  image: string;
  description: string;
  features: string[];
  affiliateLink: string;
}

const products: ProductItem[] = [
  {
    id: 'flintstones-costume',
    name: 'The Flintstones Bedrock Stone Age Couple Costume',
    category: 'couples',
    categories: ['couples', 'adult', 'kids'],
    price: '$24.99',
    image: flintstoneFredImage,
    description: 'Yabba-Dabba-Doo! Step straight into Bedrock with this classic prehistoric stone age costume tunic. Features bold orange spotted styling, signature oversized blue necktie, and lightweight party-ready fit—a timeless favorite for couples, duos, and Halloween celebrations!',
    features: ['Classic Bedrock orange spotted tunic', 'Prehistoric oversized blue necktie included', 'Comfortable lightweight party fabric', 'Iconic couples & duo costume classic'],
    affiliateLink: 'https://amzn.to/4gUl73a'
  },
  {
    id: 'adult-pumpkin-poncho',
    name: 'Adult Pumpkin Poncho Halloween Costume Set',
    category: 'adult',
    categories: ['adult', 'couples'],
    price: '$19.99',
    image: pumpkinPonchoImage,
    description: 'Effortless and irresistibly festive adult jack-o\'-lantern pumpkin poncho costume outfit! Includes a vibrant smiling pumpkin face poncho, leafy green stem headband, and matching trick-or-treat candy tote bag.',
    features: ['Vibrant orange adult pumpkin face poncho', 'Festive green pumpkin stem headband', 'Matching trick-or-treat candy tote bag', 'One-size easy slip-on comfort design'],
    affiliateLink: 'https://amzn.to/4yt8kMy'
  },
  {
    id: 'ice-dragon-inflatable',
    name: '72" Riding Ice Dragon Inflatable Blow-Up Costume',
    category: 'adult',
    categories: ['adult'],
    price: '$49.99',
    image: iceDragonCostumeImage,
    description: 'Dominate any Halloween party as a legendary dragon rider with this giant 72-inch mythical ice dragon blow-up costume! Features frosty blue dragon wings, ferocious dragon head, and high-speed built-in inflation blower.',
    features: ['Giant 72-inch ride-on ice dragon design', 'High-speed battery powered blower fan', 'Durable tear-resistant waterproof polyester', 'Frosty mythical ice wings & dragon horns'],
    affiliateLink: 'https://amzn.to/4gGcdYf'
  },
  {
    id: 'inflatable-party-costume',
    name: 'Funny Ride-On Inflatable Blow-Up Costume',
    category: 'adult',
    categories: ['adult'],
    price: '$39.99',
    image: inflatableBlowUpImage,
    description: 'Hilarious blow-up inflatable adult party costume with rapid inflation fan mechanism. Lightweight, breathable, and guaranteed to turn heads at every costume party and Halloween contest!',
    features: ['Instant blow-up inflation system', 'Heavy-duty battery pack & fan blower', 'Durable waterproof polyester construction', 'Roomy and ultra comfortable fit'],
    affiliateLink: 'https://amzn.to/4xIt0QE'
  },
  {
    id: 'minion-accessories',
    name: 'Minions Costume 3-Piece Accessories Kit',
    category: 'kids',
    categories: ['kids', 'adult'],
    price: '$9.99',
    image: minionAccessoriesImage,
    description: 'Instantly transform into your favorite yellow henchman with this 3-piece Minion costume set! Features signature steampunk goggles, comfortable yellow knit beanie hat, and black costume gloves.',
    features: ['Signature silver steampunk goggles', 'Stretchy yellow knit beanie cap', 'Classic black costume gloves', 'Perfect for quick DIY Minion cosplay for all ages'],
    affiliateLink: 'https://amzn.to/4rhuvmx'
  },
  {
    id: 'police-cop-costume-women',
    name: 'Police Officer Cop Uniform Costume Set for Adult Women',
    category: 'adult',
    categories: ['adult', 'couples'],
    price: '$34.99',
    image: copCostumeWomenImage,
    description: 'Step up as the chief of Halloween law and order in this classic women\'s police officer uniform set! Features a tailored navy police dress with official embroidered patches, matching structured peaked cap, duty utility belt, silver police badge, and toy handcuffs.',
    features: ['Tailored navy blue police uniform dress with badges', 'Matching structured police officer peaked hat', 'Duty belt with silver police badge & toy handcuffs', 'Flattering, comfortable fit for adult women'],
    affiliateLink: 'https://amzn.to/3UZLltL'
  },
  {
    id: 'ghostface-adult-costume',
    name: 'Ghost Face Scary Scream Costume for Adults & Teens',
    category: 'adult',
    categories: ['adult', 'couples'],
    price: '$34.99',
    image: ghostfaceAdultImage,
    description: 'The legendary 90s slasher classic returns! Adult Ghost Face Scream horror costume set featuring a menacing hooded black robe with flowing jagged sleeves, signature screaming white horror mask, fake blood, and prop knife.',
    features: ['Iconic white Ghost Face screaming horror mask', 'Flowing black hooded robe with jagged sleeve accents', 'Horror movie prop knife & fake blood accessories included', 'One-size fits most adults & teens for instant chills'],
    affiliateLink: 'https://amzn.to/46ePvjZ'
  },
  {
    id: 'ghostface-kids-costume',
    name: 'Ghost Face Scream Kids Hooded Robe Costume',
    category: 'kids',
    categories: ['kids'],
    price: '$29.99',
    image: ghostfaceKidsImage,
    description: 'Terrify the neighborhood with the official-style kids Ghost Face Scream horror costume! Includes the iconic screaming ghost mask with black mesh eye screens and a full-length black hooded robe with jagged draping sleeves.',
    features: ['Classic white screaming Ghost Face mask', 'Full-length hooded black robe with jagged drape sleeves', 'Breathable black mesh eye covering for safe vision', 'Child-sized authentic horror movie classic'],
    affiliateLink: 'https://amzn.to/4cuGLtz'
  },
  {
    id: 'superhero-masks',
    name: 'Kids & Adults Superhero Felt Masks Party Pack',
    category: 'kids',
    categories: ['kids', 'adult', 'couples'],
    price: '$12.99',
    image: superheroMasksImage,
    description: 'High-grade soft felt superhero eye masks with elastic bands. Features iconic comic hero styles in vivid multi-colors—comfortable, durable, and perfect for cosplay parties, school dress-up, and Halloween trick-or-treating!',
    features: ['Multi-pack colorful superhero eye masks', 'Comfortable soft felt with secure elastic band', 'Fits children, teens, and adults', 'Perfect for DIY superhero themes & party favors'],
    affiliateLink: 'https://amzn.to/4qYEZqE'
  },
  {
    id: 'skeleton-unicorn-inflatable',
    name: 'Ride-On Skeleton Unicorn Inflatable Costume',
    category: 'adult',
    categories: ['adult', 'kids'],
    price: '$39.99',
    image: skeletonUnicornInflatableImage,
    description: 'Ride into Halloween with this magical skeleton unicorn blow-up costume! Combines mythical fairy-tale flair with a spooky skeletal twist and rapid air-inflation blower.',
    features: ['Mythical skeleton unicorn ride-on styling', 'Built-in high speed inflation blower', 'Durable reinforced polyester material', 'Fun and lightweight for parties & trick-or-treating'],
    affiliateLink: 'https://amzn.to/4zXQxhZ'
  },
  {
    id: 'skeleton-costume',
    name: 'Glow Skeleton Full-Body Jumpsuit Costume',
    category: 'adult',
    categories: ['adult', 'couples'],
    price: '$34.99',
    image: skeletonJumpsuitWomenImage,
    description: 'Spooky full-body skeleton jumpsuit costume with detailed bone anatomy print. Ultra comfortable stretch fit for Halloween night celebrations!',
    features: ['High-definition skeleton bone print', 'Comfortable 4-way stretch fabric', 'Zip-up back closure', 'Breathable & photo-ready design'],
    affiliateLink: 'https://amzn.to/4gQND5F'
  },
  {
    id: 'wednesday-outfit',
    name: 'Wednesday Addams Nevermore Academy Uniform',
    category: 'adult',
    categories: ['adult', 'kids'],
    price: '$39.99',
    image: wednesdayCostumeImage,
    description: 'Iconic Wednesday Addams gothic school uniform costume featuring the dark striped Nevermore Academy blazer, matching pleated skirt, white collared shirt, and school tie.',
    features: ['Striped Nevermore Academy blazer jacket', 'Pleated gothic school uniform skirt', 'White collared shirt & tie included', 'Authentic gothic character styling'],
    affiliateLink: 'https://amzn.to/46c6BPp'
  },
  {
    id: 'barbie-outfit',
    name: 'Barbie The Movie Pink Western Jumpsuit Costume',
    category: 'adult',
    categories: ['adult', 'couples'],
    price: '$44.99',
    image: barbieCostumeImage,
    description: 'Stand out in this viral Barbie movie-inspired bright pink cowgirl jumpsuit outfit with lace-up western vest, flared bell bottoms, and matching pink neckerchief bandana.',
    features: ['Vibrant magenta-pink cowgirl vest', 'Matching high-waist flared pants', 'Western pink neck bandana scarf', 'Perfect for solo or Barbie & Ken couples'],
    affiliateLink: 'https://amzn.to/4dlGkC4'
  },
  {
    id: 'incredibles-outfit',
    name: 'The Incredibles Woman Elastigirl & Family Superhero Costume',
    category: 'couples',
    categories: ['adult', 'couples', 'kids'],
    price: '$39.99',
    image: incrediblesCostumeImage,
    description: 'Suit up as the heroic Mrs. Incredible / Elastigirl and superhero family with this official-style red & black Incredibles bodysuit featuring the iconic \'i\' emblem chest logo and black eye mask.',
    features: ['Official-style red & black Incredibles superhero suit', 'Iconic \'i\' emblem chest graphic', 'Classic superhero black eye mask included', 'Ideal for women, solo heroes, couples & family groups'],
    affiliateLink: 'https://amzn.to/4iyYFiP'
  },
  {
    id: 'spiderman-costume',
    name: 'Marvel Spider-Man Official Deluxe Zentai Costume',
    category: 'kids',
    categories: ['kids', 'adult', 'couples'],
    price: '$37.99',
    image: spidermanCostumeImage,
    description: 'Official Marvel Spider-Man deluxe zentai costume crafted with premium two-way stretch spandex, invisible zippers, and authentic web detailing for the ultimate superhero experience!',
    features: ['Official Marvel Spider-Man suit styling', 'Deluxe 2-way stretch breathable spandex', 'Concealed invisible zip closure & wrist openings', 'Vivid high-definition spider web graphics'],
    affiliateLink: 'https://amzn.to/46HdUif'
  },
  {
    id: 'inflatable-trex-costume',
    name: 'Inflatable T-Rex Dinosaur Blow-Up Costume',
    category: 'adult',
    categories: ['adult'],
    price: '$49.99',
    image: inflatableTrexImage,
    description: 'The legendary giant inflatable T-Rex costume that commands attention at every party! Includes built-in high-speed battery air blower fan.',
    features: ['Giant realistic Jurassic T-Rex design', 'High-efficiency battery powered inflation fan', 'Durable tear-resistant waterproof polyester', 'Clear viewing window with roomy interior'],
    affiliateLink: 'https://amzn.to/469pkv2'
  }
];

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'adult', label: 'Adult Costumes' },
  { id: 'kids', label: 'Kids Costumes' },
  { id: 'couples', label: 'Couples Costumes' }
];

export default function Products() {
  useBrowsingTracking();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || 
    product.category === selectedCategory || 
    product.categories.includes(selectedCategory)
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
                  referrerPolicy="no-referrer"
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
                    BUY NOW!🕸️
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