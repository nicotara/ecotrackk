
import React from 'react';
import { Camera, Map, AlertTriangle, Users } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Osserva",
    description: "Durante le tue escursioni, osserva l'ambiente circostante. Nota la flora, la fauna e qualsiasi problema ambientale.",
    icon: <Camera className="text-white h-8 w-8" />,
    color: "bg-ecotrack"
  },
  {
    number: 2,
    title: "Documenta",
    description: "Utilizza l'app per fotografare e geolocalizzare le tue osservazioni, sia che si tratti di una specie rara o di un'area inquinata.",
    icon: <Map className="text-white h-8 w-8" />,
    color: "bg-ecotrack-light"
  },
  {
    number: 3,
    title: "Segnala",
    description: "Condividi le tue segnalazioni con la comunità e le autorità competenti per attivare interventi rapidi quando necessario.",
    icon: <AlertTriangle className="text-white h-8 w-8" />,
    color: "bg-ecotrack-dark"
  },
  {
    number: 4,
    title: "Partecipa",
    description: "Unisciti alle iniziative locali di pulizia, piantumazione o educazione ambientale organizzate tramite l'app.",
    icon: <Users className="text-white h-8 w-8" />,
    color: "bg-ecotrack-secondary"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ecotrack-text">
            Come Funziona
          </h2>
          <div className="divider"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Contribuire alla salvaguardia dell'ambiente con EcoTrack è semplice e accessibile a tutti.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${step.color} rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
