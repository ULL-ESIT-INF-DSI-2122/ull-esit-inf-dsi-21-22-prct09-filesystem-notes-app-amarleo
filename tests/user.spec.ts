import 'mocha';
import {expect} from 'chai';
import * as fs from 'fs';
import {Note} from '../src/note';
import {User} from '../src/user';

const blueNote: Note = new Note('Blue Note', 'This is a blue note', 'Blue');
const redNote: Note = new Note('Red Note', 'This is a red note', 'Red');
const redNoteEdit: Note = new Note('Red Note', 'This is a EDIT', 'Red');
const greenNote: Note = new Note('Green Note', 'This is a green note', 'Green');
const user: User = new User('user', [blueNote]);

describe('User Class tests', () => {
  describe('User Class getters', () => {
    it('username getter', () => {
      expect(user.name).to.be.eql('user');
    });
  });
  describe('User Class setters', () => {
    it('title setter', () => {
      user.name = 'user';
      expect(user.name).to.be.eql('user');
    });
    it('Notes setter', () => {
      user.notes = [greenNote, blueNote];
      expect(user.notes).to.be.eql([greenNote, blueNote]);
    });
  });
  describe('User Class methods', () => {
    describe('add Note method', () => {
      user.notes = [blueNote];
      user.addNote(redNote);
      it('If it does not exists, it must create a new directory', () => {
        expect(fs.existsSync('./database')).to.be.true;
      });
      it('If it does not exists, it must create a new user directory', () => {
        expect(fs.existsSync('./database/user')).to.be.true;
      });
      it('There should be 2 files', () => {
        expect(fs.existsSync('./database/user/Blue Note.json')).to.be.true;
        expect(fs.existsSync('./database/user/Red Note.json')).to.be.true;
      });
    });
    describe('edit Note method', () => {
      it('Initial content of red note', () => {
        expect(fs.readFileSync(
            './database/user/Red Note.json', {encoding: 'utf8', flag: 'r'}))
            .to.be.eql(
                '{\n\t"title": "Red Note",' +
                '\n\t"body": "This is a red note",' +
                '\n\t"color": "Red"' +
                '\n}');
      });
      it('Final content of red note', () => {
        user.editNote(redNoteEdit);
        expect(fs.readFileSync(
            './database/user/Red Note.json', {encoding: 'utf8', flag: 'r'}))
            .to.be.eql(
                '{\n\t"title": "Red Note",' +
                '\n\t"body": "This is a EDIT",' +
                '\n\t"color": "Red"' +
                '\n}');
        user.editNote(redNote);
      });
    });
    describe('Remove Note method', () => {
      user.addNote(greenNote);
      expect(fs.existsSync('./database/user/Green Note.json')).to.be.true;
      user.removeNote(greenNote);
      it('Green note must be deleted', () => {
        expect(fs.existsSync('./database/user/Green Note.json')).to.be.false;
      });
    });
  });
});
