import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../interfaces/cliente.interface';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  clientes: Clientes;
  idCliente: {};

  editarForm: FormGroup = this.fb.group({
    id:[''],
    identificacion: ['', [Validators.required]],
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    celular: ['', [Validators.required, Validators.minLength(10)]],
    fechaCreacion: ['', [Validators.required]],
    fechaActualizacion: ['', [Validators.required]],
    estado: ['', [Validators.required]]
  });

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private clienteService: ClienteService) {
      this.clientes;
     }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if(params != null){
          this.clienteService.editarCliente(params).subscribe(
            ( res => 
              {
                  if (res.estado) { 
                    this.clientes = res.datos;
                    this.idCliente = params['id'];
                    this.editarForm
                      .setValue(
                        { 'id': this.idCliente,
                          'identificacion' : this.clientes?.identificacion,
                          'nombres': this.clientes?.nombres,
                          'apellidos': this.clientes?.apellidos,
                          'correo':this.clientes?.correo,
                          'celular':this.clientes?.celular,
                          'fechaCreacion':this.clientes?.fechaCreacion,
                          'fechaActualizacion':this.clientes?.fechaActualizacion,
                          'estado':this.clientes?.estado
                        })
                  }
                  else{
                    console.log("Error al realizar la peticion");
                  }
              }));
        }
        else{
          console.log("no hay cliente a editar");
        }
      }
    );
    
  }

  actualizarCliente(){
    this.clienteService.actualizarCliente(this.editarForm.value).subscribe(
      (resp => {
          if(resp.estado){
            Swal.fire('Actualizado', resp.msj, 'success');
          }else{
            Swal.fire('Error', resp.msj, 'error');
          }
          
        }
      )
    );
  }

}
