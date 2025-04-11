
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WorkInProgress = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-md">
            <div className="mb-6 text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold text-ecotrack-text mb-4">
              Lavori in Corso
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              La nostra app è attualmente in fase di sviluppo. Stiamo lavorando duramente per renderla disponibile al più presto possibile. Grazie per la tua pazienza!
            </p>
            
            <div className="flex justify-center">
              <Link to="/">
                <Button className="gap-2 bg-ecotrack hover:bg-ecotrack-dark">
                  <ArrowLeft size={18} />
                  <span>Torna alla Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WorkInProgress;
