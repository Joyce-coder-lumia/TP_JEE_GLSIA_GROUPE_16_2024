import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptelistComponent } from './comptelist.component';

describe('ComptelistComponent', () => {
  let component: ComptelistComponent;
  let fixture: ComponentFixture<ComptelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
