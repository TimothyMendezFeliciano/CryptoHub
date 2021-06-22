import { TestBed } from '@angular/core/testing';

import { NewscatcherService } from './newscatcher.service';

describe('NewscatcherService', () => {
  let service: NewscatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewscatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
