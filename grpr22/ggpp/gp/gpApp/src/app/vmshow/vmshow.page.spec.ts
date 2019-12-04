import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmshowPage } from './vmshow.page';

describe('VmshowPage', () => {
  let component: VmshowPage;
  let fixture: ComponentFixture<VmshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
