import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymtypePage } from './gymtype.page';

describe('GymtypePage', () => {
  let component: GymtypePage;
  let fixture: ComponentFixture<GymtypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymtypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymtypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
