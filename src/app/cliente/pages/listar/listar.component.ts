import { Component, OnInit } from '@angular/core';
import { Cliente, Dato } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  clientes: Dato[] = [];

  constructor(private clienteService: ClienteService) { 
    this.consultarClientes();
  }

  ngOnInit(): void {
  }

  consultarClientes(){
    this.clienteService.listarClientes().subscribe(
      (res => {
        if (res.estado) { 
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
