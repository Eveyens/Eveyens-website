import React from 'react';
import Profile from '../components/about/Profile';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <head>
        <title>À propos de Eveyens | Coaching et Facilitation</title>
        <meta name="description" content="Découvrez l'expertise de 20 ans de Eveyens en coaching professionnel et facilitation d'intelligence collective." />
      </head>
      <div className="max-w-7xl mx-auto">
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            À propos
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            20 ans d'expertise en coaching professionnel et facilitation d'intelligence collective pour développer l'autonomie et la coopération en entreprise.
          </p>
        </div>

        <Profile />
        <p className="mt-4 text-base text-gray-500">
          Découvrez nos <a href="/services">services</a> ou <a href="/contact">contactez-nous</a> pour plus d'informations.
        </p>
      </div>
    </div>
  );
}