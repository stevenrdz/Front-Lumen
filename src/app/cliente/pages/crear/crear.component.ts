import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: [
  ]
})
export class CrearComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    identificacion: ['', [Validators.required] ],
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    celular: ['', [Validators.required, Validators.minLength(10)]],
    fechaCreacion: ['', [Validators.required]],
    fechaActualizacion: ['', [Validators.required]],
    estado: ['', [Validators.required]]
  });

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteService) { 
   
  }

  
  ngOnInit(): void {
  }

  nuevoCliente(){

    console.log(this.miFormulario.value);
    // const { email, password } = this.miFormulario.value;

    this.clienteService.crearClientes(this.miFormulario.value).subscribe(
      (resp => {
          console.log("resp",resp)
          if(resp.estado){
            Swal.fire('Creado', resp.msj, 'success');
          }else{
            Swal.fire('Error', resp.msj, 'error');
          }
          
        }
      )
    );
  }

}
