import { Component, OnInit } from '@angular/core';
import { Dato, Orden } from '../../interfaces/orden.interface';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  constructor(private ordenService: OrdenService) { }

  ordenes: Dato[] = [];
  ngOnInit(): void {
    this.consultarOrdenes();
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
}
