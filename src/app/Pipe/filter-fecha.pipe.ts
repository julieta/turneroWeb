import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFecha'
})
export class FilterFechaPipe implements PipeTransform {

  transform(value: any,arg: any): any { 
    const res = [];
    //  if (!arg) { return value }
    if (value){
      for (const turnos of value){ 
        if (turnos.fecha.indexOf(arg) > -1){
          res.push(turnos); 
          }; 
      }; 
      return arg ? res : value
    } 
  }
}
