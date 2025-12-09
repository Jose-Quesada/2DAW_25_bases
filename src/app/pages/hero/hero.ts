import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed( ()=>{
  const description = `${ this.name() } - ${ this.age() }`
  return description
})

  capitalizedName = computed( () => this.name().toUpperCase())


  getHeroDescription(){
    return (`${ this.name() } - ${ this.age() }`);
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('IronMan');
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);
  }




}




