import { Time } from '@angular/common';
import { Categoria } from './Categoria';

export class Turno{
    id:Number;
    nombrecliente: String;
    apellidocliente: String;
    categoria : Number;
    fecha : Date;
    hora : Time;
    descripcion: String;
}