import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Orden } from '../interfaces/orden.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  
  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  listarOrdenes(){
    return this.http.get<Orden>(`${this.baseUrl}/orden/listar`);
  }
}
