import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { createChat } from '@n8n/chat';
import { chatConfig } from '../config/chatConfig';

// L'ID du conteneur pour le chat N8N plein écran
const N8N_CHAT_CONTAINER_ID = 'n8n-chat-fullscreen-container';

export default function Chat() {
  const chatInitialized = useRef(false);

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    if (chatInitialized.current) {
      return;
    }

    const chatContainer = document.getElementById(N8N_CHAT_CONTAINER_ID);

    if (chatContainer) {
      createChat({
        webhookUrl: chatConfig.webhookUrl,
        mode: 'fullscreen',
        target: `#${N8N_CHAT_CONTAINER_ID}`,
        // Utiliser les mêmes configurations que le widget
        showWelcomeScreen: chatConfig.widget.showWelcomeScreen,
        initialMessages: chatConfig.widget.initialMessages,
        i18n: chatConfig.widget.i18n,
        metadata: {
          ...chatConfig.metadata,
          page: 'fullscreen-chat'
        }
      });
      chatInitialized.current = true;
    }

    return () => {
      const container = document.getElementById(N8N_CHAT_CONTAINER_ID);
      if (container) {
        container.innerHTML = '';
      }
      chatInitialized.current = false;
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header de la page chat - ne grandit pas */}
      <div className="flex-shrink-0 bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={handleGoBack}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Retour"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">{chatConfig.widget.i18n.en.title}</h1>
            <p className="text-sm text-gray-500">{chatConfig.widget.i18n.en.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">En ligne</span>
        </div>
      </div>

      {/* Zone de chat plein écran - prend tout l'espace restant */}
      <div 
        id={N8N_CHAT_CONTAINER_ID} 
        className="flex-grow min-h-0 overflow-hidden w-full h-full bg-gray-50"
      >
        {/* Le chat N8N sera injecté ici par createChat */}
      </div>

      {/* Footer optionnel - ne grandit pas */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 px-4 py-2">
        <p className="text-xs text-gray-500 text-center">
          Propulsé par <span className="font-medium">Eveyens</span> & <span className="font-medium">N8N</span>
        </p>
      </div>
    </div>
  );
} 