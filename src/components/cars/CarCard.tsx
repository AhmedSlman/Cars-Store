import React from 'react';
import { Car } from '../../types/types';
import { Fuel, Calendar, DollarSign, Box, Check } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <article 
      className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-48 md:h-56">
        <img 
          src={car.images[0]} 
          alt={`${car.brand} ${car.model}`} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
          {car.available ? 'Available' : 'Sold'}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
          {car.brand} {car.model}
        </h3>
        
        <div className="flex items-center text-slate-600 dark:text-slate-300 mb-3">
          <Calendar className="w-4 h-4 mr-1" /> 
          <span className="text-sm">{car.year}</span>
          <span className="mx-2">•</span>
          <Fuel className="w-4 h-4 mr-1" /> 
          <span className="text-sm">{car.fuelType}</span>
          <span className="mx-2">•</span>
          <Box className="w-4 h-4 mr-1" /> 
          <span className="text-sm">{car.transmission}</span>
        </div>
        
        <div className="mb-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {formatPrice(car.price)}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {car.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="inline-flex items-center text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-full">
              <Check className="w-3 h-3 mr-1 text-blue-500" /> 
              {feature}
            </div>
          ))}
        </div>
        
        <button 
          className="w-full py-2 bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-800 dark:text-slate-200 font-medium rounded-lg transition-colors flex items-center justify-center"
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default CarCard;