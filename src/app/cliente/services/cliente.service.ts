import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente, Clientes } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  listarClientes(){
    return this.http.get<Cliente>(`${this.baseUrl}/cliente/listar`);
  }

  crearClientes(params: Params){
    return this.http.post<Cliente>(`${this.baseUrl}/cliente/crear`,params)
    .pipe(
      tap(
        resp => {
          console.log("resp", resp)
        }
      ),
      catchError( err => of(err.error.message))
    );
  }

  editarCliente(params: Params){
    return this.http.post<Clientes>(`${this.baseUrl}/cliente/editar`,params)
    .pipe(
      tap(
        resp => {
          console.log("editar", resp)
        }
      ),
      catchError( err => of(err.error.message))
    );
  }

  actualizarCliente(params: Params){
    return this.http.put<Clientes>(`${this.baseUrl}/cliente/actualizar`,params)
    .pipe(
      tap(
        resp => {
          console.log("actualizar", resp)
        }
      ),
      catchError( err => of(err.error.message))
    );
  }

}
