import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}

// *** Should Support Safari, Edge, Chrome, Firefox ***

// To MAKE APPS FROM THIS SKELETON:

// 0: Rename project with WebStorm.
// -> Right click on project file and rename project and directory
// -> index.html rename <title>
// -> angular.json rename all angular-skeleton to my project-name
// 1: Change the component prefixes to my own app
// -> Change prefix in angular.json, also in src/tslint - component-selector,
// then search everywhere for angular-skeleton and replace all with my project names
// (search on angular.json file if I cant find any)
// 2: Rename variables in material theme and prefixes for scss components
// 3: Push to GIT: FOLLOW INSTRUCTIONS IN Angular Tutorial
// 4: Use sandbox files to write other feature modules
// 5: Remove test-data folder from dist.

// TODO: Add rxjs lint: https://cartant.github.io/rxjs-tslint-rules/
// TODO: Check to Add PWA
