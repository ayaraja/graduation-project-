import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallshowPage } from './mallshow.page';

describe('MallshowPage', () => {
  let component: MallshowPage;
  let fixture: ComponentFixture<MallshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
