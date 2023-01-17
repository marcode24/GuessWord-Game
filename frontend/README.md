# Word Guess Game Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2

## Get started

### Requirements

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

### Clone the repo

```shell
git clone https://github.com/marcode24/GuessWord-Game
cd GuessWord-Game/frontend
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works.

```shell
npm install
ng serve -o
```

Shut it down manually with `Ctrl+C`

## Environments

| Name       | URL                                                                        | PORT |
| ---------- | -------------------------------------------------------------------------- | ---- |
| Localhost  | [localhost](http://localhost:4200)                                         | 4200 |
| Production | [https://wordguess-game.netlify.app/](https://wordguess-game.netlify.app/) |

## Folder Structure

    .
    ├── src
    │ ├── app                 # Source code application
    │ │ ├── core              # Module as a singleton
    │ │ │ ├── components
    │ │ │ ├── constants
    │ │ │ ├── enums
    │ │ │ ├── interfaces
    │ │ │ ├── models
    │ │ │ ├── services
    │ │ │ └── utils
    │ │ ├── features          # Module for features which compose the application
    │ │ └── shared            # Module for components shared between application modules
    │ │   └── components
    │ ├── assets              # sass variables, fonts, images, etc.
    │ │ └── scss              # scss files
    │ ├── environments        # Config by environment (localhost and production)
    │ ├── styles              # Global styles
    │ ├── favicon.ico         # Favicon
    │ ├── index.html          # Index file
    │ ├── main.ts             # Main file
    │ ├── polyfills.ts        # Polyfills file
    │ ├── styles.scss         # Global styles
    │ └── test.ts             # Test file
    ├── .browserslistrc       # Browserslist configuration
    ├── .editorconfig         # Editor configuration
    ├── .gitignore            # Git ignore
    ├── angular.json          # Angular configuration
    ├── package.json          # Package configuration
    ├── package-lock.json     # Package lock configuration
    ├── README.md             # Readme file
    └── tsconfig.json         # Typescript configuration
