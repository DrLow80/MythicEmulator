import { TestBed } from '@angular/core/testing';

import { WorksheetViewModelService } from './worksheet-view-model.service';

describe('WorksheetViewModelService', () => {
  let service: WorksheetViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorksheetViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
