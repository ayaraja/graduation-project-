import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavoritePage } from './myfavorite.page';

describe('MyfavoritePage', () => {
  let component: MyfavoritePage;
  let fixture: ComponentFixture<MyfavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfavoritePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
