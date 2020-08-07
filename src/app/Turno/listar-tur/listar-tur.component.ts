import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Turno} from 'src/app/Modelo/Turno';
import {ServiceturService} from '../../Service/servicetur.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listar-tur',
  templateUrl: './listar-tur.component.html',
  styleUrls: ['./listar-tur.component.css']
})
export class ListarTurComponent implements OnInit {

  turnos:Turno[]; 
  txtBuscador : string;
  txtFecha : Date;


  constructor(private servicetur:ServiceturService, private router:Router, private formatFecha: DatePipe) { }

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

  Buscar(){
    this.servicetur.getFiltrado(this.txtBuscador).subscribe(respuesta=>{
      this.turnos= respuesta.data;
    
    });
  }

  limpiarFiltros(){
    this.txtBuscador = undefined;
  }

  BuscarFecha(){
    //this.formatFecha.transform(this.txtFecha,'dd/MM/yyyy')
    this.servicetur.getFiltradoPorFecha(this.txtFecha).subscribe(respuesta=>{
      this.turnos= respuesta.data;
    
    });
  }

  limpiarFiltrosFecha(){
    this.txtFecha = undefined;
  }

}
