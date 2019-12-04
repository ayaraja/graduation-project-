import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VclistPage } from './vclist.page';

describe('VclistPage', () => {
  let component: VclistPage;
  let fixture: ComponentFixture<VclistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VclistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VclistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
