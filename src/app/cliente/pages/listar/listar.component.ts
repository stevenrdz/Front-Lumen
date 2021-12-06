import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  // cliente: {} = {};

  constructor(private clienteService: ClienteService) { 
    // this.consultarClientes();
  }

  ngOnInit(): void {
  }

  /* consultarClientes(){
    this.clienteService.listarClientes().subscribe(
      (res => {
        if (res) { this.cliente = res }
        else{
           console.log("no existen clientes");
        }
      }
      )
    );
  } */
}
