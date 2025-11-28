import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterPage } from "./pages/counter/counter-page";

@Component({
  selector: 'primer-componente',
  imports: [RouterOutlet, CounterPage],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Fernando III');
}
