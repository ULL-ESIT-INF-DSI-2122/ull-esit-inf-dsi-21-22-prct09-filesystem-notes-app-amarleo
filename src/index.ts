import {Note, isNoteColor} from './note';
import {User} from './user';
import * as yargs from 'yargs';

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
    user: {
      describe: 'User owner',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' &&
      typeof argv.body === 'string' &&
      isNoteColor(argv.color) &&
      typeof argv.user === 'string') {
      const newNote = new Note(argv.title, argv.body, argv.color);
      const user = new User(argv.user);
      user.addNote(newNote);
    }
  },
});

yargs.command({
  command: 'list',
  describe: 'List all user notes',
  builder: {
    user: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      const user = new User(argv.user);
      user.listAllNotes();
    }
  },
});

yargs.command({
  command: 'read',
  describe: 'Read an user note',
  builder: {
    user: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' &&
    typeof argv.title === 'string') {
      const note = new Note(argv.title);
      const user = new User(argv.user);
      user.readNote(note);
    }
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove note from user',
  builder: {
    user: {
      describe: 'User Name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' &&
    typeof argv.title === 'string') {
      const note = new Note(argv.title);
      const user = new User(argv.user);
      user.removeNote(note);
    }
  },
});

yargs.command({
  command: 'edit',
  describe: 'Edit a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
    user: {
      describe: 'User owner',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' &&
      typeof argv.body === 'string' &&
      isNoteColor(argv.color) &&
      typeof argv.user === 'string') {
      const newNote = new Note(argv.title, argv.body, argv.color);
      const user = new User(argv.user);
      user.editNote(newNote);
    }
  },
});

yargs.parse();
