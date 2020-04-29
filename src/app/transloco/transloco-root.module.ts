import { HttpClient } from '@angular/common/http';
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { TranslocoLanguageChangerComponent } from './transloco-language-changer/transloco-language-changer.component';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  public getTranslation(lang: string) {
    return this.http.get<Translation>(`${environment.translocoUrl}/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  declarations: [TranslocoLanguageChangerComponent],
  exports: [ TranslocoModule, TranslocoLanguageChangerComponent ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        fallbackLang: 'en',
        flatten: {
          aot: environment.production
        },
        missingHandler: {
          logMissingKey: true
        },
        prodMode: environment.production,
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ]
})
export class TranslocoRootModule {}
