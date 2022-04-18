import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/note';
import {User} from '../src/user';

const blueNote: Note = new Note('Blue Note', 'This is a blue note', 'Blue');
const redNote: Note = new Note('Red Note', 'This is a red note', 'Red');
const greenNote: Note = new Note('Green Note', 'This is a green note', 'Green');
const firstUser: User = new User('user', [blueNote, redNote]);

describe('User Class tests', () => {
  describe('User Class getters', () => {
    it('username getter', () => {
      expect(firstUser.name).to.be.eql('user');
    });
    it('Notes getter', () => {
      expect(firstUser.notes).to.be.eql([blueNote, redNote]);
    });
  });
  describe('User Class setters', () => {
    it('title setter', () => {
      firstUser.name = 'firstUser';
      expect(firstUser.name).to.be.eql('firstUser');
    });
    it('Notes setter', () => {
      firstUser.notes = [greenNote, blueNote];
      expect(firstUser.notes).to.be.eql([greenNote, blueNote]);
    });
  });
  describe('User Class methods', () => {
  });
});
