import chalk from 'chalk';
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
        console.log(chalk.green.inverse('\nDatabase directory created'));
      }
      if (!fs.existsSync(databasePath)) {
        fs.mkdirSync(databasePath);
        console.log(chalk.green.inverse(
            `\nDirectory created for user ${this._name}`));
      }
      if (fs.existsSync(jsonPath)) {
        console.log(chalk.red(chalk.red.inverse(
            `\nError: ${element.title} already exists` +
        ` for user ${this._name}`)));
      } else {
        const noteContent: string =
        `{\n\t"title": "${element.title}",` +
        `\n\t"body": "${element.body}",` +
        `\n\t"color": "${element.color}"` +
        `\n}`;
        this._notes.push(element);
        fs.writeFileSync(jsonPath, noteContent);
        console.log(chalk.green.inverse(
            `\n${element.title} note has been added` +
        ` to user ${this._name}`));
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
      console.log(chalk.green.inverse('\nDatabase directory created'));
    }
    if (!fs.existsSync(databasePath)) {
      fs.mkdirSync(databasePath);
      console.log(chalk.green.inverse(
          `\nDirectory created for user ${this._name}`));
    }
    if (fs.existsSync(jsonPath)) {
      console.log(chalk.red.inverse(`\nError: ${note.title} already exists` +
        ` for user ${this._name}`));
    } else {
      const noteContent: string =
      `{\n\t"title": "${note.title}",` +
      `\n\t"body": "${note.body}",` +
      `\n\t"color": "${note.color}"` +
      `\n}`;
      fs.writeFileSync(jsonPath, noteContent);
      this._notes.push(note);
      console.log(chalk.green.inverse(`\n${note.title} note has been added` +
        ` to user ${this._name}`));
    }
  }

  editNote(note: Note) {
    const jsonPath: string = './database/' + this._name +
    '/' + note.title + '.json';
    if (fs.existsSync(jsonPath)) {
      const noteContent: string =
      `{\n\t"title": "${note.title}",` +
      `\n\t"body": "${note.body}",` +
      `\n\t"color": "${note.color}"` +
      `\n}`;
      fs.writeFileSync(jsonPath, noteContent);
      this._notes.push(note);
      console.log(chalk.green.inverse(`\n${note.title} note has been updated` +
        ` to user ${this._name}`));
    } else {
      console.log(chalk.red.inverse(`Error: ${note.title} ` +
        `does not exists on ${this._name} database`));
    }
  }

  removeNote(note: Note) {
    const jsonPath: string = './database/' + this._name +
     '/' + note.title + '.json';
    if (fs.existsSync(jsonPath)) {
      fs.unlink(jsonPath, (err) => {
        if (err) throw err;
        console.log(chalk.green.inverse(`\n${jsonPath} was deleted`));
      });
    } else {
      console.log(chalk.red.inverse(`Error: ${note.title} ` +
        `does not exists on ${this._name} database`));
    }
  }

  listAllNotes() {
    console.log(`\n --- ${this._name} notes ---\n`);
    const databasePath: string = './database/' + this._name;
    fs.readdirSync(databasePath).forEach((file: string) => {
      const note = new Note(file);
      const jsonPath: string = './database/' + this._name +
      '/' + note.title;
      let data: string = fs.readFileSync(jsonPath,
          {encoding: 'utf8', flag: 'r'});
      let dataObject = JSON.parse(data);
      if (dataObject.color === 'Blue') {
        console.log(chalk.blue(file.replace('.json', '')));
      }
      if (dataObject.color === 'Red') {
        console.log(chalk.red(file.replace('.json', '')));
      }
      if (dataObject.color === 'Yellow') {
        console.log(chalk.yellow(file.replace('.json', '')));
      }
      if (dataObject.color === 'Green') {
        console.log(chalk.green(file.replace('.json', '')));
      }
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
      console.log(chalk.red.inverse(`Error: ${note.title} ` +
        `does not exists on ${this._name} database`));
    }
  }
}
