import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelslistPage } from './hotelslist.page';

describe('HotelslistPage', () => {
  let component: HotelslistPage;
  let fixture: ComponentFixture<HotelslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
