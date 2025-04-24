import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCars } from '../../context/CarsContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { setSearchQuery } = useCars();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchValue);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              LuxuryDrive
            </div>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
            <a href="#cars" className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Vehicles</a>
            <a href="#contact" className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
            
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search vehicles..."
                className="pl-10 pr-4 py-2 rounded-full text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            </form>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button 
              onClick={() => setShowMobileMenu(true)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-slate-900/95 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setShowMobileMenu(false)}
              className="p-2 text-white rounded-md"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-8 flex-grow">
            <a 
              href="#hero" 
              className="text-2xl font-medium text-white hover:text-blue-400 transition"
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </a>
            <a 
              href="#cars" 
              className="text-2xl font-medium text-white hover:text-blue-400 transition"
              onClick={() => setShowMobileMenu(false)}
            >
              Vehicles
            </a>
            <a 
              href="#contact" 
              className="text-2xl font-medium text-white hover:text-blue-400 transition"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </a>
            
            <form onSubmit={handleSearchSubmit} className="relative w-64 mt-6">
              <input
                type="text"
                placeholder="Search vehicles..."
                className="w-full pl-10 pr-4 py-3 rounded-full text-base bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;