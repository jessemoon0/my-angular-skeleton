import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { AvailableLanguages } from '../enum';

@Injectable({
  providedIn: 'root'
})
export class TranslocoToggleLanguageService {
  constructor(private translocoService: TranslocoService) {}

  public toggleLanguage(): AvailableLanguages {
    switch (this.translocoService.getActiveLang()) {
      case AvailableLanguages.English: {
        this.translocoService.setActiveLang(AvailableLanguages.Spanish);

        return AvailableLanguages.Spanish;
      }
      case AvailableLanguages.Spanish: {
        this.translocoService.setActiveLang(AvailableLanguages.English);

        return AvailableLanguages.English;
      }
    }
  }
}
