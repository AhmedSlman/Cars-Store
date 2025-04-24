export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  images: string[];
  features: string[];
  description: string;
  available: boolean;
}

export type FilterOptions = {
  brand: string;
  minYear: number;
  maxYear: number;
  minPrice: number;
  maxPrice: number;
};

export type ThemeMode = 'light' | 'dark';