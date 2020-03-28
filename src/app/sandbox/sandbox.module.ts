import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoLanguageModule } from '../transloco/transloco-language.module';

// Components
import { SandboxRootComponent } from './sandbox-root/sandbox-root.component';
import { SandboxComponent } from './sandbox-root/sandbox/sandbox.component';
import { StoreModule } from '@ngrx/store';
import * as fromSandbox from './store-sandbox/reducers/sandbox.reducer';

@NgModule({
  declarations: [SandboxRootComponent, SandboxComponent],
  imports: [
    SharedModule,
    SandboxRoutingModule,
    MatToolbarModule,
    StoreModule.forFeature('sandboxState', fromSandbox.sandboxReducer),
    TranslocoLanguageModule
  ]
})
export class SandboxModule {}
