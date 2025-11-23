import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import twentsLogo from "figma:asset/5a27bff53fc216a0fd283361020f5c1bd05d6bd3.png";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({
  currentPage,
  onPageChange,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "reservations", label: "Reservations" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--twents-black)] border-b border-[var(--twents-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={twentsLogo}
              alt="Twent's Bar Logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`font-['Lato'] text-sm tracking-wider transition-colors duration-200 ${
                  currentPage === item.id
                    ? "text-[var(--twents-gold)] border-b border-[var(--twents-gold)]"
                    : "text-[var(--twents-cream)] hover:text-[var(--twents-gold)]"
                } py-2`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--twents-cream)] hover:text-[var(--twents-gold)]"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--twents-gold)] bg-[var(--twents-black)]">
            <div className="px-2 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 font-['Lato'] text-sm tracking-wider transition-colors duration-200 ${
                    currentPage === item.id
                      ? "text-[var(--twents-gold)] bg-[var(--twents-gold)]/20"
                      : "text-[var(--twents-cream)] hover:text-[var(--twents-gold)] hover:bg-[var(--twents-gold)]/10"
                  } rounded`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}