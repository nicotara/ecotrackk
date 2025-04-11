
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/b69d67c8-9287-458a-b7ad-20432d472aa1.png" 
            alt="EcoTrack Logo" 
            className="h-10 w-auto"
          />
          <span className="text-ecotrack-text font-display font-bold text-xl">EcoTrack</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium">
            <li><a href="#features" className="text-gray-700 hover:text-ecotrack transition-colors">Funzionalità</a></li>
            <li><a href="#how-it-works" className="text-gray-700 hover:text-ecotrack transition-colors">Come Funziona</a></li>
            <li><a href="#impact" className="text-gray-700 hover:text-ecotrack transition-colors">Impatto</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-ecotrack transition-colors">Chi Siamo</a></li>
          </ul>
          <Link to="/download">
            <Button className="bg-ecotrack hover:bg-ecotrack-dark text-white">Scarica l'App</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 py-4 px-6 animate-slide-up">
          <ul className="flex flex-col gap-4 mb-4">
            <li><a href="#features" className="text-gray-700 hover:text-ecotrack transition-colors" onClick={() => setIsMenuOpen(false)}>Funzionalità</a></li>
            <li><a href="#how-it-works" className="text-gray-700 hover:text-ecotrack transition-colors" onClick={() => setIsMenuOpen(false)}>Come Funziona</a></li>
            <li><a href="#impact" className="text-gray-700 hover:text-ecotrack transition-colors" onClick={() => setIsMenuOpen(false)}>Impatto</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-ecotrack transition-colors" onClick={() => setIsMenuOpen(false)}>Chi Siamo</a></li>
          </ul>
          <Link to="/download" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-ecotrack hover:bg-ecotrack-dark text-white">Scarica l'App</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
