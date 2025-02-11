import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white lg:max-w-2xl lg:w-full">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left pt-10 pb-8 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-28 xl:pt-28 xl:pb-32">
              <h1 className="text-4xl tracking-tight font-extrabold text-secondary-900 sm:text-5xl md:text-6xl">
                <span className="block">Facilitation en</span>
                <span className="block text-primary-500">Intelligence Collective et Coaching</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Ensemble mobilisons l'Intelligence Collective pour aligner les équipes sur les enjeux clés et engager chacun dans des actions concrètes. Générons la Performance d'aujourd'hui et créons celle de demain par des transformations durables
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10"
                  >
                    Contactez-nous
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                  >
                    Découvrez nos services
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-contain sm:h-72 md:h-96 lg:h-full"
          src="/group-session.jpeg"
          alt="Séance de travail collaboratif"
        />
      </div>
    </div>
  );
}