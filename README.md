# Structure du projet

Notre dossier `src` situé à la racine du projet contiendra 4 dossiers:
- `connection`,
- `models`,
- `query_builders`,
- `types` 

Voici un exemple:  
<img src="assets/project_struct.png" alt="project structure" width="200" height="800">

# Project Setup

- Node.js et npm étaient déjà installés sur ma machine Fedora Linux
- J'ai installé XAMPP 
  - X = Cross-platform 
  - A = Apache 
  - M = MySQL 
  - P = PHP
  - P = Perl
- Pour lancer les services XAMPP: `sudo /opt/lampp/lampp start`
- Pour gérer les BDD, ouvrir un navigateur Web et aller sur http://localhost/phpmyadmin/
- création d'une nouvelle BDD nommée 'ORM'
- création d'un fichier `.gitignore` pour exclure certains fichiers de la gestion de version Git 
- installation du package **dotenv** via `npm i dotenv` 
  - pour gérer nos variables d'environnement et les charger depuis un fichier `.env`
- création d'un fichier `.env` à la racine du projet pour y déclarer la variable de connection à notre BDD
- installation du package **mysql2** via `npm i mysql2`
  - pour autoriser notre programme à se connecter à notre BDD MySQL et à interagir avec elle
- installation des dev depencies pour TypeScript: `npm i -D typescript @types/node`
- installation du package tsx: `npm i -D tsx`
  - pour exécuter des fichiers TypeScript sans compilation manuelle préalable
- ajout d'un script à mon `package.json` pour pouvoir exécuter mon code TypeScript via `npm start`
```json
"scripts": {
  "start": "tsx ./src/main.ts"
}
```
- Initialisation du fichier de config tsconfig.json via `npx tsc --init`
- modification de tsconfig.json pour: 
  - indiquer le dossier où placer les fichiers générés par le compilateur TypeScript 
  - inclure tous les fichiers compris dans le dossier `src` et ses sous-dossiers
  - exclure les dépendances et les fichiers générés automatiquement
```json
{
  "compilerOptions": {
    "outDir": "./dist",
    // ......
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

# TODO

- [x] Utiliser `create_tables.sql` pour créer les tables 'user' et 'post' dans notre BDD
  - la création des futures tables se fera via la fonctionnalité "Migrations" qu'on implémentera par la suite
- [ ] côte TypeScript, implémenter 2 classes: 
  - [ ] BaseQueryBuilder 
  - [ ] InsertQueryBuilder
- [ ] instancier la classe InsertQueryBuilder depuis un `main.ts` 
- [ ] le `main.ts` contiendra aussi un `console.log` des requêtes générées
- [ ] exécuter le SQL généré dans un soft dédié (PHPmyAdmin)
- [ ] Construire une classe SelectQueryBuilder




