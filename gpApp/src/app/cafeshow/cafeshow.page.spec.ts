import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeshowPage } from './cafeshow.page';

describe('CafeshowPage', () => {
  let component: CafeshowPage;
  let fixture: ComponentFixture<CafeshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
