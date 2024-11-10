import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ['Siperman', 'Ironman', 'Hulk']
  public removedhero: string = '';

  removeHero(): void {
    this.removedhero = this.heroName[this.heroName.length -1];
    this.heroName.splice(this.heroName.length - 1, 1)
  }

}
