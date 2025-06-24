import React from 'react';
import { Shield, Mail, Clock, Users, Lock, FileText } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <head>
        <title>Politique de confidentialité | Eveyens</title>
        <meta name="description" content="Politique de confidentialité d'Eveyens pour l'utilisation de notre service WhatsApp et la protection de vos données personnelles." />
      </head>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-orange-500" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Dernière mise à jour : 24 juin 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="h-6 w-6 text-orange-500 mr-3" />
              1. Qui sommes-nous ?
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Nom de l'entreprise :</strong> Eveyens</p>
              <p><strong>Site web :</strong> <a href="https://eveyens.com" className="text-orange-500 hover:text-orange-600 underline">eveyens.com</a></p>
              <p><strong>Contact :</strong> <a href="mailto:apiron@albertschool.com" className="text-orange-500 hover:text-orange-600 underline">apiron@albertschool.com</a></p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-orange-500 mr-3" />
              2. Données que nous collectons
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Numéro de téléphone (acheminement des messages WhatsApp).
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Contenu des conversations avec l'IA.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Métadonnées : date/heure, statut de livraison.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-orange-500 mr-3" />
              3. Finalités du traitement
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Acheminer et répondre à vos messages via WhatsApp.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Améliorer et mesurer la qualité du service.
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="h-6 w-6 text-orange-500 mr-3" />
              4. Durée de conservation
            </h2>
            <p className="text-gray-700">
              Toutes les données (messages et métadonnées) sont conservées <strong>6 mois</strong> puis supprimées ou anonymisées.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="h-6 w-6 text-orange-500 mr-3" />
              5. Partage des données
            </h2>
            <p className="text-gray-700 mb-4">
              Nous ne partageons vos données avec aucun tiers, sauf :
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Avec Meta (Facebook) via l'API WhatsApp.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Sur demande légale (réquisitions judiciaires).
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-orange-500 mr-3" />
              6. Vos droits
            </h2>
            <p className="text-gray-700 mb-4">
              Vous pouvez à tout moment :
            </p>
            <ul className="space-y-3 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Accéder aux informations que nous détenons.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Demander la rectification ou la suppression anticipée.
              </li>
            </ul>
            <p className="text-gray-700">
              Pour exercer vos droits, contactez-nous : <a href="mailto:apiron@albertschool.com" className="text-orange-500 hover:text-orange-600 underline">apiron@albertschool.com</a>
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 text-orange-500 mr-3" />
              7. Sécurité
            </h2>
            <p className="text-gray-700">
              Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-orange-500 mr-3" />
              8. Modification de la politique
            </h2>
            <p className="text-gray-700">
              Cette politique peut évoluer ; la date de "Dernière mise à jour" indique la version en vigueur.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex justify-center mb-4">
            <Mail className="h-8 w-8 text-orange-500" />
          </div>
          <p className="text-base text-gray-500">
            Des questions ? <a href="/contact" className="text-orange-500 hover:text-orange-600 underline">Contactez-nous</a> pour plus d'informations.
          </p>
        </div>
      </div>
    </div>
  );
} 