import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  }

  addCharacter(): void {
    console.log(this.character);

    // debugger;

    if(this.character.name.length === 0) return;

    // * Se puede utilizar spread operation para asegurar que se retorne un nuevo objecto,
    // * aunque angular ya hace eso por debajo
    // this.onNewCharacter.emit({...this.character}); 
    this.onNewCharacter.emit(this.character);


    // this.character.name = '';
    // this.character.power = 0;
    this.character = {name:'', power: 0}
  }
}
