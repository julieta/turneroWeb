import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Turno} from 'src/app/Modelo/Turno';
import {ServiceturService} from '../../Service/servicetur.service';

@Component({
  selector: 'app-addtur',
  templateUrl: './addtur.component.html',
  styleUrls: ['./addtur.component.css']
})
export class AddturComponent implements OnInit {

  constructor(private servicetur:ServiceturService, private router:Router) { }

  ngOnInit(): void {
  }

  GuardarTur(formulario){
    this.servicetur.guardarTurno(formulario.value).subscribe(respuesta =>{console.log(respuesta)});
  }
}
