
import React from 'react';
import { Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const navigate = useNavigate();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Work in Progress",
      description: "La funzionalità di newsletter è in fase di sviluppo.",
    });
  };

  return (
    <footer id="about" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/b69d67c8-9287-458a-b7ad-20432d472aa1.png" 
                alt="EcoTrack Logo" 
                className="h-8 w-auto"
              />
              <span className="font-display font-bold text-xl">EcoTrack</span>
            </div>
            <p className="text-gray-400 mb-4">
              Un'applicazione dedicata al monitoraggio e alla protezione delle aree naturali attraverso la partecipazione attiva dei cittadini.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-ecotrack transition-colors">Funzionalità</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-ecotrack transition-colors">Come Funziona</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-ecotrack transition-colors">Impatto</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>info@ecotrack.it</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Ricevi aggiornamenti sulle nuove funzionalità e sulle iniziative ambientali nella tua zona.
            </p>
            <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Il tuo indirizzo email"
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white"
              />
              <button
                type="submit"
                className="bg-ecotrack hover:bg-ecotrack-dark text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} EcoTrack. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
