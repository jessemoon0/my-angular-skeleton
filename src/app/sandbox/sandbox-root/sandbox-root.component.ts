import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../core/store-app/reducers';
import { selectSandboxData } from '../store-sandbox/selectors/sandbox.selectors';

@Component({
  selector: 'app-sandbox-root',
  templateUrl: './sandbox-root.component.html',
  styleUrls: ['./sandbox-root.component.scss']
})
export class SandboxRootComponent implements OnInit {
  
  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.store.pipe(select(selectSandboxData))
      .subscribe(
        (data) => console.log('Sandbox Data: ', data)
      );
  }
}
