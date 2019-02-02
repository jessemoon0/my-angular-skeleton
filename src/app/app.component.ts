import { Component, OnInit } from '@angular/core';
import cssVars from 'css-vars-ponyfill';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.useCssVarsInIE();
  }

  useCssVarsInIE() {
    cssVars();
  }
}

// *** Supports Safari, IE11, Edge, Chrome, Firefox

// To MAKE APPS FROM THIS SKELETON:

// 0: Search everywhere for app-skeleton and replace with my project names
// 1: Change the component prefixes to my own app
// --> Don't forget to add the selector in src/lint.json file
// 2: Rename variables in material theme and prefixes for scss components
// 3: Use sandbox files to write other feature modules
// 4: Add my branding in my css variables and in my colors
// 5: Add Analytics

// TODO: Learn and setup deployment
// --> Upload to AWS and automate.
// TODO: Version bumps.
// TODO: Remove scss and test-data folder from dist.
// TODO: Add universal

