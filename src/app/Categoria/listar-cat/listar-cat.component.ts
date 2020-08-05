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


  EditarCat(categoria : Categoria): void {
    localStorage.setItem("id", categoria.id.toString());
    this.router.navigate(["editar-cat"]);
  }
}
