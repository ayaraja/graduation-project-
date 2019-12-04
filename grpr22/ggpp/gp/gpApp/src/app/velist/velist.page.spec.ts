import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelistPage } from './velist.page';

describe('VelistPage', () => {
  let component: VelistPage;
  let fixture: ComponentFixture<VelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
