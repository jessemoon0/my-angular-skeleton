import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoLanguageChangerComponent } from './transloco-language-changer/transloco-language-changer.component';

@NgModule({
  declarations: [TranslocoLanguageChangerComponent],
  imports: [CommonModule],
  exports: [TranslocoLanguageChangerComponent]
})
export class TranslocoLanguageModule {}
