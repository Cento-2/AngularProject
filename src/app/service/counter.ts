import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Counter {
  counter = 0;

  onClick(count: number) {
    this.counter += count;
  }

  getCounter() {
    return this.counter;
  }
  
}
