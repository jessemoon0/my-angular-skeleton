import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

const sharedPipes: any[] = [];
const sharedDirectives: any[] = [];

@NgModule({
  declarations: [sharedPipes, sharedDirectives],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    sharedPipes,
    sharedDirectives
  ]
})
export class SharedModule {}
