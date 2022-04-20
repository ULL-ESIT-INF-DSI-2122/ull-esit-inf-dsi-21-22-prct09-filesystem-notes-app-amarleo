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
        console.log('\nDatabase directory created');
      }
      if (!fs.existsSync(databasePath)) {
        fs.mkdirSync(databasePath);
        console.log(`\nDirectory created for user ${this._name}`);
      }
      if (fs.existsSync(jsonPath)) {
        console.log(`\nError: ${element.title} already exists` +
        ` for user ${this._name}`);
      } else {
        fs.openSync(jsonPath, 'w');
        console.log(`\n${element.title} note has been added` +
        ` to user ${this._name}`);
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
      console.log('\nDatabase directory created');
    }
    if (!fs.existsSync(databasePath)) {
      fs.mkdirSync(databasePath);
      console.log(`\nDirectory created for user ${this._name}`);
    }
    if (fs.existsSync(jsonPath)) {
      console.log(`\nError: ${note.title} already exists` +
        ` for user ${this._name}`);
    } else {
      fs.openSync(jsonPath, 'w');
      console.log(`\n${note.title} note has been added` +
        ` to user ${this._name}`);
    }
  }

  removeNote(note: Note) {
    const jsonPath: string = './database/' + this._name +
     '/' + note.title + '.json';
    if (fs.existsSync(jsonPath)) {
      fs.unlink(jsonPath, (err) => {
        if (err) throw err;
        console.log(`\n${jsonPath} was deleted`);
      });
    } else {
      console.log(`Error: ${note.title} ` +
        `does not exists on ${this._name} database`);
    }
  }

  listAllNotes() {
    console.log(`\n${this._name} notes`);
    this._notes.forEach((note: Note) => {
      console.log(`\n-> ${note.title}`);
    });
  }
}

const firstNote: Note = new Note('Blue Note', 'This is a blue note', 'Blue');
const redNote: Note = new Note('Red Note', 'This is a red note', 'Red');
const user: User = new User('Ale', [firstNote]);
const fifa: User = new User('Fifa', [redNote]);

user.listAllNotes();
