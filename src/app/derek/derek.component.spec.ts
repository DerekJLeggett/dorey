import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerekComponent } from './derek.component';

describe('DerekComponent', () => {
  let component: DerekComponent;
  let fixture: ComponentFixture<DerekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
