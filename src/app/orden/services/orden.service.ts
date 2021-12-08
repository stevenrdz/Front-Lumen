import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/cliente/interfaces/cliente.interface';
import { environment } from 'src/environments/environment';
import { EstadoOrden } from '../interfaces/estado-orden.interface';
import { Orden } from '../interfaces/orden.interface';
import { Params } from '@angular/router';
import { tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  
  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  listarOrdenes(){
    return this.http.get<Orden>(`${this.baseUrl}/orden/listar`);
  }

  crearOrden(params: Params){
    return this.http.post<Cliente>(`${this.baseUrl}/orden/crear`,params)
    .pipe(
      tap(
        resp => {
          console.log("resp", resp)
        }
      ),
      catchError( err => of(err.error.message))
    );
  }

  filtrarOrden(params: Params){
    return this.http.post<Orden>(`${this.baseUrl}/orden/filtrar`, params)
    .pipe(
      tap(
        resp => {
          console.log("resp", resp)
        }
      ),
      catchError( err => of(err.error.message))
    );
  }

  listarEstadoOrden(){
    return this.http.get<EstadoOrden>(`${this.baseUrl}/estado_orden`);
  }

  listarClientes(){
    return this.http.get<Cliente>(`${this.baseUrl}/cliente/listar`);
  }
}
