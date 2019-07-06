import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store-app/reducers';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store-app/custom-route-serializer';
import { NetworkErrorInterceptor } from './interceptors';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25, // Returns last 25 states
      logOnly: environment.production // Boolean. Restricts to log only depending on env
    }) : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    EffectsModule.forRoot([])
  ],
  // Interceptors and global services here
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: NetworkErrorInterceptor, multi: true }
  ]
})
export class CoreModule { }
