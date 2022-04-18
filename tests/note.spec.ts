import 'mocha';
import {expect} from 'chai';
import { Note } from '../src/note';

const firstNote: Note = new Note('Blue Note', 'This is a blue note', 'Blue');

describe('Note Class tests', () => {
  describe('Note Class getters', () => {
    it('Tittle getter', () => {
      expect(firstNote.tittle).to.be.eql('Blue Note');
    });
    it('Body getter', () => {
      expect(firstNote.body).to.be.eql('This is a blue note');
    });
    it('color getter', () => {
      expect(firstNote.color).to.be.eql('Blue');
    });
  });
  describe('Note Class setters', () => {
    it('Tittle setter', () => {
      firstNote.tittle = 'Red note';
      expect(firstNote.tittle).to.be.eql('Red note');
    });
    it('Body setter', () => {
      firstNote.body = 'This is a red note';
      expect(firstNote.body).to.be.eql('This is a red note');
    });
    it('color setter', () => {
      firstNote.color = 'Red';
      expect(firstNote).to.be.eql('Red');
      it('Notes must be red, green, blue or yellow', () => {
        expect(firstNote.color = 'Orange').to.throw('Color does not exist');
      });
    });
  });
  describe('Note Class methods', () => {
  });
});
