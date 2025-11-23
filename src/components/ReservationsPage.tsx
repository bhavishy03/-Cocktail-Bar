import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Calendar, Clock, Users, Phone, Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

export function ReservationsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    timeFrom: '',
    timeTo: '',
    seats: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--twents-cream)] pt-20 flex items-center justify-center">
        <Card className="max-w-2xl mx-4 bg-[var(--twents-emerald)] text-[var(--twents-cream)] art-deco-corner">
          <CardContent className="p-12 text-center">
            <CheckCircle className="w-16 h-16 text-[var(--twents-gold)] mx-auto mb-8" />
            <h2 className="text-3xl font-['Playfair_Display'] mb-6">Reservation Confirmed</h2>
            <p className="font-['Lato'] text-lg mb-8 leading-relaxed">
              Thank you for your reservation request. We will contact you within 24 hours to confirm 
              your booking and provide any additional details.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-['Lato'] text-[var(--twents-gold)] font-medium mb-2">Contact Information</h4>
                <p className="font-['Lato'] text-sm">Phone: 076 520 21 99</p>
                <p className="font-['Lato'] text-sm">Email: contact@twents.ch</p>
              </div>
              <div>
                <h4 className="font-['Lato'] text-[var(--twents-gold)] font-medium mb-2">Your Reservation</h4>
                <p className="font-['Lato'] text-sm">Date: {formData.date}</p>
                <p className="font-['Lato'] text-sm">Seats: {formData.seats}</p>
              </div>
            </div>
            <Button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  phone: '',
                  email: '',
                  date: '',
                  timeFrom: '',
                  timeTo: '',
                  seats: '',
                  specialRequests: ''
                });
              }}
              className="bg-[var(--twents-gold)] text-[var(--twents-black)] hover:bg-[var(--twents-gold-light)]"
            >
              Make Another Reservation
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--twents-cream)] pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[var(--twents-emerald)] relative">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
            Reserve Your Table
          </h1>
          <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto mb-8"></div>
          <p className="font-['Lato'] text-[var(--twents-cream)] text-lg">
            Book your seat at Twent's Cocktail Bar & Cigar Lounge.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Alert className="mb-8 border-[var(--twents-gold)] bg-[var(--twents-cream-dark)]">
            <AlertCircle className="h-4 w-4 text-[var(--twents-emerald)]" />
            <AlertDescription className="font-['Lato'] text-[var(--twents-black)]">
              <strong>Maximum 25 seats available per night.</strong> Reserve early to secure your place. 
              Walk-in guests are welcome for standing room at the bar.
            </AlertDescription>
          </Alert>

          <Card className="bg-[var(--twents-cream-dark)] border-[var(--twents-gold)] border-2 art-deco-corner">
            <CardHeader>
              <CardTitle className="flex items-center text-[var(--twents-black)]">
                <Calendar className="w-6 h-6 text-[var(--twents-gold)] mr-3" />
                <span className="font-['Playfair_Display'] text-2xl">Reservation Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="font-['Lato'] text-[var(--twents-black)]">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-[var(--twents-cream)] border-[var(--twents-emerald)] focus:border-[var(--twents-gold)]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="font-['Lato'] text-[var(--twents-black)]">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-[var(--twents-cream)] border-[var(--twents-emerald)] focus:border-[var(--twents-gold)]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="font-['Lato'] text-[var(--twents-black)]">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-[var(--twents-cream)] border-[var(--twents-emerald)] focus:border-[var(--twents-gold)]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-['Lato'] text-[var(--twents-black)]">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-[var(--twents-cream)] border-[var(--twents-emerald)] focus:border-[var(--twents-gold)]"
                    />
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="date" className="font-['Lato'] text-[var(--twents-black)]">
                      Reservation Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="mt-1 bg-[var(--twents-cream)] border-[var(--twents-emerald)] focus:border-[var(--twents-gold)]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeFrom" className="font-['Lato'] text-[var(--twents-black)]">
                      From *
                    </Label>
                    <Input
                      id="timeFrom"
                      name="timeFrom"
                      type="time"
                      value={formData.timeFrom}
                      onChange={handleInputChange}
                      required
                      min="17:00"
                      max="23:30"
                      className="mt-1 bg-[var(--twents-cream)] border-[var(--twents-emerald)] focus:border-[var(--twents-gold)]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeTo" className="font-['Lato'] text-[var(--twents-black)]">
                      To *
                    </Label>
                    <Input
                      id="timeTo"
                      name="timeTo"
                      type="time"
                      value={formData.timeTo}
                      onChange={handleInputChange}
                      required
                      min="17:30"
                      max="00:00"
                      className="mt-1 bg-[var(--twents-cream)] border-[var(--twents-emerald)] focus:border-[var(--twents-gold)]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="seats" className="font-['Lato'] text-[var(--twents-black)]">
                    Number of Seats (1-25) *
                  </Label>
                  <Input
                    id="seats"
                    name="seats"
                    type="number"
                    min="1"
                    max="25"
                    value={formData.seats}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-[var(--twents-cream)] border-[var(--twents-emerald)] focus:border-[var(--twents-gold)] max-w-xs"
                  />
                </div>

                <div>
                  <Label htmlFor="specialRequests" className="font-['Lato'] text-[var(--twents-black)]">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any special occasions, dietary requirements, or preferences..."
                    className="mt-1 bg-[var(--twents-cream)] border-[var(--twents-emerald)] focus:border-[var(--twents-gold)] min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[var(--twents-emerald)] text-[var(--twents-cream)] hover:bg-[var(--twents-emerald-light)] py-6 text-lg font-['Lato'] tracking-wider"
                >
                  {isLoading ? 'Submitting...' : 'Submit Reservation'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Booking Methods */}
      <section className="py-20 bg-[var(--twents-black)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[var(--twents-cream)] mb-6">
              Alternative Booking Methods
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[var(--twents-emerald)] text-[var(--twents-cream)] art-deco-corner">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-[var(--twents-gold)] mx-auto mb-6" />
                <h3 className="text-2xl font-['Cormorant_Garamond'] mb-4">Call Us Directly</h3>
                <p className="font-['Lato'] mb-6">
                  Speak with our team for immediate assistance with your reservation.
                </p>
                <p className="text-2xl font-['Lato'] text-[var(--twents-gold)] font-medium">
                  076 520 21 99
                </p>
                <p className="font-['Lato'] text-sm mt-2 opacity-90">
                  Tuesday–Saturday, 17:00–00:00
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[var(--twents-gold)] text-[var(--twents-black)] art-deco-corner">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-[var(--twents-black)] mx-auto mb-6" />
                <h3 className="text-2xl font-['Cormorant_Garamond'] mb-4">Email Reservation</h3>
                <p className="font-['Lato'] mb-6">
                  Send us your reservation details and we'll get back to you promptly.
                </p>
                <p className="text-xl font-['Lato'] font-medium">
                  contact@twents.ch
                </p>
                <p className="font-['Lato'] text-sm mt-2 opacity-80">
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-[var(--twents-cream-dark)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-['Playfair_Display'] text-[var(--twents-black)] mb-6">
              Important Information
            </h2>
            <div className="w-24 h-1 bg-[var(--twents-gold)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-[var(--twents-gold)] mr-3" />
                <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--twents-black)]">
                  Seating Policy
                </h3>
              </div>
              <ul className="space-y-2 font-['Lato'] text-[var(--twents-black)]">
                <li>• Maximum 25 reserved seats per night</li>
                <li>• Walk-in guests welcome for standing room</li>
                <li>• Reservations recommended for guaranteed seating</li>
                <li>• Group bookings (8+ people) may require deposit</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-[var(--twents-gold)] mr-3" />
                <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--twents-black)]">
                  Operating Hours
                </h3>
              </div>
              <ul className="space-y-2 font-['Lato'] text-[var(--twents-black)]">
                <li>• Tuesday - Saturday: 17:00 - 00:00</li>
                <li>• Closed Sunday & Monday</li>
                <li>• Season: Mid-October to Mid-March</li>
                <li>• Last orders: 23:30</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[var(--twents-emerald)] rounded-lg text-center">
            <p className="font-['Lato'] text-[var(--twents-cream)] leading-relaxed">
              <strong>Confirmation:</strong> You will receive a confirmation once your reservation is complete. 
              For group bookings or special requests, please contact us directly at 
              <span className="text-[var(--twents-gold)]"> contact@twents.ch</span> or 
              <span className="text-[var(--twents-gold)]"> 076 520 21 99</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}