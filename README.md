# Structure du projet

Notre dossier `src` situé à la racine du projet contiendra 4 dossiers:
- `connection`,
- `data_models`,
- `query_builders`,
- `types` 

Voici un exemple:  

<img src="assets/project_struct.png" alt="project structure" width="200" height="800">
<br>

# Project Setup

- J'ai installé XAMPP sur ma machine fedora Linux 
  - X = Cross-platform 
  - A = Apache 
  - M = MySQL 
  - P = PHP
  - P = Perl
- Pour lancer les services XAMPP: `sudo /opt/lampp/lampp start`
- Pour gérer les BDD, ouvrir un navigateur Web et aller sur http://localhost/phpmyadmin/
- création d'une nouvelle BDD nommée 'ORM'

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




