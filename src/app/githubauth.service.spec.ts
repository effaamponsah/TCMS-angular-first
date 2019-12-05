import { TestBed } from '@angular/core/testing';

import { GithubauthService } from './githubauth.service';

describe('GithubauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubauthService = TestBed.get(GithubauthService);
    expect(service).toBeTruthy();
  });
});
