/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerpustakaanEditComponent } from './perpustakaan-edit.component';

describe('PerpustakaanEditComponent', () => {
  let component: PerpustakaanEditComponent;
  let fixture: ComponentFixture<PerpustakaanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpustakaanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpustakaanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
