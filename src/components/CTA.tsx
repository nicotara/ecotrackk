
import React from 'react';
import { Button } from "@/components/ui/button";
import { AppleIcon, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-ecotrack-dark to-ecotrack relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Unisciti al Movimento per la Protezione Ambientale
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Scarica oggi stesso EcoTrack e inizia a contribuire alla salvaguardia delle aree naturali. 
            Ogni osservazione, ogni segnalazione fa la differenza.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link to="/download">
              <Button className="bg-white text-ecotrack-dark hover:bg-gray-100 gap-2 text-lg font-medium px-6 py-6">
                <AppleIcon size={24} />
                <span>App Store</span>
              </Button>
            </Link>
            <Link to="/download">
              <Button className="bg-white text-ecotrack-dark hover:bg-gray-100 gap-2 text-lg font-medium px-6 py-6">
                <Smartphone size={24} />
                <span>Google Play</span>
              </Button>
            </Link>
          </div>
          
          <p className="text-sm opacity-75">
            Presto disponibile per iOS e Android. Unisciti ai primi eco-guardiani che faranno la differenza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
