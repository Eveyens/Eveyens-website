import React from 'react';
import RecentMissions from '../components/about/RecentMissions';

export default function References() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-secondary-900 sm:text-4xl">
            Nos Missions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Découvrez nos missions récentes et leurs impacts
          </p>
        </div>
        
        <RecentMissions />
      </div>
    </div>
  );
}