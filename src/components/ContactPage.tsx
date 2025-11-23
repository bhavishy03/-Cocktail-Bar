import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-[var(--twents-cream)] pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[var(--twents-emerald)] relative">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Contact Twent's
          </h1>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <p className="font-['Lato'] text-[var(--twents-cream)] text-lg">
            Get in touch with us for reservations, private events, or any inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-['Playfair_Display'] text-[var(--twents-black)] mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border art-deco-corner">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-[var(--twents-gold)] mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--twents-black)] mb-2">
                          Address
                        </h3>
                        <p className="font-['Lato'] text-[var(--twents-black)] leading-relaxed">
                          Seestrasse 30<br />
                          8802 Kilchberg<br />
                          Switzerland
                        </p>
                        <p className="font-['Lato'] text-[var(--twents-emerald)] text-sm mt-2">
                          Conveniently located by the lake in Kilchberg. Parking available.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border art-deco-corner">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-[var(--twents-gold)] mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--twents-black)] mb-2">
                          Phone
                        </h3>
                        <p className="font-['Lato'] text-[var(--twents-black)] text-lg font-medium">
                          076 520 21 99
                        </p>
                        <p className="font-['Lato'] text-[var(--twents-emerald)] text-sm mt-1">
                          Available during operating hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border art-deco-corner">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-[var(--twents-gold)] mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--twents-black)] mb-2">
                          Email
                        </h3>
                        <p className="font-['Lato'] text-[var(--twents-black)] text-lg font-medium">
                          contact@twents.ch
                        </p>
                        <p className="font-['Lato'] text-[var(--twents-emerald)] text-sm mt-1">
                          Response within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border art-deco-corner">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-[var(--twents-gold)] mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--twents-black)] mb-2">
                          Opening Hours
                        </h3>
                        <div className="font-['Lato'] text-[var(--twents-black)] space-y-1">
                          <p className="font-medium">Tuesday – Saturday</p>
                          <p>17:00 – 00:00</p>
                          <p className="text-sm text-[var(--twents-emerald)] mt-2">
                            Season: Mid-October to Mid-March
                          </p>
                          <p className="text-sm text-red-600">
                            Closed Sunday & Monday
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-['Playfair_Display'] text-[var(--twents-black)] mb-8">
                Find Us
              </h2>
              
              {/* Placeholder for map */}
              <Card className="bg-[var(--twents-black)] text-[var(--twents-cream)] mb-8 art-deco-corner">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-16 h-16 text-[var(--twents-gold)] mx-auto mb-6" />
                  <h3 className="text-2xl font-['Cormorant_Garamond'] mb-4">
                    Interactive Map
                  </h3>
                  <p className="font-['Lato'] mb-6 leading-relaxed">
                    Located in the heart of Kilchberg by Zurichsee, Twent's is easily accessible 
                    by car or public transport. Detailed directions available upon request.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[var(--twents-gold)] text-[var(--twents-gold)] hover:bg-[var(--twents-gold)] hover:text-[var(--twents-black)]"
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button
                  onClick={() => onPageChange('reservations')}
                  className="w-full bg-[var(--twents-emerald)] text-[var(--twents-cream)] hover:bg-[var(--twents-emerald-light)] py-6 text-lg font-['Lato'] tracking-wider"
                >
                  Make a Reservation
                </Button>
                
                <Button
                  onClick={() => onPageChange('events')}
                  variant="outline"
                  className="w-full border-[var(--twents-emerald)] text-[var(--twents-emerald)] hover:bg-[var(--twents-emerald)] hover:text-[var(--twents-cream)] py-6 text-lg font-['Lato'] tracking-wider"
                >
                  View Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-[var(--twents-black)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Follow Us
          </h2>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <p className="font-['Lato'] text-[var(--twents-cream)] text-lg mb-12 leading-relaxed">
            Stay connected with Twent's for the latest events, cocktail features, and exclusive updates.
          </p>
          
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="lg"
              className="text-[var(--twents-cream)] hover:text-[var(--twents-gold)] hover:bg-[var(--twents-emerald)]/20 p-4"
            >
              <Instagram className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-[var(--twents-cream)] hover:text-[var(--twents-gold)] hover:bg-[var(--twents-emerald)]/20 p-4"
            >
              <Facebook className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-[var(--twents-cream)] hover:text-[var(--twents-gold)] hover:bg-[var(--twents-emerald)]/20 p-4"
            >
              <Linkedin className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-[var(--twents-cream)] hover:text-[var(--twents-gold)] hover:bg-[var(--twents-emerald)]/20 p-4"
            >
              <Twitter className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </section>

      {/* Private Events Inquiry */}
      <section className="py-20 bg-[var(--twents-emerald)]">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-[var(--twents-cream)] art-deco-corner">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-['Playfair_Display'] text-[var(--twents-black)] mb-6">
                Private Events & Corporate Gatherings
              </h2>
              <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
              <p className="font-['Lato'] text-[var(--twents-black)] text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                Planning a special celebration or corporate event? Twent's offers exclusive venue hire 
                with personalized service, custom cocktail menus, and an unforgettable 1920s atmosphere. 
                Contact us to discuss your bespoke event requirements.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-['Lato'] text-[var(--twents-emerald)] font-medium mb-2">Event Capacity</h4>
                  <p className="font-['Lato'] text-[var(--twents-black)]">Up to 25 seated guests</p>
                </div>
                <div>
                  <h4 className="font-['Lato'] text-[var(--twents-emerald)] font-medium mb-2">Specialties</h4>
                  <p className="font-['Lato'] text-[var(--twents-black)]">Custom menus, cigar pairings, full bar service</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[var(--twents-emerald)] text-[var(--twents-cream)] hover:bg-[var(--twents-emerald-light)] px-8 py-3">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                <Button
                  variant="outline"
                  className="border-[var(--twents-emerald)] text-[var(--twents-emerald)] hover:bg-[var(--twents-emerald)] hover:text-[var(--twents-cream)] px-8 py-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Website Information */}
      <section className="py-12 bg-[var(--twents-cream-dark)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-['Lato'] text-[var(--twents-black)] mb-4">
            <span className="font-medium">Website:</span> www.twents.ch
          </p>
          <p className="font-['Lato'] text-[var(--twents-emerald)] text-sm">
            For the most up-to-date information on events, menu changes, and special offerings.
          </p>
        </div>
      </section>
    </div>
  );
}