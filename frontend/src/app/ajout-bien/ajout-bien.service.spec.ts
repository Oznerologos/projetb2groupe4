import { TestBed } from '@angular/core/testing';

import { AjoutBienService } from './ajout-bien.service';

describe('AjoutBienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutBienService = TestBed.get(AjoutBienService);
    expect(service).toBeTruthy();
  });
});
