# MBella - Formulaire de Site Web pour Hôtel

Une application web Node.js avec Express et MongoDB pour collecter des informations auprès des clients souhaitant créer un site web pour leur hôtel.

## Fonctionnalités

- Page d'accueil avec informations sur les services proposés
- Formulaire détaillé pour recueillir toutes les informations nécessaires sur l'hôtel
- Stockage des données dans MongoDB
- Interface utilisateur réactive avec Tailwind CSS
- Disponible en français
- Validation des formulaires côté serveur et côté client

## Prérequis

- Node.js (v12 ou supérieur)
- MongoDB (local ou hébergé)

## Installation

1. Clonez ce dépôt
```
git clone <URL_DU_DEPOT>
cd mbella
```

2. Installez les dépendances
```
npm install
```

3. Configurez les variables d'environnement
Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/hotel_form
```

4. Générez les fichiers CSS Tailwind
```
npm run build:css
```

## Démarrage

Pour démarrer l'application en mode développement:
```
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:3000`.

Pour démarrer l'application en mode production:
```
npm start
```

## Structure du Projet

```
mbella/
├── config/           # Configuration de l'application
├── models/           # Modèles MongoDB
├── public/           # Fichiers statiques (CSS, JS, images)
├── routes/           # Routes Express
├── views/            # Templates EJS
│   └── partials/     # Parties réutilisables de templates (header, footer, etc.)
├── app.js            # Point d'entrée de l'application
├── package.json      # Dépendances et scripts
└── README.md         # Documentation
```

## Technologies Utilisées

- **Node.js**: Environnement d'exécution JavaScript
- **Express.js**: Framework web
- **MongoDB**: Base de données NoSQL
- **Mongoose**: ODM pour MongoDB
- **EJS**: Moteur de template
- **Tailwind CSS**: Framework CSS utilitaire
- **dotenv**: Gestion des variables d'environnement

## Licence

ISC 