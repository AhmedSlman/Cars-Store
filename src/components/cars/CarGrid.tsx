import React from 'react';
import { useCars } from '../../context/CarsContext';
import CarCard from './CarCard';
import FilterBar from './FilterBar';

const CarGrid: React.FC = () => {
  const { filteredCars, setSelectedCar } = useCars();

  return (
    <section id="cars" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Explore Our Premium Collection
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Browse through our carefully selected range of luxury vehicles. Each car in our
            collection is thoroughly inspected and maintained to the highest standards.
          </p>
        </div>
        
        <FilterBar />
        
        {filteredCars.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
              No vehicles match your search criteria
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your filters to find the perfect vehicle
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <CarCard 
                key={car.id} 
                car={car} 
                onClick={() => setSelectedCar(car)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CarGrid;