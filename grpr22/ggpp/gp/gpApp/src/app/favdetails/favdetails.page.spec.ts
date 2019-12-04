import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavdetailsPage } from './favdetails.page';

describe('FavdetailsPage', () => {
  let component: FavdetailsPage;
  let fixture: ComponentFixture<FavdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
