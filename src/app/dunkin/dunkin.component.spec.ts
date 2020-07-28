import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DunkinComponent } from './dunkin.component';

describe('DunkinComponent', () => {
  let component: DunkinComponent;
  let fixture: ComponentFixture<DunkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DunkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DunkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
