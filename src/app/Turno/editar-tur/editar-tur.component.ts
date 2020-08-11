import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/Modelo/Turno';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceturService } from 'src/app/Service/servicetur.service';
import { ServicecatService } from 'src/app/Service/servicecat.service';
import { Categoria } from 'src/app/Modelo/Categoria';

@Component({
  selector: 'app-editar-tur',
  templateUrl: './editar-tur.component.html',
  styleUrls: ['./editar-tur.component.css']
})
export class EditarTurComponent implements OnInit {
  categorias : Categoria[] = [];
 turnoN : Turno = new Turno();
 turno: any = {}

  constructor(private servicetur:ServiceturService, private router:Router, private activate: ActivatedRoute, private servicecat: ServicecatService) {
    this.activate.params.subscribe((parametros)=>{
      this.servicetur.getTurno(parametros['id']).subscribe(turno => {
        this.turno = turno;
        
      })
    });
    
   }

  ngOnInit(): void {
    this.servicecat.get().subscribe(respuesta => {
      this.categorias = respuesta;
    });
  }

  ActualizarTur(turnoN : Turno){
    this.servicetur.updateTurno(turnoN).subscribe(turnoN => {
      this.turnoN = turnoN;
      alert("Se actualizo con exito");
      this.router.navigate(["listar-tur"]);
    });
    
  }

}
