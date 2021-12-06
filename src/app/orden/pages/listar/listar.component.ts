import { Component, OnInit } from '@angular/core';
import { Orden } from '../../interfaces/orden.interface';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  constructor(private ordenService: OrdenService) { }

  ordenes: Orden[] = [];
  dic: {} = {}
  ngOnInit(): void {
    this.consultarOrdenes();
  }

  consultarOrdenes(){
    this.ordenService.listarOrdenes().subscribe(
      (res => {
        console.log(res)
        
        console.log(this.ordenes)
      }
      )
    );
  }
}
