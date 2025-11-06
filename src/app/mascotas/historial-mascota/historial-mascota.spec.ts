import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialMascota } from './historial-mascota';

describe('HistorialMascota', () => {
  let component: HistorialMascota;
  let fixture: ComponentFixture<HistorialMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialMascota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialMascota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
