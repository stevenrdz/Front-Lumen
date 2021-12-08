import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  clientes: Clientes[] = [];

  constructor(private clienteService: ClienteService,
    private router:Router) { 
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

  editarCliente(idCliente: Number) {
    this.router.navigate(['cliente/editar'], { queryParams: { id: idCliente} });
  }
}
