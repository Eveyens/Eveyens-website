import { Mail, Linkedin, Phone, Calendar } from 'lucide-react';
import { Footer } from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discutons de vos besoins et objectifs en matière de coaching professionnel et de facilitation d'intelligence collective.
          </p>
        </div>

        {/* Section Réservation */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Réservez un appel découverte gratuit
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              30 minutes pour faire connaissance et comprendre vos enjeux. Un moment privilégié pour explorer ensemble comment nous pouvons vous accompagner.
            </p>
            <a
              href="https://calendly.com/eveyens/rv_avec_elena"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Réserver un créneau
            </a>
          </div>
        </div>

        {/* Informations de contact */}
        <div className="max-w-lg mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Informations de contact
            </h2>
            <p className="text-gray-600 mb-8">
              N'hésitez pas à nous contacter directement pour discuter de vos besoins en coaching, facilitation ou accompagnement d'équipe.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-orange-500 mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-medium text-gray-900">Téléphone</h3>
                <a
                  href="tel:+33661230635"
                  className="mt-1 text-gray-600 hover:text-orange-500 transition-colors"
                >
                  +33 6 61 23 06 35
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-orange-500 mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-medium text-gray-900">Email</h3>
                <a
                  href="mailto:elena.chilova@orange.fr"
                  className="mt-1 text-gray-600 hover:text-orange-500 transition-colors"
                >
                  elena.chilova@orange.fr
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Linkedin className="h-6 w-6 text-orange-500 mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-medium text-gray-900">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/elena-chilova-piron-pcc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Voir mon profil LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 bg-orange-50 rounded-lg">
            <h3 className="text-base font-medium text-gray-900 mb-2">
              Disponibilité
            </h3>
            <p className="text-gray-600">
              Nous répondons généralement aux demandes sous 24-48 heures ouvrées.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
