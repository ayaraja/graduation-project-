import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyactivitiesPage } from './myactivities.page';

describe('MyactivitiesPage', () => {
  let component: MyactivitiesPage;
  let fixture: ComponentFixture<MyactivitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyactivitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyactivitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
