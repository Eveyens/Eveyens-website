import React from 'react';
import { Users } from 'lucide-react';

const team = [
  {
    name: 'Elena C P',
    role: 'PDG',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Experte en intelligence collective et transformation organisationnelle'
  },
  {
    name: 'Alex P',
    role: 'Directeur Général Délégué',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Spécialiste en stratégie et développement d\'entreprise'
  },
  {
    name: 'An P',
    role: 'Responsable Ressources Humaines',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Experte en développement RH et gestion des talents'
  }
];

export default function Team() {
  return (
    <div id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Notre Équipe
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des experts passionnés à votre service
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                <img
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute -bottom-2 -right-2 bg-primary-500 rounded-full p-2">
                  <Users className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-medium text-secondary-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-500">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}