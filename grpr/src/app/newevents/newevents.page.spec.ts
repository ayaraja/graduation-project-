import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweventsPage } from './newevents.page';

describe('NeweventsPage', () => {
  let component: NeweventsPage;
  let fixture: ComponentFixture<NeweventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeweventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeweventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
