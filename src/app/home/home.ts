import { Component, inject, Input } from '@angular/core';
import { Counter } from '../service/counter';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private cService = inject(Counter);
  @Input() count = 0;
}
