import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Turno} from '../Modelo/Turno';
import { Observable } from 'rxjs';

@Injectable(//{
  //providedIn: 'root'}
)
export class ServiceturService {

  constructor(private http:HttpClient) { }
    Url='http://localhost:8080/turnos';

    getTurnos(){
      return this.http.get<Turno[]>(this.Url);
    }

    guardarTurno(turno : any) : Observable<any> {
      return this.http.post(this.Url, turno);
    }
    
    deleteTurno(turno : Turno){ 
      return this.http.delete<Turno>(this.Url+"/"+turno.id);
    } 

    getFiltrado(txt : string) : Observable<any>{
      return this.http.get<Turno[]>(this.Url + '?nombre=' +txt);
    }

    getFiltradoPorFecha(txt : Date) : Observable<any>{
      return this.http.get<Turno[]>(this.Url+'?fecha='+txt);
    }

    getTurno(id : number) {
    
      return this.http.get<Turno>(this.Url +  "/" +id);
    }

    get() : Observable<any>{
      return this.http.get<Turno[]>(this.Url);
    }
}
