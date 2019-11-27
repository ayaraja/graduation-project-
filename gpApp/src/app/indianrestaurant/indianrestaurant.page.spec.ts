import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianrestaurantPage } from './indianrestaurant.page';

describe('IndianrestaurantPage', () => {
  let component: IndianrestaurantPage;
  let fixture: ComponentFixture<IndianrestaurantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianrestaurantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianrestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
