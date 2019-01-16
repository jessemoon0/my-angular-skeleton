import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SandboxRoutingModule } from './sandbox-routing.module';

// Components
import { SandboxRootComponent } from './sandbox-root/sandbox-root.component';
import { SandboxComponent } from './sandbox-root/sandbox/sandbox.component';

@NgModule({
  declarations: [
    SandboxRootComponent,
    SandboxComponent
  ],
  imports: [
    SharedModule,
    SandboxRoutingModule
  ]
})
export class SandboxModule { }
