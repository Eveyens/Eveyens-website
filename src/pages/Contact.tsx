import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import BookingSection from '../components/contact/BookingSection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <head>
        <title>Contactez Eveyens | Coaching et Facilitation</title>
        <meta name="description" content="Contactez Eveyens pour en savoir plus sur nos services de coaching professionnel et facilitation d'intelligence collective." />
      </head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discutons de vos besoins et objectifs en matière de coaching professionnel et de facilitation d'intelligence collective.
          </p>
        </div>

        <BookingSection />

        <div className="mt-20">
          <ContactInfo />
        </div>

        <p className="mt-4 text-base text-gray-500">
          Découvrez nos <a href="/services">services</a> ou <a href="/about">à propos</a> pour plus d'informations.
        </p>
      </div>
    </div>
  );
}