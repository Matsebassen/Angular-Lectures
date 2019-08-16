import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let array = value.split('');
    array = array.reverse();    
    return array.join('');
  }

}
