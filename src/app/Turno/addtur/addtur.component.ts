import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Turno} from 'src/app/Modelo/Turno';
import {ServiceturService} from '../../Service/servicetur.service';
import { ServicecatService } from 'src/app/Service/servicecat.service';
import { Categoria } from 'src/app/Modelo/Categoria';


@Component({
  selector: 'app-addtur',
  templateUrl: './addtur.component.html',
  styleUrls: ['./addtur.component.css']
})
export class AddturComponent implements OnInit {

  categorias : Categoria[] = [];
  
  constructor(private servicetur:ServiceturService, private router:Router, private servicecat: ServicecatService) { }

  ngOnInit(): void {
    this.servicecat.get().subscribe(respuesta => {
      this.categorias = respuesta;
    });
  }

  GuardarTur(formulario){
    this.servicetur.guardarTurno(formulario.value).subscribe(respuesta =>{console.log(respuesta)});
  }
}
