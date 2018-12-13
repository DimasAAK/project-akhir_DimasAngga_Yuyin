import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpustakaanComponent } from './perpustakaan.component';

describe('PerpustakaanComponent', () => {
  let component: PerpustakaanComponent;
  let fixture: ComponentFixture<PerpustakaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpustakaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpustakaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
