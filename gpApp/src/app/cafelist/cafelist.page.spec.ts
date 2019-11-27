import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafelistPage } from './cafelist.page';

describe('CafelistPage', () => {
  let component: CafelistPage;
  let fixture: ComponentFixture<CafelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
