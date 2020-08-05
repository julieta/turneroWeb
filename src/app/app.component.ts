import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionTurnos';

constructor(private router:Router){}

Listar(){
  this.router.navigate(["listar"]);
}


Listarcat(){
  this.router.navigate(["listar-cat"]);
}
Listartur(){
  this.router.navigate(["listar-tur"]);
}
 
}