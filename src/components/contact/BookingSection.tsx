import React from 'react';
import { Calendar } from 'lucide-react';

export default function BookingSection() {
  return (
    <div className="bg-primary-50 rounded-lg p-8 mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mb-6">
          <Calendar className="h-6 w-6 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-4">
          Réserver un rendez-vous
        </h3>
        <p className="text-gray-600 mb-8">
          Planifiez directement un rendez-vous en ligne selon vos disponibilités.
        </p>
        <a
          href="https://calendly.com/eveyens/rv_avec_elena"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200"
        >
          Accéder à l'agenda
          <Calendar className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}