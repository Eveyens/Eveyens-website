import React from 'react';
import { Award, BookOpen, Brain, Network, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <head>
        <title>À propos de Eveyens | Coaching et Facilitation</title>
        <meta name="description" content="Découvrez l'expertise de 20 ans de Eveyens en coaching professionnel et facilitation d'intelligence collective." />
      </head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            À propos
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            20 ans d'expertise en coaching professionnel et facilitation d'intelligence collective pour développer l'autonomie et la coopération en entreprise.
          </p>
        </div>

        {/* Profile Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-6">
              Elena CHILOVA PIRON
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-orange-500" />
                <span className="ml-3 text-gray-600">Ingénieure ENSIEG</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-orange-500" />
                <span className="ml-3 text-gray-600">MBA de l'EM Lyon</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-orange-500" />
                <span className="ml-3 text-gray-600">Professional Certified Coach (PCC) - International Coach Federation (ICF)</span>
              </div>
              <div className="flex items-center">
                <Network className="h-5 w-5 text-orange-500" />
                <span className="ml-3">
                  <a 
                    href="https://laboetiepartners.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 underline transition-colors"
                  >
                    Membre de Réseau Métier de la Boétie Partners
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Globe2 className="h-5 w-5 text-orange-500" />
                <span className="ml-3 text-gray-600">Basée à Marseille, région PACA</span>
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-600">
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
              src="/micro_profil.jpg"
              alt="Elena CHILOVA PIRON - Coach Professionnel"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            Découvrez nos <a href="/services" className="text-orange-500 hover:text-orange-600 underline">services</a> ou <a href="/contact" className="text-orange-500 hover:text-orange-600 underline">contactez-nous</a> pour plus d'informations.
          </p>
        </div>
      </div>
    </div>
  );
}