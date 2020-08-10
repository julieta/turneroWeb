import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/Modelo/Turno';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceturService } from 'src/app/Service/servicetur.service';

@Component({
  selector: 'app-editar-tur',
  templateUrl: './editar-tur.component.html',
  styleUrls: ['./editar-tur.component.css']
})
export class EditarTurComponent implements OnInit {

  turno: any = {}

  constructor(private servicetur:ServiceturService, private router:Router, private activate: ActivatedRoute) {
    this.activate.params.subscribe((parametros)=>{
      this.servicetur.getTurno(parametros['id']).subscribe(turno => {
        this.turno = turno;
        
      })
    });
    
   }

  ngOnInit(): void {
  }

}
