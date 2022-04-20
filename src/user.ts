import * as fs from 'fs';
import {Note} from './note';

export class User {
  private _name: string;
  private _notes: Note[];

  constructor(
      name: string,
      notes: Note[] = [],
  ) {
    this._name = name;
    this._notes = notes;
    notes.forEach((element: Note) => {
      const databasePath: string = './database/' + this._name;
      const jsonPath: string = databasePath + '/' + element.title + '.json';
      if (!fs.existsSync('./database')) {
        fs.mkdirSync('./database');
        console.log('\nSe ha creado el directorio database');
      }
      if (!fs.existsSync(databasePath)) {
        fs.mkdirSync(databasePath);
        console.log(`\nSe ha creado el directorio al usuario ${this._name}`);
      }
      if (fs.existsSync(jsonPath)) {
        console.log(`\nError: La nota ${element.title} ya existe` +
          ` para el usuario ${this._name}`);
      } else {
        fs.openSync(jsonPath, 'w');
        console.log(`\nSe ha añadido al usuario` +
          ` ${this._name} la nota ${element.title}`);
      }
    });
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get notes(): Note[] {
    return this._notes;
  }

  set notes(value: Note[]) {
    this._notes = value;
  }

  addNote(note: Note) {
    const databasePath: string = './database/' + this._name;
    const jsonPath: string = databasePath + '/' + note.title + '.json';
    if (!fs.existsSync('./database')) {
      fs.mkdirSync('./database');
      console.log('\nSe ha creado el directorio database');
    }
    if (!fs.existsSync(databasePath)) {
      fs.mkdirSync(databasePath);
      console.log(`\nSe ha creado el directorio al usuario ${this._name}`);
    }
    if (fs.existsSync(jsonPath)) {
      console.log(`\nError: La nota ${note.title} ya existe` +
        ` para el usuario ${this._name}`);
    } else {
      fs.openSync(jsonPath, 'w');
      console.log(`\nSe ha añadido al usuario` +
        ` ${this._name} la nota ${note.title}`);
    }
  }
}

const firstNote: Note = new Note('Blue Note', 'This is a blue note', 'Blue');
const redNote: Note = new Note('Red Note', 'This is a red note', 'Red');
const user: User = new User('Ale', [firstNote]);
const fifa: User = new User('Fifa', [redNote]);
