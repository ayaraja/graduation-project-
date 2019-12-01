import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallsPage } from './malls.page';

describe('MallsPage', () => {
  let component: MallsPage;
  let fixture: ComponentFixture<MallsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
