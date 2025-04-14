import React from 'react';
import RecentMissions from '../components/about/RecentMissions';

export default function References() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <head>
        <title>Références de Eveyens | Coaching et Facilitation</title>
        <meta name="description" content="Découvrez les témoignages et références de nos clients satisfaits par nos services de coaching professionnel et facilitation d'intelligence collective." />
      </head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Nos Missions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez nos missions récentes et leurs impacts en matière de coaching professionnel et de facilitation d'intelligence collective.
          </p>
        </div>
        
        <RecentMissions />
        <p className="mt-4 text-base text-gray-500">
          Pour en savoir plus, visitez notre page <a href="/services">services</a> ou <a href="/contact">contactez-nous</a>.
        </p>
      </div>
    </div>
  );
}