import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Categoria} from 'src/app/Modelo/Categoria';
import {ServicecatService} from '../../Service/servicecat.service';
import { ListarComponent } from 'src/app/Persona/listar/listar.component';

@Component({
  selector: 'app-editar-cat',
  templateUrl: './editar-cat.component.html',
  styleUrls: ['./editar-cat.component.css']
})
export class EditarCatComponent implements OnInit {
  categoriaN : Categoria = new Categoria();
  //categoria : Categoria[];
 categoria : any = {} ;
 

  constructor(private servicecat:ServicecatService, private router:Router, private activate: ActivatedRoute
    ) {
    this.activate.params.subscribe((parametros)=>{
      this.servicecat.getCategoria(parametros['id']).subscribe(categoria => {
        this.categoria = categoria;
        
      })
    });
    
  }

  ngOnInit(): void{
  //  this.EditarCat();
  }
  
 /** EditarCat(){
    let id = localStorage.getItem("id");
    this.servicecat.getCategoriaId(+id).subscribe(data => {
      console.log("Hola");

      this.categoria = data;
      console.log("data", data);
    });
  }*/

  ActualizarCat(categoriaN : Categoria){
    this.servicecat.updateCategoria(categoriaN).subscribe(categoriaN => {
      this.categoriaN = categoriaN;
      alert("¡La categoría se actualizó con éxito!");
      this.router.navigate(["listar-cat"]);
    });
    
  }
    
  }
