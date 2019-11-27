import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevactivityPage } from './prevactivity.page';

describe('PrevactivityPage', () => {
  let component: PrevactivityPage;
  let fixture: ComponentFixture<PrevactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevactivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
