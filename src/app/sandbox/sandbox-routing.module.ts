import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SandboxRootComponent } from './sandbox-root/sandbox-root.component';
import { SandboxComponent } from './sandbox-root/sandbox/sandbox.component';

const routes: Routes = [
  {
    path: '',
    component: SandboxRootComponent,
    children: [
      {
        path: '',
        component: SandboxComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule {}
