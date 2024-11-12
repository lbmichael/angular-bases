import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
    constructor() { }

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krilin',
        power: 500,
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Vegueta',
        power: 700
    }];

    onNewCharacter(character: Character): void {
        console.log('Main page', character);

        const newCharacter: Character = { id: uuid(), ...character }

        this.characters.push(newCharacter);
    }

    onDeleteCharacter(index: number): void {
        console.log('Main page index', index);

        this.characters.splice(index, 1);
    }

    deleteCharacterById(id: string) {
        console.log('llego aqui');
        this.characters = this.characters.filter(c => c.id !== id)
    }

}