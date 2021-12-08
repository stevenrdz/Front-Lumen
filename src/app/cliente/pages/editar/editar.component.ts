import { Component, OnInit } from '@angular/core';
import { Clientes, Editar } from '../../interfaces/cliente.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {

  clientes: Clientes[] = [];
  idCliente: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params['id'])
        this.idCliente = params['id'];
        
      }
    );
  }

  

}
