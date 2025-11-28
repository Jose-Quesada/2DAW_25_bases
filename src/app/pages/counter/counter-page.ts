import { Component } from "@angular/core";



@Component({
  selector: 'counter-page',
  template:`<H1>FIN DE SEMANA de {{counter}}</H1>
  <h2>De estudiar Angular</h2>
  <button (click)="increaseBy(1)"> Incrementar </button>`
})
export class CounterPage{
  counter = 10;

  increaseBy(value:number){
    this.counter += value;
  }
}
