import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Categoria} from 'src/app/Modelo/Categoria';
import {ServicecatService} from '../../Service/servicecat.service';


@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  constructor(private servicecat:ServicecatService, private router:Router) { 
}

  ngOnInit(): void {
  }

  GuardarCat(formulario){
    
    this.servicecat.guardarCategoria(formulario.value).subscribe(respuesta =>{console.log(respuesta)});
  }

}
