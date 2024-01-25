import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmilistecpteComponent } from './admilistecpte.component';

describe('AdmilistecpteComponent', () => {
  let component: AdmilistecpteComponent;
  let fixture: ComponentFixture<AdmilistecpteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmilistecpteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmilistecpteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
