
import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const missions = [
  {
    client: "EDF Hydro CODIR GEH",
    year: "2024",
    description: "Accompagnement du CODIR sur ses modes de fonctionnement",
    link: "https://bit.ly/3vlR4hc"
  },
  {
    client: "Ville de Bezons",
    year: "2024",
    description: "Accompagnement pour le développement des compétences managériales des cadres de la ville",
    link: "https://bit.ly/3K79wxS"
  },
  {
    client: "MIEPEEC Maroc",
    year: "2023",
    description: "Programme « Direction Femmes » pour le développement du leadership de 100 femmes cadres",
    link: "https://bit.ly/3HeSXj0"
  },
  {
    client: "EDF Hydro Business Unite",
    year: "2023",
    description: "Conception et animation de séminaires pour ED, CODIR et CODIR Élargi sur la vision 2030",
    link: "https://bit.ly/46UIgfo"
  },
  {
    client: "Chicanrie",
    year: "2023",
    description: "Ateliers découvertes pour appréhender les conflits",
    link: "https://bit.ly/49cRncy"
  },
  {
    client: "EDF Hydro",
    year: "2022",
    description: "Cursus de professionnalisation des Encadrants",
    link: "http://bit.ly/40mbgKm"
  }
];

export default function RecentMissions() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 text-primary-500" />
                  <span className="ml-2 font-medium text-secondary-900">{mission.client}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="ml-1 text-sm text-gray-500">{mission.year}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{mission.description}</p>
              <a
                href={mission.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 text-sm font-medium"
              >
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
