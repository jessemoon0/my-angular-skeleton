import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuthState from './store-auth/reducers/auth-state.reducer';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('authState', fromAuthState.authReducer),
    MatButtonModule
  ]
})
export class AuthModule { }
