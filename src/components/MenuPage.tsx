import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Download, Wine, Coffee, Beer, Sparkles } from 'lucide-react';

export function MenuPage() {
  const menuSections = [
    {
      title: "Menu Classics",
      icon: Wine,
      items: [
        { name: "Old Fashioned", price: "18.00" },
        { name: "Mint Julep", price: "18.00" },
        { name: "Bees Knees", price: "18.00" },
        { name: "French 75", price: "23.00" },
        { name: "Mary Pickford", price: "18.00" },
        { name: "Sidecar", price: "18.00" }
      ]
    },
    {
      title: "Gin Cocktails",
      icon: Wine,
      items: [
        { name: "Negroni", price: "18.00" },
        { name: "Charly Chaplin", price: "18.00" },
        { name: "Southside", price: "18.00" },
        { name: "Clover Club", price: "18.00" },
        { name: "Aviation", price: "18.00" }
      ]
    },
    {
      title: "Vodka Cocktails",
      icon: Wine,
      items: [
        { name: "Cosmopolitan", price: "18.00" },
        { name: "Garrison Lane", price: "18.00" },
        { name: "Champ", price: "18.00" },
        { name: "Polly Punch", price: "18.00" },
        { name: "Bloody Mary", price: "18.00" }
      ]
    },
    {
      title: "Rum Cocktails",
      icon: Wine,
      items: [
        { name: "Rum Buck", price: "18.00" },
        { name: "Rum Raisin", price: "23.00" },
        { name: "Old Cuban", price: "18.00" },
        { name: "Mojito", price: "18.00" },
        { name: "Hillbilly", price: "18.00" }
      ]
    },
    {
      title: "Whiskey Cocktails",
      icon: Wine,
      items: [
        { name: "Dirty Old Bastard", price: "18.00" },
        { name: "Blood and Sand", price: "18.00" },
        { name: "Smoked Boulevardier", price: "18.00" },
        { name: "Lynchburg Lemonade", price: "18.00" },
        { name: "Manhattan", price: "18.00" }
      ]
    },
    {
      title: "Tequila Drinks",
      icon: Wine,
      items: [
        { name: "Mezcal Last Word", price: "18.00" },
        { name: "Margarita", price: "18.00" },
        { name: "Beachtwister", price: "18.00" },
        { name: "Mexican Mint Smash", price: "18.00" },
        { name: "The 212", price: "18.00" }
      ]
    },
    {
      title: "Joker Drinks",
      icon: Sparkles,
      items: [
        { name: "Adas Sour", price: "18.00" },
        { name: "Basil Smash", price: "18.00" },
        { name: "Espresso Martini", price: "18.00" },
        { name: "Port & Tonic", price: "18.00" },
        { name: "Shelby Ginger", price: "18.00" },
        { name: "Moscow Mule", price: "18.00" },
        { name: "Tiefseetaucher", price: "28.00" }
      ]
    },
    {
      title: "Sparkling & Champagne",
      icon: Sparkles,
      items: [
        { name: "Colli del Soglio Prosecco", price: "1 dl 9.50 / 7.5 dl 57.00" },
        { name: "Philippe Gonet Champagne", price: "1 dl 17.00 / 7.5 dl 105.00" },
        { name: "Billecart-Salmon Champagne", price: "7.5 dl 153.00" }
      ]
    },
    {
      title: "Beer",
      icon: Beer,
      items: [
        { name: "Seebeueb, Fräche Siech", price: "2.5 dl 6.00 / 4 dl 8.00" },
        { name: "Beer of the Month", price: "Ask the bartender" },
        { name: "Weihenstephan Weizenbier", price: "5 dl 9.50" },
        { name: "Augustiner Edelstoff", price: "3 dl 6.50 / 5 dl 9.00" },
        { name: "BRLO Naked, Alcohol Free", price: "3 dl 6.50" }
      ]
    },
    {
      title: "Soft Drinks & Coffee",
      icon: Coffee,
      items: [
        { name: "Sparkling & Still Water (5 dl)", price: "5.50" },
        { name: "Coca Cola / Zero (3 dl)", price: "5.50" },
        { name: "Tonic / Ginger Ale / Ginger Beer / Bitter Lemon (2 dl)", price: "5.50" },
        { name: "Fruit Juice Spritzer (5 dl)", price: "7.50" },
        { name: "Club Mate (3 dl)", price: "6.50" },
        { name: "Sanbitter", price: "6.00" },
        { name: "Crodino", price: "6.00" },
        { name: "Coffee / Espresso", price: "5.50" },
        { name: "Tea & Rum", price: "8.50" },
        { name: "Coffee Schnaps", price: "8.50" }
      ]
    }
  ];

  const mockTails = {
    title: "Mocktails",
    icon: Wine,
    items: [
      { name: "The Fluffy Rose", price: "15.00" },
      { name: "Lonesome Shelby", price: "16.00" },
      { name: "Amaretto Sour", price: "16.00" },
      { name: "Sober Tommy", price: "16.00" },
      { name: "The Hillbilly Bobs No Ruckus", price: "16.00" }
    ]
  };

  const deals = {
    title: "Deals",
    icon: Sparkles,
    items: [
      { name: "Churchill Deal", price: "29.00" },
      { name: "Upper Deck Deal", price: "22.00" },
      { name: "Lower Deck Deal", price: "16.00" }
    ]
  };

  const handleDownloadMenu = () => {
    // This would typically generate a PDF or link to a downloadable menu
    alert('Menu download feature would be implemented here. For now, you can save this page or contact us for a PDF version.');
  };

  return (
    <div className="min-h-screen bg-[var(--twents-cream)] pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[var(--twents-emerald)] relative">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Menu 2025/2026
          </h1>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <p className="font-['Lato'] text-[var(--twents-cream)] text-lg mb-8">
            All prices in Swiss Francs (CHF), incl. 8.1% VAT
          </p>
          <Button
            onClick={handleDownloadMenu}
            className="bg-[var(--twents-gold)] text-[var(--twents-black)] hover:bg-[var(--twents-gold-light)] px-8 py-4 text-lg font-['Lato'] tracking-wider"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Menu PDF
          </Button>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {menuSections.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <Card key={sectionIndex} className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border art-deco-corner">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-[var(--twents-black)]">
                      <IconComponent className="w-6 h-6 text-[var(--twents-gold)] mr-3" />
                      <span className="font-['Playfair_Display'] text-2xl">{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between py-2 border-b border-[var(--twents-gold)]/20 last:border-b-0">
                          <span className="font-['Lato'] text-[var(--twents-black)] font-medium">
                            {item.name}
                          </span>
                          <span className="font-['Lato'] text-[var(--twents-emerald)] font-medium ml-4">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Mocktails */}
            <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border art-deco-corner">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-[var(--twents-black)]">
                  <Wine className="w-6 h-6 text-[var(--twents-gold)] mr-3" />
                  <span className="font-['Playfair_Display'] text-2xl">{mockTails.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockTails.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between py-2 border-b border-[var(--twents-gold)]/20 last:border-b-0">
                      <span className="font-['Lato'] text-[var(--twents-black)] font-medium">
                        {item.name}
                      </span>
                      <span className="font-['Lato'] text-[var(--twents-emerald)] font-medium ml-4">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Deals */}
            <Card className="bg-[var(--twents-emerald)] text-[var(--twents-cream)] art-deco-corner">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <Sparkles className="w-6 h-6 text-[var(--twents-gold)] mr-3" />
                  <span className="font-['Playfair_Display'] text-2xl">{deals.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {deals.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between py-2 border-b border-[var(--twents-gold)]/20 last:border-b-0">
                      <span className="font-['Lato'] font-medium">
                        {item.name}
                      </span>
                      <span className="font-['Lato'] text-[var(--twents-gold)] font-medium ml-4">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-16 bg-[var(--twents-black)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Experience Notes
          </h2>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Wine className="w-8 h-8 text-[var(--twents-gold)] mx-auto mb-4" />
              <h3 className="font-['Cormorant_Garamond'] text-[var(--twents-cream)] mb-2">Craft Cocktails</h3>
              <p className="font-['Lato'] text-[var(--twents-cream)] text-sm">
                Each cocktail is carefully crafted with premium spirits and fresh ingredients
              </p>
            </div>
            <div className="text-center">
              <Coffee className="w-8 h-8 text-[var(--twents-gold)] mx-auto mb-4" />
              <h3 className="font-['Cormorant_Garamond'] text-[var(--twents-cream)] mb-2">Premium Selection</h3>
              <p className="font-['Lato'] text-[var(--twents-cream)] text-sm">
                Curated selection of rare spirits, fine wines, and craft beers
              </p>
            </div>
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-[var(--twents-gold)] mx-auto mb-4" />
              <h3 className="font-['Cormorant_Garamond'] text-[var(--twents-cream)] mb-2">Special Deals</h3>
              <p className="font-['Lato'] text-[var(--twents-cream)] text-sm">
                Exclusive package deals combining cigars, spirits, and cocktails
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}