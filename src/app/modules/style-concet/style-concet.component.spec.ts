import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleConcetComponent } from './style-concet.component';

describe('StyleConcetComponent', () => {
  let component: StyleConcetComponent;
  let fixture: ComponentFixture<StyleConcetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleConcetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleConcetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
