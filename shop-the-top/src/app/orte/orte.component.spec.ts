import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrteComponent } from './orte.component';

describe('OrteComponent', () => {
  let component: OrteComponent;
  let fixture: ComponentFixture<OrteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
