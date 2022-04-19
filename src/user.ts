import * as fs from 'fs';
import {Note} from './note';

export class User {
  private _name: string;
  private _notes: Note[];

  constructor(
      name: string,
      notes: Note[],
  ) {
    this._name = name;
    this._notes = notes;
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
    const jsonPath: string = databasePath + '/' + note.title; + '.json';

    if (!fs.existsSync(databasePath)) {
      console.log();
      fs.mkdirSync(databasePath);
    }
  }
}

const firstNote: Note = new Note('Blue Note', 'This is a blue note', 'Blue');
const redNote: Note = new Note('Red Note', 'This is a red note', 'Red');
const user: User = new User('Ale', [firstNote]);

user.addNote(redNote);
