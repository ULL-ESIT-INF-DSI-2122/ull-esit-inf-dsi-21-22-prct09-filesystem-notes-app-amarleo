import 'mocha';
import {expect} from 'chai';
import { Note } from '../src/note';

const firstNote: Note = new Note('Blue Note', 'This is a blue note', 'Blue');

describe('Note Class tests', () => {
  describe('Note Class getters', () => {
    it('title getter', () => {
      expect(firstNote.title).to.be.eql('Blue Note');
    });
    it('Body getter', () => {
      expect(firstNote.body).to.be.eql('This is a blue note');
    });
    it('color getter', () => {
      expect(firstNote.color).to.be.eql('Blue');
    });
  });
  describe('Note Class setters', () => {
    it('title setter', () => {
      firstNote.title = 'Red note';
      expect(firstNote.title).to.be.eql('Red note');
    });
    it('Body setter', () => {
      firstNote.body = 'This is a red note';
      expect(firstNote.body).to.be.eql('This is a red note');
    });
    it('color setter', () => {
      firstNote.color = 'Red';
      expect(firstNote.color).to.be.eql('Red');
    });
  });
  describe('Note Class methods', () => {
  });
});
