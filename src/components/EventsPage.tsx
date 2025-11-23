import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Clock, Users, Sparkles, Fish, Utensils, GlassWater, Cigarette } from 'lucide-react';

interface EventsPageProps {
  onPageChange: (page: string) => void;
}

export function EventsPage({ onPageChange }: EventsPageProps) {
  const regularEvents = [
    {
      title: "Ladies Night",
      day: "Every Friday",
      time: "17:00 - 00:00",
      description: "Every Friday, ladies enjoy two cocktails for the price of one.",
      icon: Sparkles,
      color: "bg-[var(--twents-gold)]"
    }
  ];

  const saturdayEvents = [
    {
      title: "Oyster Night",
      date: "1st Saturday",
      description: "Fresh oysters paired with champagne and classic cocktails for the ultimate maritime experience.",
      icon: Fish,
      color: "bg-[var(--twents-black)]"
    },
    {
      title: "Pata Negra Night",
      date: "2nd Saturday",
      description: "Experience the finest Spanish ham alongside carefully selected wines and premium spirits.",
      icon: Utensils,
      color: "bg-[var(--twents-black)]"
    },
    {
      title: "Champagne & Caviar Night",
      date: "3rd Saturday",
      description: "An evening of pure luxury featuring premium champagne and the world's finest caviar.",
      icon: GlassWater,
      color: "bg-[var(--twents-gold)]"
    },
    {
      title: "Vintage Havana Night",
      date: "4th Saturday",
      description: "Celebrate the art of premium cigars with rare spirits and Cuban-inspired cocktails.",
      icon: Cigarette,
      color: "bg-[var(--twents-gold-dark)]"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--twents-cream)] pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[var(--twents-black)] relative">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Signature Events
          </h1>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <p className="font-['Lato'] text-[var(--twents-cream)] text-lg leading-relaxed">
            At Twent's Cocktail Bar & Cigar Lounge, every week is an invitation to indulge in something extraordinary.
          </p>
        </div>
      </section>

      {/* Ladies Night Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-black)] mb-6">
              Weekly Highlights
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto"></div>
          </div>

          {regularEvents.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <Card key={index} className="bg-[var(--twents-black)] text-[var(--twents-cream)] mb-8 art-deco-corner">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className={`${event.color} p-4 rounded-lg mb-6 md:mb-0 md:mr-8`}>
                      <IconComponent className="w-8 h-8 text-[var(--twents-black)]" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] mb-4">
                        {event.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-[var(--twents-gold)] mr-2" />
                          <span className="font-['Lato'] text-[var(--twents-gold)]">{event.day}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-[var(--twents-gold)] mr-2" />
                          <span className="font-['Lato'] text-[var(--twents-gold)]">{event.time}</span>
                        </div>
                      </div>
                      <p className="font-['Lato'] text-lg leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Saturday Luxury Events */}
      <section className="py-20 bg-[var(--twents-cream-dark)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-black)] mb-6">
              Saturday Luxury Event Series
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
            <p className="font-['Lato'] text-[var(--twents-black)] text-lg max-w-3xl mx-auto leading-relaxed">
              Each Saturday brings a unique culinary and cocktail experience, rotating monthly to ensure 
              every visit offers something extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {saturdayEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Card key={index} className="bg-[var(--twents-cream)] border-[var(--twents-gold)] border-2 art-deco-corner hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`${event.color} p-3 rounded-lg mr-4`}>
                        <IconComponent className="w-6 h-6 text-[var(--twents-cream)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-['Playfair_Display'] text-[var(--twents-black)] mb-1">
                          {event.title}
                        </h3>
                        <p className="font-['Lato'] text-[var(--twents-gold)] text-sm font-medium">
                          {event.date}
                        </p>
                      </div>
                    </div>
                    <p className="font-['Lato'] text-[var(--twents-black)] leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reservations Notice */}
      <section className="py-20 bg-[var(--twents-black)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-[var(--twents-gold)] mr-4" />
            <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[var(--twents-cream)]">
              Reservations Recommended
            </h2>
          </div>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <p className="font-['Lato'] text-[var(--twents-cream)] text-lg mb-8 leading-relaxed">
            Limited seating for all special events. Reserve early to ensure your place at these exclusive experiences.
          </p>
          <Button
            onClick={() => onPageChange('reservations')}
            className="bg-[var(--twents-gold)] text-[var(--twents-black)] hover:bg-[var(--twents-gold-light)] px-8 py-4 text-lg font-['Lato'] tracking-wider"
          >
            Reserve Your Table
          </Button>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 bg-[var(--twents-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-black)] mb-6">
              Private Events & Corporate Gatherings
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          </div>

          <Card className="bg-[var(--twents-black)] text-[var(--twents-cream)] art-deco-corner">
            <CardContent className="p-12 text-center">
              <Users className="w-16 h-16 text-[var(--twents-gold)] mx-auto mb-8" />
              <h3 className="text-2xl font-['Cormorant_Garamond'] mb-6">
                Exclusive Venue Hire
              </h3>
              <p className="font-['Lato'] text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Twent's is available for private celebrations and exclusive corporate evenings. 
                Create unforgettable moments in our sophisticated 1920s-inspired setting with 
                personalized service and bespoke cocktail experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="font-['Lato'] text-[var(--twents-gold)] font-medium mb-2">Capacity</h4>
                  <p className="font-['Lato'] text-sm">Up to 25 seated guests</p>
                </div>
                <div>
                  <h4 className="font-['Lato'] text-[var(--twents-gold)] font-medium mb-2">Services</h4>
                  <p className="font-['Lato'] text-sm">Custom cocktail menus, cigar selection, catering</p>
                </div>
                <div>
                  <h4 className="font-['Lato'] text-[var(--twents-gold)] font-medium mb-2">Contact</h4>
                  <p className="font-['Lato'] text-sm">contact@twents.ch</p>
                </div>
              </div>
              <Button
                onClick={() => onPageChange('contact')}
                variant="outline"
                className="border-[var(--twents-gold)] text-[var(--twents-gold)] hover:bg-[var(--twents-gold)] hover:text-[var(--twents-black)] px-8 py-3"
              >
                Discuss Your Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}