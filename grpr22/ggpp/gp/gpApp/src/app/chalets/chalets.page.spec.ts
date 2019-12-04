import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletsPage } from './chalets.page';

describe('ChaletsPage', () => {
  let component: ChaletsPage;
  let fixture: ComponentFixture<ChaletsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaletsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaletsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
