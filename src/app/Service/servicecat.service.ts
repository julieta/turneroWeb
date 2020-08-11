import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categoria} from '../Modelo/Categoria';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable(//{
 // providedIn: 'root'
//}
)
export class ServicecatService {
  
  private categoria : Categoria[]=[];

  constructor(private http:HttpClient) { }
    Url='http://localhost:8080/categorias';

    getCategorias(){
      return this.http.get<Categoria[]>(this.Url);  
    }
 
    guardarCategoria(categoria : any) : Observable<any> {
      return this.http.post(this.Url, categoria);
    }

    get() : Observable<any>{
      return this.http.get<Categoria[]>(this.Url);
    }
    deleteCategoria(categoria : Categoria){ 
      return this.http.delete<Categoria>(this.Url+"/"+categoria.id); 
    } 
    
    getCategoria(id : number) {
    
      return this.http.get<Categoria>(this.Url +  "/" +id);
    }
  

    updateCategoria(categoria : Categoria){
      return this.http.put<Categoria>(this.Url + "/" + categoria.id, categoria);
    
    }
    getFiltrado(txt:string): Observable<any>{
      return this.http.get<Categoria[]>(this.Url + '?nombre=' + txt );
    }
   
  
}


