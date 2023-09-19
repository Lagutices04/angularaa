import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViajeComponent } from './components/viaje/viaje.component';
import { OfertaVueloComponent } from './viajes/oferta-vuelo/oferta-vuelo.component';
import { ReservarComponent } from './viajes/reservar/reservar.component';
import { TicketComponent } from './viajes/ticket/ticket.component';
import { FormularioComponent } from './viajes/formulario/formulario.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'viaje', component: ViajeComponent },
  { path: 'oferta-vuelo', component: OfertaVueloComponent },
  { path: 'reservar', component: ReservarComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
  { path: 'ticket/:nombre/:origen/:destino',component: TicketComponent },
  { path: '**', redirectTo: 'formulario', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
