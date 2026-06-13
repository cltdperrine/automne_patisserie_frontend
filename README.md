# Automne Pâtisserie — Frontend

Application web e-commerce développée avec **React** et **Tailwind CSS** pour la pâtisserie Automne.

> Projet réalisé dans le cadre de la formation Développeuse Web et Web Mobile (AFEC).

---

## Technologies

| Outil | Usage |
|---|---|
| React 19 | Bibliothèque UI |
| Vite | Bundler et serveur de développement |
| React Router v7 | Navigation entre les pages |
| Tailwind CSS v4 | Styles utilitaires |
| Axios | Requêtes HTTP vers l'API |
| Context API | Gestion de l'état global (panier) |
| react-hot-toast | Notifications utilisateur |
| lucide-react | Icônes |

---

## Fonctionnalités

### Visiteur
- Parcourir le catalogue de produits
- Filtrer les produits par catégorie
- Consulter la fiche détaillée d'un produit
- Voir les meilleures ventes
- Trouver la pâtisserie (page "Où nous trouver")
- Envoyer un message via le formulaire de contact
- Créer un compte ou se connecter

### Utilisateur connecté
- Ajouter des produits au panier
- Gérer le panier (quantités, suppression)
- Passer une commande via le tunnel de commande
- Consulter l'historique des commandes

### Espace administrateur
- Tableau de bord
- Gérer les produits (ajout, modification, suppression)
- Consulter et gérer les commandes

---

## Structure du projet

```
src/
├── components/
│   ├── CategoryCard.jsx        # Carte de catégorie
│   ├── CheckoutInput.jsx       # Champ de formulaire de commande
│   ├── FeaturesItem.jsx        # Élément de la bannière avantages
│   ├── Footer.jsx              # Pied de page
│   ├── Header.jsx              # En-tête avec navigation
│   ├── Hero.jsx                # Section hero de la page d'accueil
│   ├── ProductCard.jsx         # Carte produit
│   └── ScrollToTop.jsx         # Retour en haut lors de la navigation
├── context/
│   └── CartContext.jsx         # État global du panier
├── layouts/
│   ├── AdminLayout.jsx         # Layout de l'espace admin
│   ├── AppLayout.jsx           # Layout principal (header + footer)
│   └── AuthLayout.jsx          # Layout des pages d'authentification
├── lib/
│   └── api.js                  # Configuration Axios et appels API
├── pages/
│   ├── admin/
│   │   ├── AdminDashboard.jsx  # Tableau de bord admin
│   │   ├── AdminProducts.jsx   # Liste des produits (admin)
│   │   ├── AdminAddProduct.jsx # Formulaire d'ajout de produit
│   │   ├── AdminEditProduct.jsx# Formulaire de modification
│   │   └── AdminOrders.jsx     # Gestion des commandes (admin)
│   ├── Cart.jsx                # Page panier
│   ├── Category.jsx            # Produits par catégorie
│   ├── Checkout.jsx            # Tunnel de commande
│   ├── Contact.jsx             # Formulaire de contact
│   ├── Home.jsx                # Page d'accueil
│   ├── Login.jsx               # Connexion
│   ├── Products.jsx            # Catalogue produits
│   ├── Register.jsx            # Inscription
│   ├── SingleProduct.jsx       # Fiche produit
│   └── WhereToFind.jsx         # Page "Où nous trouver"
├── sections/
│   ├── BestSellersSection.jsx  # Section meilleures ventes
│   ├── CategoriesSection.jsx   # Section catégories
│   └── FeaturesBanner.jsx      # Bannière avantages
└── utils/
    └── prices.js               # Utilitaires de formatage des prix
```

---

## Pages et routes

| Route | Page | Accès |
|---|---|---|
| `/` | Accueil | Public |
| `/products` | Catalogue | Public |
| `/products/:id` | Fiche produit | Public |
| `/categories/:id` | Catégorie | Public |
| `/where-to-find` | Où nous trouver | Public |
| `/contact` | Contact | Public |
| `/cart` | Panier | Public |
| `/checkout` | Commande | Connecté |
| `/auth/login` | Connexion | Public |
| `/auth/register` | Inscription | Public |
| `/admin` | Dashboard admin | Admin |
| `/admin/products` | Produits (admin) | Admin |
| `/admin/products/add` | Ajouter un produit | Admin |
| `/admin/products/edit/:id` | Modifier un produit | Admin |
| `/admin/orders` | Commandes (admin) | Admin |

---

## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/cltdperrine/automne_patisserie_frontend.git
cd automne_patisserie_frontend
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
VITE_API_URL=http://localhost:3001/api
```

> Le backend doit être lancé et accessible à l'URL indiquée.

### 4. Lancer le projet

```bash
npm run dev
```

L'application est disponible sur `http://localhost:5173`

---

## Scripts disponibles

```bash
npm run dev       # Démarre le serveur de développement Vite
npm run build     # Compile l'application pour la production
npm run preview   # Prévisualise le build de production
npm run lint      # Vérifie le code avec ESLint
```

---

## Communication avec l'API

Toutes les requêtes HTTP sont centralisées dans [src/lib/api.js](src/lib/api.js) via une instance Axios configurée avec :

- `baseURL` : définie par la variable d'environnement `VITE_API_URL`
- `withCredentials: true` : pour envoyer les cookies JWT automatiquement

Les images produits sont servies directement depuis le backend via l'URL de base (sans `/api`).

---

## Responsive Design

L'interface est conçue pour s'adapter à tous les écrans :

- Mobile
- Tablette
- Desktop

---

## Réalisé par

Perrine — Formation Développeuse Web et Web Mobile (AFEC)
