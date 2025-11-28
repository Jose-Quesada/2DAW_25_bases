import { Component } from "@angular/core";



@Component({
  selector: 'counter-page',
  templateUrl:'./counter-page.html',
  styleUrl:'./counter-page.css'
})
export class CounterPage{
  counter = 10;

  increaseBy(value:number){
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }
}
