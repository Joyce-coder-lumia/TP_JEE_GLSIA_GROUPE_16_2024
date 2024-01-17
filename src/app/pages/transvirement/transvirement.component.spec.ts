import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransvirementComponent } from './transvirement.component';

describe('TransvirementComponent', () => {
  let component: TransvirementComponent;
  let fixture: ComponentFixture<TransvirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransvirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransvirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
