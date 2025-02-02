import React from 'react';
import Hero from '../components/home/Hero';
import Values from '../components/home/Values';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Values />
    </div>
  );
}