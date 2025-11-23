import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Wine, Cigarette, Sparkles, Calendar, Users, MapPin, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[var(--twents-cream)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1564947774160-532ef016eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTIwcyUyMGFydCUyMGRlY28lMjBjb2NrdGFpbCUyMGJhciUyMGVsZWdhbnQlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc1NzQ4MTIzNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elegant cocktail bar atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--twents-black)]/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="art-deco-border pb-8 mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-4">
              Zurich's Most Exclusive
            </h1>
            <h2 className="text-2xl md:text-4xl font-['Cormorant_Garamond'] text-[var(--twents-gold)] mb-6">
              Cocktail Bar & Cigar Lounge
            </h2>
          </div>
          
          <p className="text-lg md:text-xl font-['Lato'] text-[var(--twents-cream)] mb-8 leading-relaxed">
            Timeless sophistication. Intelligent indulgence. A sanctuary by the lake.
          </p>
          
          <Button
            onClick={() => onPageChange('reservations')}
            className="bg-[var(--twents-gold)] text-[var(--twents-black)] hover:bg-[var(--twents-gold-light)] px-8 py-6 text-lg font-['Lato'] tracking-wider art-deco-corner"
          >
            Reserve Your Table
          </Button>
        </div>
      </section>

      {/* A New Era Section */}
      <section className="py-20 bg-[var(--twents-black)] relative">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
              A New Era on the Lake
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
            <p className="text-lg font-['Lato'] text-[var(--twents-cream)] max-w-3xl mx-auto leading-relaxed">
              Twent's invites you into a world where elegance meets camaraderie, and every visit feels like a privilege. 
              Step through our doors and discover a connoisseur's sanctuary inspired by the golden age of the 1920s—
              reimagined for Zurich's most discerning guests.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-20 bg-[var(--twents-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-black)] mb-6">
              Signature Experiences Await
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border-2 art-deco-corner">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-[var(--twents-gold)] mr-3" />
                  <h3 className="font-['Cormorant_Garamond'] text-[var(--twents-black)]">
                    Ladies Night
                  </h3>
                </div>
                <p className="font-['Lato'] text-[var(--twents-black)] mb-2">
                  Every Friday: Two cocktails for the price of one, exclusively for the ladies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border-2 art-deco-corner">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-[var(--twents-gold)] mr-3" />
                  <h3 className="font-['Cormorant_Garamond'] text-[var(--twents-black)]">
                    Saturday Event Series
                  </h3>
                </div>
                <p className="font-['Lato'] text-[var(--twents-black)] mb-2">
                  Oyster Night, Pata Negra Night, Champagne & Caviar Night, and Vintage Havana Night—
                  each a celebration of taste and refinement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border-2 art-deco-corner md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Wine className="w-6 h-6 text-[var(--twents-gold)] mr-3" />
                  <h3 className="font-['Cormorant_Garamond'] text-[var(--twents-black)]">
                    Curated Selection
                  </h3>
                </div>
                <p className="font-['Lato'] text-[var(--twents-black)] mb-2">
                  Savor our expertly crafted cocktails, rare spirits, and a handpicked selection of premium cigars.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Your Hosts */}
      <section className="py-20 bg-[var(--twents-black)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
              Meet Your Hosts
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto">
              <p className="font-['Lato'] text-[var(--twents-cream)] text-lg leading-relaxed mb-6">
                In 2025, a new partnership brings fresh energy to Twent's. Hospitality expert 
                <span className="text-[var(--twents-gold)] font-medium"> Beay Meeman</span> (Smokingfish Productions) 
                joins forces with renowned bar professional 
                <span className="text-[var(--twents-gold)] font-medium"> Nico Lenz</span> (Bar Tender on Duty) 
                to elevate your experience and set a new standard for luxury in Zurichsee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-[var(--twents-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-black)] mb-6">
              Gallery Preview
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 overflow-hidden art-deco-corner">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708721800786-ade594b2c14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2NrdGFpbHMlMjBjaWdhcnMlMjBhbWJlciUyMGxpZ2h0aW5nfGVufDF8fHx8MTc1NzQ4MTI0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury cocktails and cigars"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden art-deco-corner">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684697833154-15de05975e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29ja3RhaWwlMjBnbGFzc2VzJTIwbWFydGluaSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU3NDgxMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vintage cocktail glasses"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden art-deco-corner md:col-span-2 lg:col-span-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1726570293789-65107bb76f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBkZWNvJTIwZ2VvbWV0cmljJTIwcGF0dGVybnMlMjBnb2xkJTIwYmxhY2t8ZW58MXx8fHwxNzU3NDgxMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Art deco patterns"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => onPageChange('gallery')}
              variant="outline"
              className="border-[var(--twents-gold)] text-[var(--twents-gold)] hover:bg-[var(--twents-gold)] hover:text-[var(--twents-black)] px-8 py-3"
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Reserve Your Table */}
      <section className="py-20 bg-[var(--twents-black)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Reserve Your Table
          </h2>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <p className="font-['Lato'] text-[var(--twents-cream)] text-lg mb-8">
            Secure your place at Zurich's most exclusive bar.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-[var(--twents-gold)] mb-4" />
              <p className="font-['Lato'] text-[var(--twents-cream)] font-medium">076 520 21 99</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-[var(--twents-gold)] mb-4" />
              <p className="font-['Lato'] text-[var(--twents-cream)] font-medium">contact@twents.ch</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-[var(--twents-gold)] mb-4" />
              <p className="font-['Lato'] text-[var(--twents-cream)] font-medium">www.twents.ch</p>
            </div>
          </div>

          <Button
            onClick={() => onPageChange('reservations')}
            className="bg-[var(--twents-gold)] text-[var(--twents-black)] hover:bg-[var(--twents-gold-light)] px-8 py-6 text-lg font-['Lato'] tracking-wider"
          >
            Book Online Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[var(--twents-black)] border-t border-[var(--twents-gold)]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="w-5 h-5 text-[var(--twents-gold)]" />
            <p className="font-['Lato'] text-[var(--twents-cream)] text-sm">
              Seestrasse 30, 8802 Kilchberg, Switzerland
            </p>
          </div>
          <p className="font-['Lato'] text-[var(--twents-gold)] text-sm">
            Open Tuesday–Saturday, 17:00–00:00 | October–March
          </p>
        </div>
      </footer>
    </div>
  );
}