import { Component, OnInit } from '@angular/core';
import { Ordenes } from '../../interfaces/orden.interface';
import { OrdenService } from '../../services/orden.service';
import { Estado } from '../../interfaces/estado-orden.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  constructor(private ordenService: OrdenService,
    private fb: FormBuilder) { }

  ordenes: Ordenes[] = [];
  estadoOrdenes: Estado[] = [];

  filtroForm: FormGroup = this.fb.group({
    idEstadoOrden: ['', [Validators.required]],
    fechaDesde: ['', [Validators.required]],
    fechaHasta: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.consultarOrdenes();
    this.consultarEstado();
  }

  consultarOrdenes(){
    this.ordenService.listarOrdenes().subscribe(
      (res => {
        if(res.estado){
          console.log(res);
          this.ordenes = res.datos;
        }
        else{
          console.log("Error al realizar la peticion");
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

  filtrarOrden(){
    console.log(this.filtroForm.value);
    this.ordenService.filtrarOrden(this.filtroForm.value).subscribe(
      (res => {
        if(res.estado){
          console.log(res);
          this.ordenes = res.datos;
        }
        else{
          console.log("Error al realizar la peticion");
        }
      }
      )
    );
  }
  
}
