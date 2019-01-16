import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

const sharedPipesAndDirectives: any[] = [];

@NgModule({
  declarations: [
    sharedPipesAndDirectives
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    sharedPipesAndDirectives
  ]
})
export class SharedModule { }
