import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeshowPage } from './veshow.page';

describe('VeshowPage', () => {
  let component: VeshowPage;
  let fixture: ComponentFixture<VeshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
