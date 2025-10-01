import { Component, Output, EventEmitter, inject } from '@angular/core';
import { Counter } from '../service/counter';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  cService = inject(Counter);

  @Output() emitter = new EventEmitter<number>();

  onIncrement() {
    this.emitter.emit(1);
  }

  onDecrement() { 
    this.emitter.emit(-1);
  }

}
