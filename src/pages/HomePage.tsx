import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/hero/HeroSection';
import CarGrid from '../components/cars/CarGrid';
import CarModal from '../components/cars/CarModal';
import ContactSection from '../components/contact/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Header />
      <main>
        <HeroSection />
        <CarGrid />
        <ContactSection />
      </main>
      <CarModal />
      <Footer />
    </div>
  );
};

export default HomePage;