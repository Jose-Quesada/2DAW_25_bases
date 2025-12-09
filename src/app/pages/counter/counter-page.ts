import { Component, signal } from "@angular/core";



@Component({
  selector: 'counter-page',
  templateUrl:'./counter-page.html',
  styleUrl:'./counter-page.css'
})
export class CounterPage{
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value:number){
    this.counter += value;
    // this.counterSignal.set( this.counterSignal += value);
    this.counterSignal.update( (current) => current += value);
  }

  resetCounter(){
    this.counter = 10;
    this.counterSignal.set(10);
  }
}
