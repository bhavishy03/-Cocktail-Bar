import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { EventsPage } from './components/EventsPage';
import { MenuPage } from './components/MenuPage';
import { GalleryPage } from './components/GalleryPage';
import { ReservationsPage } from './components/ReservationsPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage />;
      case 'events':
        return <EventsPage onPageChange={handlePageChange} />;
      case 'menu':
        return <MenuPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'reservations':
        return <ReservationsPage />;
      case 'contact':
        return <ContactPage onPageChange={handlePageChange} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--twents-cream)]">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}