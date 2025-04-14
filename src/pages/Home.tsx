import React from 'react';
import Hero from '../components/home/Hero';
import Values from '../components/home/Values';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>Eveyens | Coaching Professionnel et Intelligence Collective</title>
        <meta name="description" content="Découvrez Eveyens, votre partenaire en coaching professionnel et facilitation d'intelligence collective pour développer l'autonomie et la coopération en entreprise." />
      </head>
      <Hero />
      <Values />
    </div>
  );
}