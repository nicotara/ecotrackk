
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Grazie a EcoTrack ho potuto segnalare un incendio boschivo in una fase iniziale, permettendo un intervento rapido che ha salvato ettari di bosco.",
    author: "Marco B.",
    role: "Escursionista",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "Come biologo, trovo che i dati raccolti dagli utenti di EcoTrack siano incredibilmente preziosi per il nostro studio sulla biodiversità locale.",
    author: "Dott.ssa Lucia M.",
    role: "Biologa",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "La mia amministrazione comunale utilizza EcoTrack per coordinarsi con i cittadini nella protezione delle aree verdi. È uno strumento di partecipazione civica straordinario.",
    author: "Andrea T.",
    role: "Assessore all'Ambiente",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

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
            Scopri come EcoTrack sta aiutando le persone a fare la differenza nella protezione dell'ambiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ecotrack/20">
                    <path d="M13.4 36C9.4 36 6.1 34.6333 3.5 31.9C1.16667 28.9 0 25.4 0 21.4C0 15.8 2.03333 10.8667 6.1 6.6C10.1667 2.2 15.3 0 21.5 0L23.2 5.8C18.8 7 15.3333 8.86667 12.8 11.4C10.4 13.9333 9.2 16.6667 9.2 19.6L10.9 18.7C12.3 18.7 13.8333 19.5 15.5 21.1C17.1667 22.5667 18 24.3 18 26.3C18 28.3 17.2667 30.1333 15.8 31.8C14.3333 34.6 12.2 36 13.4 36ZM37.6 36C33.6 36 30.3 34.6333 27.7 31.9C25.3667 28.9 24.2 25.4 24.2 21.4C24.2 15.8 26.2333 10.8667 30.3 6.6C34.3667 2.2 39.5 0 45.7 0L47.4 5.8C43 7 39.5333 8.86667 37 11.4C34.6 13.9333 33.4 16.6667 33.4 19.6L35.1 18.7C36.5 18.7 38.0333 19.5 39.7 21.1C41.3667 22.5667 42.2 24.3 42.2 26.3C42.2 28.3 41.4667 30.1333 40 31.8C38.5333 34.6 36.4 36 37.6 36Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-ecotrack-text">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
