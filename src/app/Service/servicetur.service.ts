import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Turno} from '../Modelo/Turno';

@Injectable({
  providedIn: 'root'
})
export class ServiceturService {

  constructor(private http:HttpClient) { }
    Url='http://localhost:8080/turnos';

    getTurnos(){
      return this.http.get<Turno[]>(this.Url)  }
  }
