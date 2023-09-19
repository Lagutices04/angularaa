import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaVueloComponent } from './oferta-vuelo.component';

describe('OfertaVueloComponent', () => {
  let component: OfertaVueloComponent;
  let fixture: ComponentFixture<OfertaVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfertaVueloComponent]
    });
    fixture = TestBed.createComponent(OfertaVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
