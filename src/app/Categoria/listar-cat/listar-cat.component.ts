import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Categoria} from 'src/app/Modelo/Categoria';
import {ServicecatService} from '../../Service/servicecat.service';

@Component({
  selector: 'app-listar-cat',
  templateUrl: './listar-cat.component.html',
  styleUrls: ['./listar-cat.component.css']
})
export class ListarCatComponent implements OnInit {

  categorias:Categoria[]; 
  txtBuscador: '';

  constructor(private servicecat:ServicecatService, private router:Router) { }

  ngOnInit() {
    this.servicecat.getCategorias().subscribe(data=>{
      this.categorias=data;
    });
    
  }

  Nueva(){
    this.router.navigate(["add-cat"]);
  }

    
  Listarcat(){
    this.router.navigate(["listar-cat"]);
  }

  EliminarCat(categoria : Categoria): void { 
    this.servicecat.deleteCategoria(categoria).subscribe(data=>{ 
      this.categorias=this.categorias.filter(p=>p!==categoria); 
      alert("Categoria eliminada"); 
    }); 
  } 

  Ver(id : number){
    this.router.navigate(['/editar-cat', id]);
  }
 /** EditarCat(categoria : Categoria): void {
    localStorage.setItem("id", categoria.id.toString());
    this.router.navigate(["editar-cat"]);
    
  }*/
  BuscarCat(){
    this.servicecat.getFiltrado(this.txtBuscador).subscribe(respuesta=>{
      this.categorias = respuesta.data;
      
    });
  }
  LimpiarCat(){
    this.txtBuscador=undefined;
  }
  
}
