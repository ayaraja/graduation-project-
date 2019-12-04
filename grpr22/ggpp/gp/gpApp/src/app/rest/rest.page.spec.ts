import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPage } from './rest.page';

describe('RestPage', () => {
  let component: RestPage;
  let fixture: ComponentFixture<RestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
