import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcshowPage } from './vcshow.page';

describe('VcshowPage', () => {
  let component: VcshowPage;
  let fixture: ComponentFixture<VcshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
