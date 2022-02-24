import { TestBed } from '@angular/core/testing';

import { ListitemsService } from './listitems.service';

describe('ListitemsService', () => {
  let service: ListitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
