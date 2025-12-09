import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from "./components/shared/navbar/navbar";

@Component({
  selector: 'primer-componente',
  imports: [RouterOutlet,  Navbar],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Fernando III');
}
