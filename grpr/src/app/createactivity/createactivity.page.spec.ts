import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateactivityPage } from './createactivity.page';

describe('CreateactivityPage', () => {
  let component: CreateactivityPage;
  let fixture: ComponentFixture<CreateactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateactivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
