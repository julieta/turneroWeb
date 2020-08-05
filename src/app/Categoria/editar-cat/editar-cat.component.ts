import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Categoria} from 'src/app/Modelo/Categoria';
import {ServicecatService} from '../../Service/servicecat.service';
import { ListarComponent } from 'src/app/Persona/listar/listar.component';

@Component({
  selector: 'app-editar-cat',
  templateUrl: './editar-cat.component.html',
  styleUrls: ['./editar-cat.component.css']
})
export class EditarCatComponent implements OnInit {
  categoria : Categoria = new Categoria();

  constructor(private servicecat:ServicecatService, private router:Router) { }

  ngOnInit(): void {
    this.EditarCat();
  }

  EditarCat(){
    let id = localStorage.getItem("id");
    this.servicecat.getCategoriaId(+id).subscribe(data => {
      this.categoria = data;
    });
  }

  ActualizarCat(categoria : Categoria){
    this.servicecat.updateCategoria(categoria).subscribe(data => {
      this.categoria = data;
      alert("Se actualizo con exito");
      this.router.navigate(["listar-cat"]);
    });
  }
}
