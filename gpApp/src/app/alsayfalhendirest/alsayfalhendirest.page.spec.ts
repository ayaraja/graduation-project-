import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsayfalhendirestPage } from './alsayfalhendirest.page';

describe('AlsayfalhendirestPage', () => {
  let component: AlsayfalhendirestPage;
  let fixture: ComponentFixture<AlsayfalhendirestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsayfalhendirestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsayfalhendirestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
