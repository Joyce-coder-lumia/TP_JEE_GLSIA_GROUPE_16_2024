import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransversComponent } from './transvers.component';

describe('TransversComponent', () => {
  let component: TransversComponent;
  let fixture: ComponentFixture<TransversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
