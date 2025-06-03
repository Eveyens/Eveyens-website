# Eveyens Website

Site web professionnel pour Eveyens - Coaching et Intelligence Collective

## 🎯 À propos

Site vitrine présentant les services de coaching professionnel et de facilitation d'intelligence collective d'Elena CHILOVA PIRON.

## 🚀 Technologies

- **React 18** avec TypeScript
- **Vite** pour le build et le développement 
- **Tailwind CSS** pour le styling
- **Lucide React** pour les icônes
- **EmailJS** pour l'envoi d'emails

## 📁 Structure du projet

```
src/
├── components/           # Composants réutilisables
│   ├── Navbar.tsx       # Navigation principale
│   └── ContactButton.tsx # Bouton de contact flottant
├── pages/               # Pages principales
│   ├── Home.tsx         # Page d'accueil
│   ├── About.tsx        # À propos
│   ├── Services.tsx     # Services
│   ├── References.tsx   # Références et témoignages
│   └── Contact.tsx      # Contact
├── App.tsx              # Composant principal
├── main.tsx             # Point d'entrée
└── index.css            # Styles globaux
```

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Aperçu du build
npm run preview

# Linting
npm run lint
```

## 🎨 Charte graphique

- **Couleurs principales** : Orange (#f97316) et Jaune (#eab308)
- **Police** : Système par défaut (optimisé pour la performance)
- **Design** : Moderne, propre et responsive

## 📧 Configuration EmailJS

Pour activer l'envoi d'emails via le formulaire de contact, configurez les clés dans `src/pages/Contact.tsx` :

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Remplacer par votre Service ID
  'YOUR_TEMPLATE_ID',   // Remplacer par votre Template ID
  // ...
  'YOUR_PUBLIC_KEY'     // Remplacer par votre Public Key
);
```

## 🚀 Déploiement

Le projet est optimisé pour un déploiement statique sur :
- Netlify
- Vercel 
- GitHub Pages
- Tout hébergeur de sites statiques

## 📝 Fonctionnalités

- ✅ Navigation SPA (Single Page Application)
- ✅ Design responsive mobile-first
- ✅ Formulaire de contact avec validation
- ✅ Intégration EmailJS
- ✅ Optimisé pour les performances
- ✅ SEO-friendly
- ✅ Accessibilité (ARIA labels)

## 👥 Contact

Elena CHILOVA PIRON  
Coach Professionnel et Facilitatrice en Intelligence Collective  
📧 elena.chilova@orange.fr  
📱 +33 6 61 23 06 35  
🔗 [LinkedIn](https://www.linkedin.com/in/elena-chilova-piron-pcc)