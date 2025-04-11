
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ecotrack-dark/90 to-ecotrack/70"></div>
        <img 
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80" 
          alt="Nature landscape" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Proteggi la Natura, un'Osservazione alla Volta
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Con EcoTrack, contribuisci attivamente al monitoraggio e alla protezione delle aree naturali. 
            Segnala problemi, documenta la biodiversità e unisciti a una comunità che si impegna per salvaguardare il nostro pianeta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-ecotrack-secondary hover:bg-amber-600 text-white font-medium text-lg px-8 py-6">
              Scarica l'App
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/40 text-white font-medium text-lg px-8 py-6">
              Scopri di Più
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToFeatures}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors"
          aria-label="Scorri per vedere di più"
        >
          <ChevronDown className="text-white" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
