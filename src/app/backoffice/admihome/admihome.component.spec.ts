import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmihomeComponent } from './admihome.component';

describe('AdmihomeComponent', () => {
  let component: AdmihomeComponent;
  let fixture: ComponentFixture<AdmihomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmihomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
