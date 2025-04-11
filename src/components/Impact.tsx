
import React from 'react';
import { Shield, BarChart2, FileText } from 'lucide-react';

const impactAreas = [
  {
    icon: <Shield className="h-12 w-12 text-ecotrack mb-4" />,
    title: "Protezione Immediata",
    description: "Le segnalazioni tempestive consentono interventi rapidi per prevenire danni ambientali significativi, come lo spegnimento precoce di incendi boschivi."
  },
  {
    icon: <BarChart2 className="h-12 w-12 text-ecotrack mb-4" />,
    title: "Dati per la Ricerca",
    description: "I dati raccolti dagli utenti contribuiscono alla ricerca scientifica sul cambiamento climatico e sulla conservazione della biodiversità."
  },
  {
    icon: <FileText className="h-12 w-12 text-ecotrack mb-4" />,
    title: "Educazione Ambientale",
    description: "L'app sensibilizza gli utenti sull'importanza della protezione ambientale e fornisce strumenti pratici per un impatto positivo."
  }
];

const Impact = () => {
  return (
    <section id="impact" className="section-padding eco-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Il Nostro Impatto Potenziale
          </h2>
          <div className="divider bg-white/30"></div>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            EcoTrack è un'applicazione nuova che mira a fare la differenza nella protezione delle aree naturali e nella conservazione della biodiversità.
          </p>
        </div>
        
        {/* Message about being a new app */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16 text-center">
          <p className="text-lg">
            Essendo EcoTrack un'applicazione appena lanciata, non abbiamo ancora dati statistici da condividere. 
            Il nostro obiettivo è costruire una comunità di persone impegnate nella protezione ambientale che, 
            insieme, potranno generare un impatto positivo misurabile nel tempo.
          </p>
        </div>
        
        {/* Impact areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              {area.icon}
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="opacity-90">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
