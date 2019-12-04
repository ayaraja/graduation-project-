import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorpagePage } from './visitorpage.page';

describe('VisitorpagePage', () => {
  let component: VisitorpagePage;
  let fixture: ComponentFixture<VisitorpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
