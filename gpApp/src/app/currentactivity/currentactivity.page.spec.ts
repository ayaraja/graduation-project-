import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentactivityPage } from './currentactivity.page';

describe('CurrentactivityPage', () => {
  let component: CurrentactivityPage;
  let fixture: ComponentFixture<CurrentactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentactivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
