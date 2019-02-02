import { TestBed } from '@angular/core/testing';

import { SandboxService } from './sandbox.service';

describe('SandboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SandboxService = TestBed.get(SandboxService);
    expect(service).toBeTruthy();
  });
});
