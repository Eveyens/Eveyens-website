import React from 'react';
import Profile from '../components/about/Profile';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            À propos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            20 ans d'expertise en coaching et facilitation d'intelligence collective
          </p>
        </div>

        <Profile />
      </div>
    </div>
  );
}