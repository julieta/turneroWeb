import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Turno} from 'src/app/Modelo/Turno';
import {ServiceturService} from '../../Service/servicetur.service';

@Component({
  selector: 'app-listar-tur',
  templateUrl: './listar-tur.component.html',
  styleUrls: ['./listar-tur.component.css']
})
export class ListarTurComponent implements OnInit {

  turnos:Turno[]; 
  constructor(private servicetur:ServiceturService, private router:Router) { }

  ngOnInit() {
    this.servicetur.getTurnos().subscribe(data=>{
      this.turnos=data;
    
    });
  }

  Listartur(){
    this.router.navigate(["listar-tur"]);
  }

  NuevoTur(){
    this.router.navigate(["addtur"]);
  }

  EliminarTur(turno : Turno): void { 
    this.servicetur.deleteTurno(turno).subscribe(data=>{ 
      this.turnos=this.turnos.filter(p=>p!==turno); 
    alert("Turno eliminado"); }); 
  } 

}
