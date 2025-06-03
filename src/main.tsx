import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 1. Styles N8N par défaut
import '@n8n/chat/style.css';

// 2. Styles globaux de l'application (ex: Tailwind, index.css)
import './index.css';

// 3. Styles personnalisés pour N8N (avec les variables orange)
import './styles/chatbot.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
