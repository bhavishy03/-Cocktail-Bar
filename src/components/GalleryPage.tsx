import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1564947774160-532ef016eaa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTIwcyUyMGFydCUyMGRlY28lMjBjb2NrdGFpbCUyMGJhciUyMGVsZWdhbnQlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc1NzQ4MTIzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Elegant cocktail bar atmosphere with art deco lighting",
      category: "Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1708721800786-ade594b2c14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2NrdGFpbHMlMjBjaWdhcnMlMjBhbWJlciUyMGxpZ2h0aW5nfGVufDF8fHx8MTc1NzQ4MTI0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Luxury cocktails and premium cigars with amber lighting",
      category: "Cocktails & Cigars"
    },
    {
      src: "https://images.unsplash.com/photo-1684697833154-15de05975e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29ja3RhaWwlMjBnbGFzc2VzJTIwbWFydGluaSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU3NDgxMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Vintage cocktail glasses and martini preparation",
      category: "Cocktails & Cigars"
    },
    {
      src: "https://images.unsplash.com/photo-1726570293789-65107bb76f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBkZWNvJTIwZ2VvbWV0cmljJTIwcGF0dGVybnMlMjBnb2xkJTIwYmxhY2t8ZW58MXx8fHwxNzU3NDgxMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Art deco geometric patterns in gold and black",
      category: "Design Elements"
    },
    {
      src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhciUyMGludGVyaW9yJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTc0ODEzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Sophisticated bar interior with warm lighting",
      category: "Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaWdhciUyMGxvdW5nZSUyMGx1eHVyeXxlbnwxfHx8fDE3NTc0ODEzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Luxury cigar lounge with leather seating",
      category: "Cigar Lounge"
    },
    {
      src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGFnbmUlMjBnbGFzc2VzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTc0ODEzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Elegant champagne glasses and bottle service",
      category: "Events"
    },
    {
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjB0ZW5kZXIlMjBjb2NrdGFpbCUyMG1ha2luZ3xlbnwxfHx8fDE3NTc0ODEzODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Professional bartender crafting cocktails",
      category: "Cocktails & Cigars"
    },
    {
      src: "https://images.unsplash.com/photo-1481833958012-de0050ac4eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwZWxlZ2FudCUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzU3NDgxMzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Elegant dining atmosphere with intimate lighting",
      category: "Interior"
    }
  ];

  const categories = ["All", "Interior", "Cocktails & Cigars", "Cigar Lounge", "Events", "Design Elements"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--twents-cream)] pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[var(--twents-black)] relative">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <p className="font-['Lato'] text-[var(--twents-cream)] text-lg">
            A glimpse inside Twent's—from art deco interiors and intimate gatherings 
            to signature cocktails and exclusive events.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-[var(--twents-cream-dark)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`font-['Lato'] tracking-wide ${
                  selectedCategory === category
                    ? "bg-[var(--twents-emerald)] text-[var(--twents-cream)] hover:bg-[var(--twents-emerald-light)]"
                    : "border-[var(--twents-emerald)] text-[var(--twents-emerald)] hover:bg-[var(--twents-emerald)] hover:text-[var(--twents-cream)]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={`${selectedCategory}-${index}`}
                className="group cursor-pointer overflow-hidden art-deco-corner hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[var(--twents-black)]/0 group-hover:bg-[var(--twents-black)]/30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-[var(--twents-cream)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <p className="font-['Lato'] text-sm font-medium mb-1">{image.category}</p>
                      <p className="font-['Lato'] text-xs">Click to view</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="font-['Lato'] text-[var(--twents-black)] text-lg">
                No images found in the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-[var(--twents-black)]/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              onClick={closeLightbox}
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 text-[var(--twents-cream)] hover:text-[var(--twents-gold)] bg-[var(--twents-black)]/50 hover:bg-[var(--twents-black)]/70"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={goToPrevious}
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-[var(--twents-cream)] hover:text-[var(--twents-gold)] bg-[var(--twents-black)]/50 hover:bg-[var(--twents-black)]/70"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={goToNext}
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-[var(--twents-cream)] hover:text-[var(--twents-gold)] bg-[var(--twents-black)]/50 hover:bg-[var(--twents-black)]/70"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="relative">
              <ImageWithFallback
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--twents-black)]/80 to-transparent p-6">
                <p className="font-['Lato'] text-[var(--twents-cream)] text-center">
                  <span className="text-[var(--twents-gold)] font-medium">{filteredImages[selectedImage].category}</span>
                  <br />
                  {filteredImages[selectedImage].alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-[var(--twents-emerald)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Experience Twent's Yourself
          </h2>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <p className="font-['Lato'] text-[var(--twents-cream)] text-lg mb-8 leading-relaxed">
            These images capture just a glimpse of the Twent's experience. Join us for an evening 
            of sophisticated cocktails, premium cigars, and unparalleled ambiance.
          </p>
          <Button
            onClick={() => window.history.back()}
            className="bg-[var(--twents-gold)] text-[var(--twents-black)] hover:bg-[var(--twents-gold-light)] px-8 py-4 text-lg font-['Lato'] tracking-wider"
          >
            Reserve Your Table
          </Button>
        </div>
      </section>
    </div>
  );
}