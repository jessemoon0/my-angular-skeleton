import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
// import { isLoggedIn } from '../store-auth/selectors/auth.selectors';
import { tap } from 'rxjs/operators';
import { IAppState } from '../../core/store-app/reducers';
import { isLoggedIn } from '../store-auth/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private store: Store<IAppState>, private router: Router) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canEnterTheRoute();
  }

  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canEnterTheRoute();
  }

  public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.canEnterTheRoute();
  }

  private canEnterTheRoute(): Observable<boolean> | Promise<boolean> | boolean {
    // Store Implementation
    return this.store.pipe(
      select(isLoggedIn),
      tap((loggedIn: boolean) => {
        if (loggedIn) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['auth']);
        }
      })
    );
  }

}
