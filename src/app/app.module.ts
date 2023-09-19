import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViajeComponent } from './components/viaje/viaje.component';
import { OfertaVueloComponent } from './viajes/oferta-vuelo/oferta-vuelo.component';
import { ReservarComponent } from './viajes/reservar/reservar.component';
import { TicketComponent } from './viajes/ticket/ticket.component';
import { FormularioComponent } from './viajes/formulario/formulario.component';

const appRoutes: Routes=[

 {path:'login',component:LoginComponent},
 {path:'viaje',component:ViajeComponent},
 {path:'oferta-vuelo',component:OfertaVueloComponent},
 {path:'reservar',component:ReservarComponent},
 {path:'ticket',component:TicketComponent},
 {path:'formulario',component:FormularioComponent},
 { path: '**', pathMatch: 'full', redirectTo: 'login' }

]

@NgModule({
  declarations: [
     AppComponent,
     LoginComponent,
     ViajeComponent,
     OfertaVueloComponent,
     ReservarComponent,
     TicketComponent,
     FormularioComponent,
          
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
