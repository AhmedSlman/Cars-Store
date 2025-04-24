import React, { createContext, useState, useContext, useEffect } from 'react';
import { Car, FilterOptions } from '../types/types';
import { carsData, brands } from '../data/carsData';

type CarsContextType = {
  cars: Car[];
  filteredCars: Car[];
  selectedCar: Car | null;
  filterOptions: FilterOptions;
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
  setSelectedCar: (car: Car | null) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  brands: string[];
  minYear: number;
  maxYear: number;
  minPrice: number;
  maxPrice: number;
};

const defaultFilterOptions: FilterOptions = {
  brand: 'All Brands',
  minYear: 2000,
  maxYear: 2025,
  minPrice: 0,
  maxPrice: 500000,
};

const CarsContext = createContext<CarsContextType | undefined>(undefined);

export const CarsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cars] = useState<Car[]>(carsData);
  const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>(defaultFilterOptions);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Calculate range values from data
  const minYear = Math.min(...cars.map(car => car.year));
  const maxYear = Math.max(...cars.map(car => car.year));
  const minPrice = Math.min(...cars.map(car => car.price));
  const maxPrice = Math.max(...cars.map(car => car.price));

  useEffect(() => {
    let result = [...cars];

    // Apply search query filtering
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(car => 
        car.brand.toLowerCase().includes(query) || 
        car.model.toLowerCase().includes(query) ||
        car.year.toString().includes(query)
      );
    }

    // Apply brand filtering
    if (filterOptions.brand !== 'All Brands') {
      result = result.filter(car => car.brand === filterOptions.brand);
    }

    // Apply year range filtering
    result = result.filter(car => 
      car.year >= filterOptions.minYear && car.year <= filterOptions.maxYear
    );

    // Apply price range filtering
    result = result.filter(car => 
      car.price >= filterOptions.minPrice && car.price <= filterOptions.maxPrice
    );

    setFilteredCars(result);
  }, [cars, filterOptions, searchQuery]);

  return (
    <CarsContext.Provider value={{
      cars,
      filteredCars,
      selectedCar,
      setSelectedCar,
      filterOptions,
      setFilterOptions,
      searchQuery,
      setSearchQuery,
      brands,
      minYear,
      maxYear,
      minPrice,
      maxPrice
    }}>
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = () => {
  const context = useContext(CarsContext);
  if (context === undefined) {
    throw new Error('useCars must be used within a CarsProvider');
  }
  return context;
};