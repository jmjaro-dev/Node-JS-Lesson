const fs = require('fs');
const chalk = require('chalk');

const getNotes = _ => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();  // stores the data of loadNotes() into the notes variable
  console.log(notes);
  const duplicateNotes = notes.filter(note => note.title === title);  //  finds a duplicate note

  // checks if notes.json is empty
  if(duplicateNotes.length === 0) {
    // inserts the 'title' and 'body' to the notes ARRAY 
    notes.push({
      title,
      body
    });

    saveNotes(notes); // invokes saveNotes() function and with 'notes' as parameter
    console.log(chalk.green.inverse.bold('New note added.'));
  } else {
    // if title is already taken, then don't allow to add note
    console.log(chalk.green.inverse.bold('Note title taken.'));
  }

}

// loads the notes from notes.json file
const loadNotes = _ => {
  try {
    const dataBuffer = fs.readFileSync('notes.json'); // reads the notes.json file
    const dataJSON = dataBuffer.toString(); // converts notes.json to STRING
    return JSON.parse(dataJSON);  // converts dataJSON to OBJECT
  } catch(e) {
    return [];  // creates an empty ARRAY when file is empty
  }
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);   // converts notes to JSON STRING and store it to dataJSON
  fs.writeFileSync('notes.json', dataJSON); // writes the notes to notes.json file
  // debugger; - debugger
}

// export your module
module.exports = { 
  getNotes,
  addNote
}