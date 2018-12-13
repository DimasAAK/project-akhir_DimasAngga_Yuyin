/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerpustakaanListComponent } from './perpustakaan-list.component';

describe('PerpustakaanListComponent', () => {
  let component: PerpustakaanListComponent;
  let fixture: ComponentFixture<PerpustakaanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpustakaanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpustakaanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
