import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SandboxEffects } from './sandbox.effects';

describe('SandboxEffects', () => {
  let actions$: Observable<any>;
  let effects: SandboxEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SandboxEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SandboxEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
