// Configuration du chatbot N8N
export const chatConfig = {
  // URL du webhook N8N - À remplacer par votre URL de production
  // Vous pouvez obtenir cette URL en créant un workflow avec un nœud "Chat Trigger" dans N8N
  // Exemple: https://yourname.app.n8n.cloud/webhook/513107b3-6f3a-4a1e-af21-659f0ed14183
  webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://n8n.srv849307.hstgr.cloud/webhook/7ec51c5d-686c-4d08-9d01-d8da7d3a0e90/chat',
  
  // Configuration du widget
  widget: {
    showWelcomeScreen: false,
    initialMessages: [
      'Bonjour ! 👋',
      'Comment puis-je vous aider aujourd\'hui ?'
    ],
    i18n: {
      en: {
        title: 'Je suis Eve 👱‍♀️, l\'IA d\'Eveyens ',
        subtitle: 'Je suis là pour répondre à vos questions.',
        footer: '',
        getStarted: '',
        inputPlaceholder: 'Votre question...',
        closeButtonTooltip: 'Fermer',
      },
    },
  },
  
  // Métadonnées communes
  metadata: {
    source: 'eveyens-website',
    version: '1.0.0',
  },
}; 