import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changehero(){
    this.name = 'Siperman';
  }

  changeAge(){
    this.age = 10;
  }

  resetForm(): void{
    this.name = 'Ironman';
    this.age = 45;
  }

}
