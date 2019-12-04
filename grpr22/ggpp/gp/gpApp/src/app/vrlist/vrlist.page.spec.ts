import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrlistPage } from './vrlist.page';

describe('VrlistPage', () => {
  let component: VrlistPage;
  let fixture: ComponentFixture<VrlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
