import React from 'react';
import { Users, Target, Brain, Lightbulb } from 'lucide-react';

const services = [
  {
    title: 'Coaching d\'équipe',
    description: 'Développez la cohésion et la performance collective de vos équipes à travers des sessions de coaching personnalisées.',
    icon: Users
  },
  {
    title: 'Intelligence Collective',
    description: 'Libérez le potentiel créatif de votre organisation en mobilisant l\'intelligence collective de vos collaborateurs.',
    icon: Brain
  },
  {
    title: 'Consulting Stratégique',
    description: 'Bénéficiez d\'un accompagnement expert pour transformer votre organisation et atteindre vos objectifs.',
    icon: Target
  },
  {
    title: 'Facilitation',
    description: 'Animez vos réunions et ateliers avec des méthodes innovantes pour des résultats concrets.',
    icon: Lightbulb
  }
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions adaptées pour développer le potentiel de votre organisation
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #ffae3a1a, #fffe9f1a, #ffae3a1a)' }}
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-primary-50 text-primary-700 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-secondary-900">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}