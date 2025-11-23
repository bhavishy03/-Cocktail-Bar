import { Card, CardContent } from './ui/card';
import { Users, Heart, Award, Handshake } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--twents-cream)] pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[var(--twents-black)] relative">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="font-['Lato'] text-[var(--twents-black)] text-lg leading-relaxed mb-8">
              Twent's Cocktail Bar & Cigar Lounge was born from a passion for refined hospitality and a love for 
              the timeless rituals of the world's great bars. Inspired by the golden age of the 1920s, our lounge 
              is a haven for those who appreciate intelligent indulgence, subtle spectacle, and genuine connection.
            </p>
          </div>

          {/* Partnership Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-black)] mb-6">
                A New Chapter: Partnership & Vision
              </h2>
              <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="font-['Lato'] text-[var(--twents-black)] text-lg leading-relaxed mb-6">
                After two successful seasons under the expert hand of Nico Lenz (Bar Tender on Duty), 2025 marks 
                a new era. Nico has joined forces with Beay Meeman, Founder and creative director of Smokingfish 
                Productions, to take Twent's to even greater heights.
              </p>
              <p className="font-['Lato'] text-[var(--twents-black)] text-lg leading-relaxed mb-8">
                Together, Beay and Nico bring decades of experience in luxury hospitality and event management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 text-[var(--twents-gold)] mr-4" />
                    <h3 className="font-['Cormorant_Garamond'] text-2xl text-[var(--twents-black)]">
                      Their Shared Vision
                    </h3>
                  </div>
                  <ul className="space-y-4 font-['Lato'] text-[var(--twents-black)]">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[var(--twents-gold)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        To create a sanctuary for Zurich's connoisseurs, where every detail—from the cocktail 
                        list to the ambiance and guest service—is curated for excellence.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[var(--twents-gold)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        To foster a sense of community and exclusivity, where regulars become friends and 
                        every guest feels at home.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[var(--twents-black)] text-[var(--twents-cream)]">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="w-8 h-8 text-[var(--twents-gold)] mr-4" />
                    <h3 className="font-['Cormorant_Garamond'] text-2xl">
                      Experience & Expertise
                    </h3>
                  </div>
                  <div className="space-y-6 font-['Lato']">
                    <div>
                      <h4 className="font-medium text-[var(--twents-gold)] mb-2">Beay Meeman</h4>
                      <p className="text-sm">
                        Hospitality expert and Founder of Smokingfish Productions, bringing innovative 
                        event management and luxury service expertise.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--twents-gold)] mb-2">Nico Lenz</h4>
                      <p className="text-sm">
                        Renowned bar professional from Bar Tender on Duty, with years of experience 
                        crafting exceptional cocktail experiences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-black)] mb-6">
                Our Philosophy
              </h2>
              <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-[var(--twents-black)] text-[var(--twents-cream)] art-deco-corner">
                <CardContent className="p-8 text-center">
                  <Heart className="w-12 h-12 text-[var(--twents-gold)] mx-auto mb-6" />
                  <h3 className="font-['Cormorant_Garamond'] text-2xl mb-4">
                    Timeless Sophistication
                  </h3>
                  <p className="font-['Lato'] text-sm leading-relaxed">
                    We honor the elegance and refinement of the golden age, creating an atmosphere 
                    that transcends fleeting trends.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[var(--twents-black)] text-[var(--twents-cream)] art-deco-corner">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-[var(--twents-gold)] mx-auto mb-6" />
                  <h3 className="font-['Cormorant_Garamond'] text-2xl mb-4">
                    Personalized Service
                  </h3>
                  <p className="font-['Lato'] text-sm leading-relaxed">
                    Every guest receives attentive, tailored service that anticipates needs and 
                    exceeds expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[var(--twents-black)] text-[var(--twents-cream)] art-deco-corner">
                <CardContent className="p-8 text-center">
                  <Handshake className="w-12 h-12 text-[var(--twents-gold)] mx-auto mb-6" />
                  <h3 className="font-['Cormorant_Garamond'] text-2xl mb-4">
                    Intelligent Indulgence
                  </h3>
                  <p className="font-['Lato'] text-sm leading-relaxed">
                    We celebrate the art of mindful enjoyment, where quality supersedes quantity 
                    in every aspect of the experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="bg-[var(--twents-emerald)] rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
              Join Us
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
            <p className="font-['Lato'] text-[var(--twents-cream)] text-lg leading-relaxed max-w-3xl mx-auto">
              We invite you to experience Twent's—a place where tradition is honored, innovation is celebrated, 
              and every night is an occasion. Step into our world and discover what it means to be part of 
              Zurich's most exclusive cocktail and cigar community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}