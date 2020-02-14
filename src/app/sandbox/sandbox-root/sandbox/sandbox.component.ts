import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../core/store-app/reducers';
import { SandboxActivated } from '../../store-sandbox/actions/sandbox.actions';
import { selectIsSandboxActive } from '../../store-sandbox/selectors/sandbox.selectors';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit, OnDestroy {
  public isActivated = false;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<IAppState>) {}

  public ngOnInit() {
    this.store
      .pipe(select(selectIsSandboxActive))
      .pipe(takeUntil(this.destroy$))
      .subscribe((isActive: boolean) => console.log('Is Active from store: ', isActive));
    if (true) {
      const test = 0;
    }
  }

  public testAction() {
    this.isActivated = !this.isActivated;
    this.store.dispatch(new SandboxActivated({ isActive: this.isActivated }));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
