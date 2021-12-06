import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  listarClientes(){
    return this.http.get<Cliente>(`${this.baseUrl}/cliente/listar`);
  }

}
