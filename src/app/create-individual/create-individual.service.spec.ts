import { TestBed } from '@angular/core/testing';

import { CreateIndividualService } from './create-individual.service';

describe('CreateIndividualService', () => {
  let service: CreateIndividualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateIndividualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
