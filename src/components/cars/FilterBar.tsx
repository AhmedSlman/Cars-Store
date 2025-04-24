import React from 'react';
import { useCars } from '../../context/CarsContext';

const FilterBar: React.FC = () => {
  const { 
    filterOptions, 
    setFilterOptions, 
    brands,
    minYear,
    maxYear,
    minPrice,
    maxPrice
  } = useCars();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFilterOptions(prev => ({
      ...prev,
      [name]: name.includes('Price') ? parseInt(value) : value
    }));
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-8 transition-all">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Filter Vehicles</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-4">
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Brand
          </label>
          <select
            id="brand"
            name="brand"
            value={filterOptions.brand}
            onChange={handleChange}
            className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="minYear" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Min Year: {filterOptions.minYear}
          </label>
          <input
            type="range"
            id="minYear"
            name="minYear"
            min={minYear}
            max={maxYear}
            value={filterOptions.minYear}
            onChange={handleChange}
            className="block w-full cursor-pointer accent-blue-600"
          />
        </div>
        
        <div>
          <label htmlFor="maxYear" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Max Year: {filterOptions.maxYear}
          </label>
          <input
            type="range"
            id="maxYear"
            name="maxYear"
            min={minYear}
            max={maxYear}
            value={filterOptions.maxYear}
            onChange={handleChange}
            className="block w-full cursor-pointer accent-blue-600"
          />
        </div>
        
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Min Price: {formatPrice(filterOptions.minPrice)}
          </label>
          <input
            type="range"
            id="minPrice"
            name="minPrice"
            min={minPrice}
            max={maxPrice}
            step={5000}
            value={filterOptions.minPrice}
            onChange={handleChange}
            className="block w-full cursor-pointer accent-blue-600"
          />
        </div>
        
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Max Price: {formatPrice(filterOptions.maxPrice)}
          </label>
          <input
            type="range"
            id="maxPrice"
            name="maxPrice"
            min={minPrice}
            max={maxPrice}
            step={5000}
            value={filterOptions.maxPrice}
            onChange={handleChange}
            className="block w-full cursor-pointer accent-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;