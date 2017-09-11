import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simple'
})

export class Simple implements PipeTransform {

  transform(value: any, args?: any): any {

    let newValue

    for (let i = 0; i < value.length; i++) {

      newValue = newValue + `${value[i]}-${args}`;

    }

    return newValue.toLowerCase() ;

  }

}
