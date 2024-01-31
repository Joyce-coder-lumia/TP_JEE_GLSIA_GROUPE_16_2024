import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificformComponent } from './modificform.component';

describe('ModificformComponent', () => {
  let component: ModificformComponent;
  let fixture: ComponentFixture<ModificformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
