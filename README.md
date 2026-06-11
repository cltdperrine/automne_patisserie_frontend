- Démonstration : [http://automnepatisseriefrontend.vercel.app]

# Automne Pâtisserie - Frontend

Frontend de l'application e-commerce Automne Pâtisserie développé avec React et Tailwind CSS.

Cette application permet aux utilisateurs de découvrir les produits de la pâtisserie, gérer leur compte, leur panier et leurs commandes.

---

## Technologies

- React
- React Router
- Tailwind CSS
- Axios
- Context API
- JWT

---

## Fonctionnalités

### Visiteur

- Consultation des produits
- Consultation des catégories
- Consultation des fiches produits
- Inscription
- Connexion

### Utilisateur connecté

- Gestion du profil
- Gestion du panier
- Passage de commande
- Consultation de l'historique des commandes
- Déconnexion

### Contact

- Formulaire de contact

---

## Structure du projet

```bash
src/
├── assets/
├── components/
├── contexts/
├── layouts/
├── pages/
├── services/
├── routes/
└── utils/
```

---

## Installation

### Cloner le dépôt

```bash
git clone https://github.com/cltdperrine/automne_patisserie_frontend.git
```

### Installer les dépendances

```bash
npm install
```

### Configurer les variables d'environnement

Créer un fichier `.env` :

```env
VITE_API_URL=http://localhost:3000/api
```

### Lancer le projet

```bash
npm run dev
```

Application disponible sur :

```bash
http://localhost:5173
```

---

## Communication avec l'API

Le frontend consomme l'API REST du projet Automne Pâtisserie pour :

- l'authentification
- la gestion des utilisateurs
- les produits
- les catégories
- le panier
- les commandes
- le formulaire de contact

---

## Responsive Design

L'interface a été développée pour s'adapter aux différents supports :

- Mobile
- Tablette
- Desktop

---

## Réalisé par

Perrine

Projet réalisé dans le cadre de la formation Développeuse Web et Web Mobile.
