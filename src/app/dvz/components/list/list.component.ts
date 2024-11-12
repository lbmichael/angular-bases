import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: v4(),
    name: 'Trunks',
    power: 10,
  }]


  deleteCharacter(index: number) {
    console.log(index);

    this.onDeleteCharacter.emit(index)
  }

  deleteCharacterById(id?: string) {
    console.log(id);

    if (!id) return;

    this.onDeleteCharacterById.emit(id)
  }

}
