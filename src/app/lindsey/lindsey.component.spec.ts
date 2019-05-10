import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LindseyComponent } from './lindsey.component';

describe('LindseyComponent', () => {
  let component: LindseyComponent;
  let fixture: ComponentFixture<LindseyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LindseyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LindseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
