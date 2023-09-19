import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
 formulario: FormGroup;
  

  constructor(private fb: FormBuilder, private router:Router) {
    this.formulario=this.fb.group({
      nombre:['',Validators.required],
      origen:['',Validators.required],
      destino:['',Validators.required],
      fechaida:['',Validators.required],
      fecharegreso:['',Validators.required],


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
