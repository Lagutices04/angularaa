import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oferta-vuelo',
  templateUrl: './oferta-vuelo.component.html',
  styleUrls: ['./oferta-vuelo.component.css']
})
export class OfertaVueloComponent {
  constructor(private router: Router) {}

  irAFormulario() {
    this.router.navigate(['/formulario']);  // Ruta al formulario
  }
}
