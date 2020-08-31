import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouingComponent } from './rouing.component';

describe('RouingComponent', () => {
  let component: RouingComponent;
  let fixture: ComponentFixture<RouingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
