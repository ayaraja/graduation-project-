import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResshowPage } from './resshow.page';

describe('ResshowPage', () => {
  let component: ResshowPage;
  let fixture: ComponentFixture<ResshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
