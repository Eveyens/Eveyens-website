import React, { useState } from 'react';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Remplacer la logique emailjs par une requête fetch vers le webhook
      const response = await fetch("https://n8n.srv849307.hstgr.cloud/webhook/6456f750-01ff-413b-ae3c-a9a9322e5ee2", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        console.error('Error sending to webhook:', await response.text());
      }
    } catch (error) {
      setStatus('error');
      console.error('Error sending to webhook:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <head>
        <title>Contactez Eveyens | Coaching et Facilitation</title>
        <meta name="description" content="Contactez Eveyens pour en savoir plus sur nos services de coaching professionnel et facilitation d'intelligence collective." />
      </head>
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
              Réserver un créneau
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Informations de contact
              </h2>
              <p className="text-gray-600 mb-8">
                N'hésitez pas à nous contacter pour discuter de vos besoins en coaching, facilitation ou accompagnement d'équipe.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-orange-500 mt-1" />
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
                <Mail className="h-6 w-6 text-orange-500 mt-1" />
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
                <Linkedin className="h-6 w-6 text-orange-500 mt-1" />
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

            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <h3 className="text-base font-medium text-gray-900 mb-2">
                Disponibilité
              </h3>
              <p className="text-gray-600">
                Nous répondons généralement aux demandes sous 24-48 heures ouvrées.
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Décrivez-nous vos besoins et objectifs..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'sending' ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-center">Message envoyé avec succès ! Nous vous répondrons rapidement.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-center">Une erreur est survenue. Veuillez réessayer ou nous contacter directement.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            Découvrez nos <a href="/services" className="text-orange-500 hover:text-orange-600 underline">services</a> ou <a href="/about" className="text-orange-500 hover:text-orange-600 underline">à propos</a> pour plus d'informations.
        </p>
        </div>
      </div>
    </div>
  );
}