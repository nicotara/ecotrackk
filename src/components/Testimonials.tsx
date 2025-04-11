
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ecotrack-text">
            Testimonianze
          </h2>
          <div className="divider"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Essendo EcoTrack una nuova applicazione, stiamo ancora raccogliendo le prime testimonianze dai nostri utenti.
          </p>
        </div>
        
        <Card className="border-none shadow-lg max-w-3xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <MessageSquare className="h-16 w-16 text-ecotrack/20" />
            </div>
            <h3 className="text-xl font-bold text-ecotrack-text mb-4">
              Sii tra i primi a condividere la tua esperienza!
            </h3>
            <p className="text-gray-700 mb-6">
              Scarica l'app EcoTrack, provala e condividi la tua esperienza. 
              Il tuo feedback ci aiuterà a migliorare e la tua testimonianza potrebbe ispirare altri a unirsi alla nostra missione di protezione ambientale.
            </p>
            <p className="text-gray-500 italic">
              Presto questa sezione sarà arricchita dalle storie di chi, come te, ha deciso di fare la differenza per il nostro pianeta.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
