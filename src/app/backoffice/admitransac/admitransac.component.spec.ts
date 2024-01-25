import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitransacComponent } from './admitransac.component';

describe('AdmitransacComponent', () => {
  let component: AdmitransacComponent;
  let fixture: ComponentFixture<AdmitransacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmitransacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmitransacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
