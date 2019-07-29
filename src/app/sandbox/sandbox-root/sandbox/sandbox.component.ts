import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/store-app/reducers';
import { SandboxActivated } from '../../store-sandbox/actions/sandbox.actions';
import { selectIsSandboxActive } from '../../store-sandbox/selectors/sandbox.selectors';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  
  isActivated = false;
  
  constructor(private store: Store<AppState>) { }
  
  ngOnInit() {
    this.store.pipe(select(selectIsSandboxActive))
      .subscribe(
        (isActive) => console.log('Is Active: ', isActive)
      );
  }
  
  testAction() {
    this.isActivated = !this.isActivated;
    this.store.dispatch(new SandboxActivated({ isActive: this.isActivated }));
  }

}
