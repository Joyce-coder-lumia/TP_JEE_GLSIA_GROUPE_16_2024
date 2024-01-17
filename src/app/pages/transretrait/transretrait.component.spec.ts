import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransretraitComponent } from './transretrait.component';

describe('TransretraitComponent', () => {
  let component: TransretraitComponent;
  let fixture: ComponentFixture<TransretraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransretraitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransretraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
