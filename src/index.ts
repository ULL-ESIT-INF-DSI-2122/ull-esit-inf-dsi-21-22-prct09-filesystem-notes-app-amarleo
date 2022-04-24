import {Note} from './note';
import {User} from './user';
import * as yargs from 'yargs';

function run() {
  yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      if (typeof argv.title === 'string') {
        // Required logic to add a new note
      }
    },
  });
}

run();
