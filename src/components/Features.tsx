
import React from 'react';
import { AlertTriangle, Camera, Heart, Leaf, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const featuresData = [
  {
    icon: <AlertTriangle className="h-10 w-10 text-ecotrack" />,
    title: "Segnalazione Problemi",
    description: "Segnala immediatamente incendi, inquinamento, rifiuti o attività illegali nelle aree naturali con geolocalizzazione precisa."
  },
  {
    icon: <Leaf className="h-10 w-10 text-ecotrack" />,
    title: "Monitoraggio Biodiversità",
    description: "Documenta e identifica specie di flora e fauna, contribuendo al database scientifico sulla biodiversità locale."
  },
  {
    icon: <Camera className="h-10 w-10 text-ecotrack" />,
    title: "Riconoscimento Immagini",
    description: "L'intelligenza artificiale ti aiuta a identificare piante e animali nelle tue foto, facilitando la catalogazione delle specie."
  },
  {
    icon: <MapPin className="h-10 w-10 text-ecotrack" />,
    title: "Mappatura Interattiva",
    description: "Visualizza su mappe in tempo reale i punti di interesse, le segnalazioni e l'evoluzione degli interventi di protezione."
  },
  {
    icon: <Users className="h-10 w-10 text-ecotrack" />,
    title: "Comunità Eco-vigilante",
    description: "Unisciti a una rete di volontari e partecipa a iniziative locali per proteggere gli habitat naturali della tua zona."
  },
  {
    icon: <Heart className="h-10 w-10 text-ecotrack" />,
    title: "Educazione Ambientale",
    description: "Accedi a contenuti formativi su temi ambientali e impara come contribuire concretamente alla protezione del pianeta."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-ecotrack-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ecotrack-text">
            Funzionalità Principali
          </h2>
          <div className="divider"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            EcoTrack offre strumenti innovativi per proteggere la natura attraverso il monitoraggio attivo e la partecipazione della comunità.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="feature-card">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="mb-4 mt-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-ecotrack-text">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
