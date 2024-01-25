import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreecpteComponent } from './creecpte.component';

describe('CreecpteComponent', () => {
  let component: CreecpteComponent;
  let fixture: ComponentFixture<CreecpteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreecpteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreecpteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
