import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../core/store-app/reducers';
import { SandboxActivated } from '../../store-sandbox/actions/sandbox.actions';
import { selectIsSandboxActive } from '../../store-sandbox/selectors/sandbox.selectors';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { translate, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit, OnDestroy {
  public isActivated = false;
  public textToTranslate = 'I love programming';

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<IAppState>, private translocoService: TranslocoService) {}

  public ngOnInit() {
    this.store
      .pipe(select(selectIsSandboxActive))
      .pipe(takeUntil(this.destroy$))
      .subscribe((isActive: boolean) => console.log('Is Active from store: ', isActive));
    if (true) {
      const test = 0;
    }

    this.dynamicTranslation();
  }

  public testAction() {
    this.isActivated = !this.isActivated;
    this.store.dispatch(new SandboxActivated({ isActive: this.isActivated }));
  }

  public translateProgrammatically() {
    // WAYS TO TRANSLATE

    // this.translocoService.selectTranslateObject('DYNAMIC_TRANSLATE')
    //   .pipe(take(1))
    //   .subscribe({
    //     next: (translationObject) => {
    //       const values: string[] = Object.values(translationObject);
    //       console.log(values);
    //       // If there are many values, we should just push to array or map an array of objects
    //       this.textToTranslate = values[0];
    //     }
    //   });
    // this.textToTranslate = this.translocoService.translate('DYNAMIC_TRANSLATE.TEXT');
    this.textToTranslate = translate('DYNAMIC_TRANSLATE.TEXT');
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * This translation changes with language change.
   */
  private dynamicTranslation() {
    this.translocoService
      .selectTranslate('DYNAMIC_TRANSLATE.TEXT')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (translation) => {
          console.log(translation);
          // If there are many values, we should just push to array or map an array of objects
          this.textToTranslate = translation;
        }
      });
  }
}
