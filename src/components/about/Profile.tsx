import React from 'react';
import { Award, BookOpen, Brain, Network, Globe2 } from 'lucide-react';

export default function Profile() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 sm:text-3xl">
              Elena CHILOVA PIRON
            </h3>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-primary-500" />
                <span className="ml-2 text-gray-600">Ingénieure ENSIEG</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary-500" />
                <span className="ml-2 text-gray-600">MBA de l'EM Lyon</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-primary-500" />
                <span className="ml-2 text-gray-600">Professional Certified Coach (PCC) - International Coach Federation (ICF)</span>
              </div>
              <div className="flex items-center">
                <Network className="h-5 w-5 text-primary-500" />
                <span className="ml-2">
                  <a 
                    href="https://laboetiepartners.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 underline transition-colors"
                  >
                    Membre de Réseau Métier de la Boétie Partners
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Globe2 className="h-5 w-5 text-primary-500" />
                <span className="ml-2 text-gray-600">Basée à Marseille, région PACA</span>
              </div>
            </div>

            <div className="mt-8 space-y-6 text-lg text-gray-500">
              <p>
                Coach Professionnel et Facilitatrice en Intelligence Collective depuis 20 ans, Elena a à cœur de créer les conditions qui invitent au dialogue profond, permettant aux collectifs de trouver des solutions innovantes et de redécouvrir le plaisir de travailler ensemble.
              </p>
              <p>
                Elena intervient auprès de grands groupes industriels, de petites structures, de l'administration et de réseaux de femmes. Connue pour son écoute, son inspiration et sa détermination, elle adopte une approche à la fois pragmatique et visionnaire, favorisant la croissance et le changement positif.
              </p>
              <p>
                Sa capacité à se renouveler dans son métier lui permet d'intégrer la technologie et des solutions interactives numériques en phase avec l'environnement de travail et les aspirations des nouvelles générations.
              </p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              className="rounded-lg shadow-lg object-cover w-full max-w-md mx-auto"
              src="/profile.jpg"
              alt="Elena CHILOVA PIRON - Coach Professionnel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}