import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinweisComponent } from './hinweis.component';

describe('HinweisComponent', () => {
  let component: HinweisComponent;
  let fixture: ComponentFixture<HinweisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinweisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HinweisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
