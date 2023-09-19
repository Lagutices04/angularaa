import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent {
  formulario: FormGroup;
  

  constructor(private fb: FormBuilder, private router:Router) {
    this.formulario=this.fb.group({
      nombre:['',Validators.required],
      correo:['',Validators.required],
      contraseña:['',Validators.required],
    


    });
  }

  enviarDatos(){
 if(this.formulario.valid)  {
  const data = this.formulario.value;
  this.router.navigate(['/ticket',data])
 }else{
  console.log('formulario no valido')
 }
}

 
}



