import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosenotifPage } from './choosenotif.page';

describe('ChoosenotifPage', () => {
  let component: ChoosenotifPage;
  let fixture: ComponentFixture<ChoosenotifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosenotifPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosenotifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
