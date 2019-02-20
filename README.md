# React Native Base Project Setup
![ikaee-logo](http://ikaeesoft.com/asset/images/logo.png)

This simple project setup to kick start the react native project with essential packages

## Project  structure

  - src/components/ :-
 In this directory we’ll be writing mostly functional components that can be used in multiple place throughout our app
    - index.js files manages what is exported from that directory
    - styles.js file  this keeps the styles for the component directory.(The purpose there is that as you break a larger component into smaller ones (like in GenericTextInput) you’ll reuse a lot of the same styling. And remember, we want to maximize code reuse.)
    - test.js file - contain test for  component

 - src/config/
    goal to Keep Configuration out of the Code .keep anything that is used in multiple places throughout our app in one easy to access (and change) place.
    example :-
    routes.js file which gives us a single place for all of our route.
    ApplicationConstant.js file which content constant varible

- src/scenes/
    app screen like home, profile,signIn  


- src/serivce/
    core business logic of your application, manage all api requests.we can see them as a bridge/an adapter between the server API and the view layer (scenes and components) of our application

- src/index.js
    only file  serves as  entry point into our Cross Platform app.

- src/variables/
    contain alll constant used  through out the application . like color.json , string.json.

- jest  
contain testing config setup file which contain configation and global varible require for test  


## Installation
clone repo.
# Note:-
change project name and display name in app.json file

```sh
$ yarn install   (install node packages)
$ react-native eject (this will create android and
ios folders)
$
```

## commands

```sh
$ yarn test:unit
$ yarn test
$ yarn lint
$ yarn precommit
$ yarn pretty
```


## Npm Packges

In this base project setup  is currently extended with the following packages. Instructions on how to use them in your own application are linked below.

### development dependencies

| Package | Description |
| ------ | ------ |
|[eslint]|ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code |
| [babel-eslint] | babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint |
| [eslint-pulgin-jsx-a11y]| static analysis tools cannot determine values of variables that are being placed in props before runtime, so linting will not fail if that value is undefined and/or does not pass the lint rule.|
|[eslint-plugin-import]|This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.|
| [EsLint-Plugin-react]|React specific linting rules for ESLint|
| [eslint-config-airbnb]|This package provides Airbnb's .eslintrc as an extensible shared config. |
| [enzyme] |  JavaScript Testing utilities for React and react native|
|[jest-enzyme]|Testing Matchers for Enzym|
|[enzyme-to-json]| Convert enzyme wrapper to a format compatible with Jest snapshot|
|[Sinon]|JavaScript test spies, stubs and mocks|
|[husky]|Husky can prevent bad git commit, git push|
|[lint-staged]| Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.This project contains a script that will run arbitrary shell tasks with a list of staged files as an argument, filtered by a specified glob pattern.|
|[prettier]|Use Prettier to automatically format your JavaScript|


### application dependencies

| Package | Description |
| ------ | ------ |
| [immutable]  | Immutable.js provides many Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.  allowing efficient chaining of collection methods like map and filter without creating intermediate representations. |
| [prop-types]  | Runtime type checking for React props and similar objects.  lazy Seq|
| [Axios]|Promise based HTTP client to make http requests  |

### issues on linux
```
Unable to load script from assets 'index.android.bundle' on Linux...
```
### solution
```
$ mkdir android/app/src/main/assets
$ yarn android-linux
```

   [eslint]: <https://github.com/eslint/eslint>
   [babel-eslint]: <https://github.com/babel/babel-eslint>
   [eslint-pulgin-jsx-a11y]: <https://github.com/evcohen/eslint-plugin-jsx-a11y>
   [eslint-plugin-import]:<https://github.com/benmosher/eslint-plugin-import>
   [EsLint-Plugin-react]:<https://github.com/yannickcr/eslint-plugin-react>
   [eslint-config-airbnb]:<https://www.npmjs.com/package/eslint-config-airbnb>
   [jest-enzyme]:<https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzym>
   [enzyme]:<https://github.com/airbnb/enzyme>
   [enzyme-to-json]:<https://github.com/adriantoine/enzyme-to-json>
   [Chai]:<https://github.com/chaijs/chai>
   [Sinon]:<https://github.com/sinonjs/sinon>

   [Husky]:<https://github.com/typicode/husky>
   [Lint-staged]:<https://github.com/okonet/lint-staged>
   [prettier]:<https://github.com/prettier/prettier>


   [Immutable]:<https://github.com/immutable-js/immutable-js>
   [prop-types]:<https://github.com/facebook/prop-types>
   [Axios]:<https://github.com/axios/axios>







  
