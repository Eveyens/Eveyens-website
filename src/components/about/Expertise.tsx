import React from 'react';
import { Users, Target, Brain, Lightbulb } from 'lucide-react';

const expertises = [
  {
    icon: Users,
    title: "Animation de collectifs",
    description: "Conception et animation de temps collectifs de 3 à 150 personnes dans des contextes variés : grands groupes industriels, PME, secteur public."
  },
  {
    icon: Target,
    title: "Accompagnement stratégique",
    description: "Accompagnement des Business Units dans la transformation et l'alignement des équipes de direction, CODIR et CODIR élargi."
  },
  {
    icon: Brain,
    title: "Coaching & Médiation",
    description: "Coaching d'équipe, régulation interpersonnelle et collective, facilitation des réseaux horizontaux."
  },
  {
    icon: Lightbulb,
    title: "Leadership & Innovation",
    description: "Coaching individuel de managers et dirigeants sur la prise de fonction, le leadership et la gestion des situations complexes."
  }
];

export default function Expertise() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-secondary-900 sm:text-3xl">
            Domaines d'expertise
          </h3>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {expertises.map((item, index) => (
            <div key={index} className="rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow" style={{ background: 'linear-gradient(135deg, #ffae3a1a, #fffe9f1a, #ffae3a1a)' }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-500 mx-auto">
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-medium text-secondary-900 text-center">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-gray-500 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}