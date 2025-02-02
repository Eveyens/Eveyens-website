import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-secondary-900 mb-4">
          Informations de contact
        </h3>
        <p className="text-gray-500 mb-6">
          N'hésitez pas à nous contacter pour discuter de vos besoins en coaching, facilitation ou accompagnement d'équipe.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary-500" />
          <div>
            <h4 className="text-base font-medium text-secondary-900">Téléphone</h4>
            <a 
              href="tel:+33661230635"
              className="mt-1 text-gray-500 hover:text-primary-500"
            >
              +33 6 61 23 06 35
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-primary-500" />
          <div>
            <h4 className="text-base font-medium text-secondary-900">Email</h4>
            <a 
              href="mailto:elena.chilova@orange.fr"
              className="mt-1 text-gray-500 hover:text-primary-500"
            >
              elena.chilova@orange.fr
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Linkedin className="h-6 w-6 text-primary-500" />
          <div>
            <h4 className="text-base font-medium text-secondary-900">LinkedIn</h4>
            <a 
              href="https://www.linkedin.com/in/elena-chilova-piron-pcc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-gray-500 hover:text-primary-500"
            >
              Voir mon profil LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-primary-50 rounded-lg">
        <h4 className="text-base font-medium text-secondary-900 mb-2">
          Disponibilité
        </h4>
        <p className="text-gray-500">
          Nous répondons généralement aux demandes sous 24-48 heures ouvrées.
        </p>
      </div>
    </div>
  );
}