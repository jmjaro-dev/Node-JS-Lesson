// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
// const fs = require('fs');



// Custom Yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler:  _ => console.log('Removing a note')
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler:  _ => console.log('Listing out all notes')
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler:  _ => console.log('Reading a note')
});

console.log(yargs.argv);

// const msg = getNotes();
// const greenMsg = chalk.green.inverse.bold('Success');
// const redMsg = chalk.bgRed.bold('Error');
// const yellowMsg = chalk.bgYellow.bold('Warning');

// FILE SYSTEM COMMAND LINE ARGUMENTS
// console.log(process.argv);
// const command = process.argv[2];

// if(command === 'add') {
//   console.log(chalk.green.inverse.bold('Adding note'));
// } else if('remove') {
//   console.log(chalk.red.inverse.bold('Removing note'));
// } 

// // VALIDATOR
// console.log(validator.isURL('www.facebook.com'));
// console.log(validator.isEmail('foo@gmail.com'));

// // CHALK
// console.log(greenMsg);
// console.log(redMsg);
// console.log(yellowMsg);

// // fs.writeFileSync
// fs.writeFileSync('notes.txt', 'My name is Mark Jisu');

// // fs.appendFileSync
// fs.appendFileSync('notes.txt', 'ako talaga ung ng post sa mga ka PD');