# MaPUI Exercice Starter

Pour te faire gagner du temps, on a généré :
- une application Angular dans le dossier [client](client/README.md)
- un serveur NestJS dans le dossier [server](server/README.md)

Pour lancer une base de données MongoDB, on te recommande Docker :
```console
$ docker run --rm -it -p 27017:27017 mongo
```

En bonus si tu as le temps, tu peux rajouter un docker-compose.yml pour lancer le client, le serveur et la base de données.

## Structure du projet

```console
.
├── client             - Webapp Angular
├── server             - Serveur NestJS
├── .eslintrc.json     - Config ESLint
├── .prettierrc        - Config Prettier utilisée comme plugin eslint
├── docker-compose.yml - En bonus ?
└── package.json       - Dépendances npm à la racine pour eslint
```

## Lancer le projet

### Base de données

```console
$ docker run --rm -it -p 27017:27017 mongo
```

### Server

```
$ npm install
$ npm run start:dev
```

> Possibilité de changer l'URI de la base de données avec la variable d'environnement `MONGO_URI` ou de modifier directement dans le fichier `src/app.module.ts`

### Client

```
$ npm install
$ npm run start
```

> Possibilité de changer l'URI de l'API dans le fichier `src/environment/environment.ts`


