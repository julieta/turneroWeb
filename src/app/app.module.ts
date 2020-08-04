import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServiceService} from '../app/Service/service.service';
import { ListarComponent } from './Persona/listar/listar.component';

import { AddComponent } from './Persona/add/add.component';
import { HttpClientModule} from '@angular/common/http';
import { ListarCatComponent } from './Categoria/listar-cat/listar-cat.component';
import { AddCatComponent } from './Categoria/add-cat/add-cat.component';
import { ServicecatService} from './Service/servicecat.service';
import { ListarTurComponent } from './Turno/listar-tur/listar-tur.component';
import { AddturComponent } from './Turno/addtur/addtur.component';
import { ServiceturService } from './Service/servicetur.service';




@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
   
    AddComponent,
   
    ListarCatComponent,
   
    AddCatComponent,
   
    ListarTurComponent,
   
    AddturComponent,
   
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],

  providers: [ServiceService,ServicecatService,ServiceturService],
  bootstrap: [AppComponent]
})
export class AppModule { }
