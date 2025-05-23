import { Car } from '../types/types';

export const brands = [
  'All Brands',
  'Audi',
  'BMW',
  'Mercedes-Benz',
  'Porsche',
  'Tesla',
  'Lexus',
  'Jaguar',
  'Land Rover',
];

export const carsData: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: 'X5',
    year: 2023,
    price: 75000,
    mileage: 1500,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    images: [
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: ['Leather Seats', 'Panoramic Roof', 'Navigation', 'Premium Sound'],
    description: 'The BMW X5 combines luxury, performance and versatility. This premium SUV offers a smooth ride with powerful engine options.',
    available: true,
  },
  {
    id: '2',
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2022,
    price: 68000,
    mileage: 5000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    images: [
      'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: ['Heated Seats', 'LED Headlights', 'Ambient Lighting', 'Driver Assistance'],
    description: "The E-Class represents Mercedes-Benz's commitment to luxury, with a sophisticated interior, smooth performance, and advanced technology.",
    available: true,
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'A6',
    year: 2023,
    price: 62000,
    mileage: 2000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    images: [
      'https://images.pexels.com/photos/13387491/pexels-photo-13387491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1104768/pexels-photo-1104768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: ['Virtual Cockpit', 'Quattro AWD', 'B&O Sound System', 'Adaptive Cruise'],
    description: 'The Audi A6 delivers a perfect blend of performance, technology, and design. Its refined interior and advanced features make it a standout.',
    available: true,
  },
  {
    id: '4',
    brand: 'Tesla',
    model: 'Model S',
    year: 2023,
    price: 89000,
    mileage: 1000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    images: [
      'https://images.pexels.com/photos/12861033/pexels-photo-12861033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/12861038/pexels-photo-12861038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: ['Autopilot', 'Full Self-Driving', '17" Touchscreen', 'Long Range Battery'],
    description: 'The Tesla Model S combines incredible electric performance with cutting-edge technology and a minimalist interior design.',
    available: true,
  },
  {
    id: '5',
    brand: 'Porsche',
    model: '911',
    year: 2023,
    price: 120000,
    mileage: 500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: ['Sport Chrono Package', 'Adaptive Sport Seats', 'Sport Exhaust', 'Rear-Axle Steering'],
    description: 'The iconic Porsche 911 continues to set the standard for sports cars with its perfect balance of everyday usability and track performance.',
    available: true,
  },
  {
    id: '6',
    brand: 'Lexus',
    model: 'LS 500',
    year: 2022,
    price: 78000,
    mileage: 3000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    images: [
      'https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/709599/pexels-photo-709599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    features: ['Mark Levinson Audio', 'Semi-Aniline Leather', 'Shiatsu Massage Seats', 'Air Suspension'],
    description: 'The Lexus LS 500 redefines luxury with attention to detail, exceptional craftmanship, and a supremely comfortable ride experience.',
    available: true,
  },
];