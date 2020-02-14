import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SandboxRoutingModule } from './sandbox-routing.module';

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
    StoreModule.forFeature('sandboxState', fromSandbox.sandboxReducer)
  ]
})
export class SandboxModule {}
