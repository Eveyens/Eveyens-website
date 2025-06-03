# Configuration du Chatbot N8N - Eveyens

Ce document explique comment configurer et utiliser le chatbot N8N intégré sur le site Eveyens.

## 🚀 Fonctionnalités

- **Widget de chat flottant** : Bouton chat en bas à droite de chaque page
- **Mode plein écran** : Page dédiée au chat avec interface complète
- **Configuration centralisée** : Tous les paramètres dans un seul fichier
- **Messages personnalisés** : Messages d'accueil adaptés à Eveyens
- **Responsive** : Interface adaptée mobile et desktop

## 📋 Prérequis

### 1. Créer un workflow N8N

1. Connectez-vous à votre instance N8N (Cloud ou self-hosted)
2. Créez un nouveau workflow
3. Ajoutez un nœud **"Chat Trigger"**
4. Configurez les paramètres du Chat Trigger :
   - **Make Chat Publicly Available** : Activé
   - **Mode** : Hosted Chat ou Embedded Chat
   - **Authentication** : Selon vos besoins (None, Basic Auth, n8n User Auth)
   - **Allowed Origins (CORS)** : Ajoutez votre domaine (ex: `https://eveyens.com`)

### 2. Ajouter un Agent IA

1. Ajoutez un nœud **"AI Agent"** après le Chat Trigger
2. Configurez l'agent avec :
   - Un modèle de langage (OpenAI, Anthropic, etc.)
   - Des instructions personnalisées pour Eveyens
   - Des outils si nécessaire

### 3. Activer le workflow

1. Activez le workflow dans N8N
2. Copiez l'URL du webhook fournie par le Chat Trigger

## ⚙️ Configuration du site

### 1. Variable d'environnement

Créez un fichier `.env` à la racine du projet :

```env
# URL du webhook N8N
VITE_N8N_WEBHOOK_URL=https://votre-instance.n8n.cloud/webhook/votre-id-unique
```

### 2. Configuration personnalisée

Modifiez le fichier `src/config/chatConfig.ts` :

```typescript
export const chatConfig = {
  webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL || 'YOUR_PRODUCTION_WEBHOOK_URL',
  
  widget: {
    initialMessages: [
      'Bonjour ! 👋',
      'Comment puis-je vous aider aujourd\'hui ?'
    ],
    // ... autres paramètres
  },
  
  fullscreen: {
    initialMessages: [
      'Bienvenue sur le chat Eveyens ! 🎉',
      'Je suis votre assistant virtuel. Que souhaitez-vous savoir ?'
    ],
    // ... autres paramètres
  }
};
```

## 🎯 Utilisation

### Widget de chat

Le widget de chat apparaît automatiquement sur toutes les pages sauf `/chat` :
- Bouton flottant orange en bas à droite
- Clic pour ouvrir/fermer le chat
- Bouton bleu pour passer en mode plein écran

### Page de chat dédiée

Accessible via l'URL `/chat` :
- Interface plein écran
- Header avec bouton retour
- Footer personnalisé Eveyens

## 🛠️ Développement

### Structure des fichiers

```
src/
├── components/
│   └── ChatBot.tsx          # Composant principal du chatbot
├── pages/
│   └── Chat.tsx             # Page chat plein écran
├── config/
│   └── chatConfig.ts        # Configuration centralisée
└── App.tsx                  # Intégration dans l'app
```

### Commandes

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build de production
npm run build
```

## 🎨 Personnalisation

### Styles CSS

Le package `@n8n/chat` utilise des variables CSS personnalisables :

```css
:root {
  --chat--color-primary: #e74266;
  --chat--color-secondary: #20b69e;
  --chat--window--width: 400px;
  --chat--window--height: 600px;
  /* ... autres variables */
}
```

### Messages et labels

Modifiez les messages dans `chatConfig.ts` :

```typescript
i18n: {
  en: {
    title: 'Votre titre personnalisé',
    subtitle: 'Votre sous-titre',
    inputPlaceholder: 'Votre placeholder...',
    // ...
  }
}
```

## 🔧 Dépannage

### Le chat ne s'affiche pas

1. Vérifiez que la variable `VITE_N8N_WEBHOOK_URL` est définie
2. Vérifiez que le workflow N8N est actif
3. Vérifiez les CORS dans le Chat Trigger

### Erreurs de connexion

1. Vérifiez l'URL du webhook
2. Vérifiez que le domaine est autorisé dans N8N
3. Vérifiez les logs du workflow N8N

### Le chat ne répond pas

1. Vérifiez la configuration de l'agent IA
2. Vérifiez les crédits/quotas de votre modèle IA
3. Vérifiez les logs d'exécution dans N8N

## 📚 Ressources

- [Documentation N8N Chat](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/)
- [Package @n8n/chat](https://www.npmjs.com/package/@n8n/chat)
- [Guide N8N AI Workflows](https://docs.n8n.io/advanced-ai/)

## 🔄 Mises à jour

Pour mettre à jour le package N8N Chat :

```bash
npm update @n8n/chat
```

Vérifiez les notes de version pour les changements éventuels dans l'API. 