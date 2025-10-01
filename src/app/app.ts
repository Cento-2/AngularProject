import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header";
import { Home } from "./home/home";
import { Counter } from './service/counter';
import { Login } from "./login/login";
import { Registration } from "./registration/registration";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Home, RouterLink, Login, Registration],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ComunicazioneTraComponenti');
  cService = inject(Counter);
}
