import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelactivityPage } from './cancelactivity.page';

describe('CancelactivityPage', () => {
  let component: CancelactivityPage;
  let fixture: ComponentFixture<CancelactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelactivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
