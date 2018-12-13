/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerpustakaanItemComponent } from './perpustakaan-item.component';

describe('PerpustakaanItemComponent', () => {
  let component: PerpustakaanItemComponent;
  let fixture: ComponentFixture<PerpustakaanItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpustakaanItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpustakaanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
