import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTur'
})


export class FilterTurPipe implements PipeTransform {

  transform(value: any,arg: any): any { 
    const res = [];    
    for (const turnos of value){ 
      if (turnos.nombrecliente.indexOf(arg) > -1){
         res.push(turnos); 
        }; 
    }; 
    return arg ? res : value
  } 
  
} 


