import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoriComponent } from './lori.component';

describe('LoriComponent', () => {
  let component: LoriComponent;
  let fixture: ComponentFixture<LoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
