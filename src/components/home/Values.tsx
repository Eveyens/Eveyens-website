import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

const values = [
  {
    title: 'Des Résultats qui Comptent',
    description: 'Des résultats concrets pour vos équipes et vos organisations.',
    icon: Heart
  },
  {
    title: 'Innovation au Service de Vos Besoins',
    description: 'Une approche innovante et sur-mesure pour accompagner vos transformations.',
    icon: Users
  },
  {
    title: 'Libérer la Capacité d\'Agir',
    description: 'Une expertise en Intelligence Collective pour révéler le potentiel du collectif.',
    icon: Target
  }
];

export default function Values() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Nos Valeurs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Une approche centrée sur l'intelligence collective au service de la performance
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-primary-50 text-primary-700 ring-4 ring-white">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-secondary-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}