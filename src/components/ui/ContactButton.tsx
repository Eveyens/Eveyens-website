import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function ContactButton() {
  return (
    <div className="hidden md:block fixed left-4 top-28 z-40">
      <a
        href="/contact"
        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors shadow-lg"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Contactez-nous</span>
      </a>
    </div>
  );
}