const fs = require('fs');

// create a databuffer
const dataBuffer = fs.readFileSync('1-json.json');
// converts a databuffer to STRING
const dataJSON = dataBuffer.toString();
// converts databuffer string to OBJECT
const user = JSON.parse(dataJSON);
// sets the name property of user
user.name = 'Mark Jitsu';
// sets the age property of user
user.age = 22;
// converts user OBJECT to JSON STRING
const userJSON = JSON.stringify(user);

console.log(userJSON);