import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { carsData } from '../../data/carsData';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredCars = carsData.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredCars.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredCars.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredCars.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + featuredCars.length) % featuredCars.length);
  };

  return (
    <section 
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-slate-900"
    >
      {/* Carousel */}
      <div className="absolute inset-0">
        {featuredCars.map((car, index) => (
          <div
            key={car.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/10 z-10" />
            <img
              src={car.images[0]}
              alt={`${car.brand} ${car.model}`}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight animate-fade-in">
            Discover <span className="text-blue-500">Luxury</span> on Wheels
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl animate-fade-in animation-delay-200">
            Experience the perfect blend of performance, style, and comfort with our
            premium selection of luxury vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
            <a
              href="#cars"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Vehicles
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-transparent border border-white/30 hover:border-white/70 text-white font-medium rounded-lg transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-2 z-20">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {featuredCars.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;