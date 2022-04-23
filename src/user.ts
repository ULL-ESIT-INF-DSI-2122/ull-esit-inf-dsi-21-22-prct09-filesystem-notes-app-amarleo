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
        const noteContent: string =
        `{\n\t"title": "${element.title}",` +
        `\n\t"body": "${element.body}",` +
        `\n\t"color": "${element.color}"` +
        `\n}`;

        fs.writeFileSync(jsonPath, noteContent);
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
      // fs.openSync(jsonPath, 'w');
      const noteContent: string =
      `{\n\t"title": "${note.title}",` +
      `\n\t"body": "${note.body}",` +
      `\n\t"color": "${note.color}"` +
      `\n}`;
      fs.writeFileSync(jsonPath, noteContent);
      this._notes.push(note);
      console.log(`\n${note.title} note has been added` +
        ` to user ${this._name}`);
    }
  }

  editNote(note: Note) {
    const jsonPath: string = './database/' + this._name +
    '/' + note.title + '.json';
    if (fs.existsSync(jsonPath)) {
      console.log(note.body);
    } else {
      console.log(`Error: ${note.title} ` +
        `does not exists on ${this._name} database`);
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
    console.log(`\n --- ${this._name} notes ---\n`);
    const databasePath: string = './database/' + this._name;
    fs.readdirSync(databasePath).forEach((file: string) => {
      console.log(file.replace('.json', ''));
    });
  }

  readNote(note: Note) {
    const jsonPath: string = './database/' + this._name +
    '/' + note.title + '.json';
    if (fs.existsSync(jsonPath)) {
      let data: string = fs.readFileSync(jsonPath,
          {encoding: 'utf8', flag: 'r'});
      let dataObject = JSON.parse(data);
      console.log(dataObject.body);
    } else {
      console.log(`Error: ${note.title} ` +
        `does not exists on ${this._name} database`);
    }
  }
}

const firstNote: Note = new Note('Blue Note', 'This is a blue note', 'Blue');
const redNote: Note = new Note('Red Note', 'This is a red note', 'Red');
const user: User = new User('Ale', [firstNote]);
const fifa: User = new User('Fifa', [redNote]);


user.listAllNotes();
user.addNote(redNote);
