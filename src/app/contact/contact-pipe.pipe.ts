import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactPipe'
})
export class ContactPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
