import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeProducts'
})
export class PipeProductsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
