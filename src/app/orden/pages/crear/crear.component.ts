import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Clientes } from 'src/app/cliente/interfaces/cliente.interface';
import Swal from 'sweetalert2';
import { Estado } from '../../interfaces/estado-orden.interface';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: [
  ]
})
export class CrearComponent implements OnInit {

  estadoOrdenes: Estado[] = [];
  clientes: Clientes[] = []

  ordenForm: FormGroup = this.fb.group({
    idCliente: ['', [Validators.required]],
    idEstadoOrden: ['', [Validators.required]],
    nroOrden: ['', [Validators.required]],
    valorPagar: ['', [Validators.required, Validators.email]],
    detalle: ['', [Validators.required, Validators.minLength(10)]],
    fechaCreacion: ['', [Validators.required]],
    fechaActualizacion: ['', [Validators.required]],
    estado: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private ordenService: OrdenService) { }

  ngOnInit(): void {
    this.consultarEstado();
    this.consultarClientes();
  }

  guardarOrden(){

    console.log(this.ordenForm.value);
    // const { email, password } = this.miFormulario.value;

    this.ordenService.crearOrden(this.ordenForm.value).subscribe(
      (resp => {
          console.log("resp",resp)
          if(resp.estado){
            Swal.fire('Creado', resp.msj, 'success');
          }else{
            Swal.fire('Error', resp, 'error');
          }
          
        }
      )
    );
  }

  consultarEstado(){
    this.ordenService.listarEstadoOrden().subscribe(
      (res => {
        if(res.estado){
          console.log(res);
          this.estadoOrdenes = res.datos;
        }
        else{
          console.log("Error al realizar la peticion");
        }
      }
      )
    );
  }

  consultarClientes(){
    this.ordenService.listarClientes().subscribe(
      (res => {
        if (res.estado) { 
          console.log(res);
          this.clientes = res.datos
        }
        else{
          console.log("Error al realizar la peticion");
        }
      }
      )
    );
  }

}
