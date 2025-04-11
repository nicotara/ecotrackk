
import React from 'react';
import { Shield, BarChart2, FileText } from 'lucide-react';

const stats = [
  { number: "2,500+", label: "Aree naturali monitorate" },
  { number: "15,000+", label: "Utenti attivi" },
  { number: "8,700+", label: "Segnalazioni risolte" },
  { number: "240+", label: "Specie documentate" }
];

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
            Il Nostro Impatto
          </h2>
          <div className="divider bg-white/30"></div>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Insieme stiamo facendo la differenza per proteggere le aree naturali e preservare la biodiversità per le generazioni future.
          </p>
        </div>
        
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
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
