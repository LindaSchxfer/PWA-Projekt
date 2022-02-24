import { TestBed } from '@angular/core/testing';

import { ShoppingItemService } from './shopping-item.service';

describe('ShoppingItemService', () => {
  let service: ShoppingItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
