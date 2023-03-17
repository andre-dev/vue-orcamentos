// const { Person } = require("./person");

const dotenv = require("dotenv");
dotenv.config();

//Sempre deve ficar após o dotenv
const connectToDatabase = require("./src/database/connect");
connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");

// const person = new Person("André ");
//console.log(person.sayMyName());
