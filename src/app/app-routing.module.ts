import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { ListarCatComponent } from './Categoria/listar-cat/listar-cat.component';
import { AddCatComponent } from './Categoria/add-cat/add-cat.component';
import { ListarTurComponent } from './Turno/listar-tur/listar-tur.component';
import { AddturComponent } from './Turno/addtur/addtur.component';
import { EditarCatComponent } from './Categoria/editar-cat/editar-cat.component';
import { LoginComponent } from './login/login.component';
import { EditarTurComponent } from './Turno/editar-tur/editar-tur.component';


const routes: Routes = [
 {path: 'listar', component:ListarComponent},
 {path : 'add', component:AddComponent},
 {path : 'listar-cat', component:ListarCatComponent},
 {path: 'add-cat', component:AddCatComponent},
 {path : 'listar-tur', component:ListarTurComponent},
 {path: 'addtur', component:AddturComponent},
 {path: 'editar-cat', component:EditarCatComponent},
 {path: 'editar-cat/:id', component: EditarCatComponent},
 {path: 'editar-tur', component:EditarTurComponent},
 {path: 'editar-tur/:id', component: EditarTurComponent},
 {path: 'login', component: LoginComponent},
 {path : '**',  pathMatch: 'full', redirectTo : 'navbar'} //este siempre va al ultimo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
