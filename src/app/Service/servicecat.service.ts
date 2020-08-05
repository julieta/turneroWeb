import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categoria} from '../Modelo/Categoria';

@Injectable(//{
 // providedIn: 'root'
//}
)
export class ServicecatService {

  constructor(private http:HttpClient) { }
    Url='http://localhost:8080/categorias';

    getCategorias(){
      return this.http.get<Categoria[]>(this.Url)  }
  }

