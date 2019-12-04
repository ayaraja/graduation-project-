import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmlistPage } from './vmlist.page';

describe('VmlistPage', () => {
  let component: VmlistPage;
  let fixture: ComponentFixture<VmlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
