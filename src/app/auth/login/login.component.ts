import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoginAction } from '../store-auth/actions/auth.actions';
import { AppState } from '../../core/store-app/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  private destroy$: Subject<void> = new Subject();

  constructor(private authService: AuthService, private store: Store<AppState>) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLoginClick() {
    this.authService.login()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        if (user) {
          this.store.dispatch(new LoginAction({user}));
        }
      });
  }

}
