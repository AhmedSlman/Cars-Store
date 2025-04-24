import React, { useEffect, useState } from 'react';
import { X, ChevronRight, ChevronLeft, Calendar, DollarSign, Fuel, Box, Check, MessageSquare } from 'lucide-react';
import { useCars } from '../../context/CarsContext';

const CarModal: React.FC = () => {
  const { selectedCar, setSelectedCar } = useCars();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    if (selectedCar) {
      document.body.style.overflow = 'hidden';
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCar]);
  
  if (!selectedCar) return null;
  
  const handleClose = () => {
    setSelectedCar(null);
  };
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % selectedCar.images.length);
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + selectedCar.images.length) % selectedCar.images.length);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
            <img 
              src={selectedCar.images[activeImageIndex]} 
              alt={`${selectedCar.brand} ${selectedCar.model}`} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {selectedCar.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-900 hover:bg-white transition"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-900 hover:bg-white transition"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
          
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {selectedCar.brand} {selectedCar.model}
              </h2>
              <div className="flex items-center text-slate-600 dark:text-slate-300 mb-2">
                <Calendar className="w-4 h-4 mr-1" /> 
                <span className="text-sm">{selectedCar.year}</span>
                <span className="mx-2">•</span>
                <Fuel className="w-4 h-4 mr-1" /> 
                <span className="text-sm">{selectedCar.fuelType}</span>
                <span className="mx-2">•</span>
                <Box className="w-4 h-4 mr-1" /> 
                <span className="text-sm">{selectedCar.transmission}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {formatPrice(selectedCar.price)}
              </div>
            </div>
          </div>
          
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            {selectedCar.description}
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedCar.features.map((feature, index) => (
                <div key={index} className="flex items-center text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 mr-2 text-green-500" /> 
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1 text-slate-700 dark:text-slate-300">
              <div className="flex justify-between">
                <span>Mileage:</span>
                <span className="font-medium">{selectedCar.mileage.toLocaleString()} miles</span>
              </div>
              <div className="flex justify-between">
                <span>Fuel Type:</span>
                <span className="font-medium">{selectedCar.fuelType}</span>
              </div>
              <div className="flex justify-between">
                <span>Transmission:</span>
                <span className="font-medium">{selectedCar.transmission}</span>
              </div>
            </div>
            <div className="flex flex-col space-y-1 text-slate-700 dark:text-slate-300">
              <div className="flex justify-between">
                <span>Year:</span>
                <span className="font-medium">{selectedCar.year}</span>
              </div>
              <div className="flex justify-between">
                <span>Make:</span>
                <span className="font-medium">{selectedCar.brand}</span>
              </div>
              <div className="flex justify-between">
                <span>Model:</span>
                <span className="font-medium">{selectedCar.model}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="flex-1 inline-flex justify-center items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg"
              onClick={handleClose}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact About This Vehicle
            </a>
            <button 
              onClick={handleClose}
              className="flex-1 px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;