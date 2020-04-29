import { AfterViewInit, Component } from '@angular/core';
import { AvailableLanguages } from '../enum';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-transloco-language-changer',
  templateUrl: './transloco-language-changer.component.html',
  styleUrls: ['./transloco-language-changer.component.scss']
})
export class TranslocoLanguageChangerComponent implements AfterViewInit {
  public activeLanguage: AvailableLanguages = AvailableLanguages.English;

  constructor(
    private translocoService: TranslocoService,
    // private translocoToggleService: TranslocoToggleLanguageService
  ) {}

  public ngAfterViewInit() {
    this.activeLanguage = this.translocoService.getActiveLang() as AvailableLanguages;
  }

  public onLanguageChange() {
    // this.activeLanguage = this.translocoToggleService.toggleLanguage();
  }
}
