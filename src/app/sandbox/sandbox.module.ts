import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import * as fromSandbox from './store-sandbox/reducers/sandbox.reducer';

// Components
import { SandboxRootComponent } from './sandbox-root/sandbox-root.component';
import { SandboxComponent } from './sandbox-root/sandbox/sandbox.component';

@NgModule({
  declarations: [SandboxRootComponent, SandboxComponent],
  imports: [
    SharedModule,
    SandboxRoutingModule,
    MatToolbarModule,
    StoreModule.forFeature('sandboxState', fromSandbox.sandboxReducer)
  ]
})
export class SandboxModule {}
