import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrshowPage } from './vrshow.page';

describe('VrshowPage', () => {
  let component: VrshowPage;
  let fixture: ComponentFixture<VrshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
