import React, { useEffect, useState } from 'react';
import { Maximize2 } from 'lucide-react';
// import '@n8n/chat/style.css'; // Supprimé car importé globalement dans main.tsx
import { createChat } from '@n8n/chat';
import { chatConfig } from '../config/chatConfig';

interface ChatBotProps {
  mode?: 'widget' | 'fullscreen';
  webhookUrl?: string;
  onOpenFullscreen?: () => void;
}

// Notre propre interface pour typer la configuration N8N
interface N8NChatOptions {
  webhookUrl: string;
  mode: 'fullscreen' | 'window';
  target?: string;
  defaultLanguage?: 'en';
  showWelcomeScreen?: boolean;
  initialMessages?: string[];
  i18n?: {
    en: {
      title: string;
      subtitle: string;
      footer: string;
      getStarted: string;
      inputPlaceholder: string;
      closeButtonTooltip: string;
    };
  };
  webhookConfig?: {
    method: 'POST';
    headers: Record<string, string>;
  };
  chatInputKey?: string;
  chatSessionKey?: string;
  metadata?: Record<string, unknown>;
}

export default function ChatBot({ 
  mode = 'widget', 
  webhookUrl = chatConfig.webhookUrl,
  onOpenFullscreen 
}: ChatBotProps) {
  const [isChatInitialized, setIsChatInitialized] = useState(false);
  const [isOnChatPage, setIsOnChatPage] = useState(false);

  // Vérifier si nous sommes sur la page /chat
  useEffect(() => {
    const checkLocation = () => {
      const isChat = window.location.pathname === '/chat';
      setIsOnChatPage(isChat);
      
      // Si nous sommes sur la page /chat et que le chat est initialisé en mode widget,
      // nous devons nettoyer le chat existant
      if (isChat && isChatInitialized && mode === 'widget') {
        const chatElement = document.querySelector('.n8n-chat-window');
        if (chatElement) {
          chatElement.remove();
        }
        setIsChatInitialized(false);
      }
    };

    // Vérifier au montage
    checkLocation();

    // Écouter les changements d'URL
    window.addEventListener('popstate', checkLocation);
    
    return () => {
      window.removeEventListener('popstate', checkLocation);
    };
  }, [mode, isChatInitialized]);

  useEffect(() => {
    // Ne pas initialiser le chat widget si nous sommes sur la page /chat
    if (mode === 'widget' && isOnChatPage) {
      return;
    }

    if (isChatInitialized) return;

    setTimeout(() => {
      try {
        // Configuration de base pour tous les modes
        const baseConfig: Partial<N8NChatOptions> = {
          webhookUrl,
          mode: mode === 'fullscreen' ? 'fullscreen' : 'window',
          defaultLanguage: 'en',
          webhookConfig: { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' } 
          },
          chatInputKey: 'chatInput',
          chatSessionKey: 'sessionId',
          metadata: { 
            ...chatConfig.metadata, 
            page: mode === 'fullscreen' ? 'fullscreen-chat' : 'widget-chat' 
          }
        };

        // Si c'est le mode widget, on ajoute les configurations spécifiques du widget
        const config: Partial<N8NChatOptions> = mode === 'widget' 
          ? {
              ...baseConfig,
              showWelcomeScreen: chatConfig.widget.showWelcomeScreen,
              initialMessages: chatConfig.widget.initialMessages,
              i18n: chatConfig.widget.i18n,
            }
          : {
              ...baseConfig,
              target: '#n8n-chat-fullscreen',
            };

        createChat(config);
        setIsChatInitialized(true);
        console.log(`Chat ${mode} initialisé avec succès`);
      } catch (error) {
        console.error(`Erreur lors de l'initialisation du chat ${mode}:`, error);
      }
    }, 200);
  }, [mode, webhookUrl, isChatInitialized, isOnChatPage]);

  const handleOpenFullscreen = () => {
    if (onOpenFullscreen) {
      onOpenFullscreen();
    } else {
      window.history.pushState({}, '', '/chat');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  if (mode === 'fullscreen') {
    return (
      <div className="w-full h-full min-h-screen bg-gray-50">
        <div id="n8n-chat-fullscreen" className="w-full h-full"></div>
      </div>
    );
  }

  // Ne pas rendre le widget si nous sommes sur la page /chat
  if (isOnChatPage) {
    return null;
  }

  return (
    <>
      {/* Bouton flottant pour le mode plein écran */}
      {isChatInitialized && (
        <div className="fixed bottom-5 right-20 z-40">
          <button
            onClick={handleOpenFullscreen}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Ouvrir le chat en mode plein écran"
            title="Ouvrir en mode plein écran"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
} 