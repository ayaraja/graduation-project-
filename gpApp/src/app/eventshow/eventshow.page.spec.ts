import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventshowPage } from './eventshow.page';

describe('EventshowPage', () => {
  let component: EventshowPage;
  let fixture: ComponentFixture<EventshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
