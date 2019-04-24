const postgres = require('pg');
const db = require('../database/db');

// var db = new postgres.Client({
//   host: 'localhost',
//   user: 'postgres',
//   database: 'goodreads'
// });

// db.connect((err, client) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(`Connected to database :${db.database}`);
//   }
// });

// DELETE tables======================================================
var queryString = `DROP TABLE IF EXISTS bookInfo`;
db.query(queryString, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`DROPPED TABLE bookInfo`);
    // db.end();
  }
});

var queryString = `DROP TABLE IF EXISTS readStatus`;
db.query(queryString, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`DROPPED TABLE readStatus`);
    // db.end();
  }
});

var queryString = `DROP TABLE IF EXISTS users`;
db.query(queryString, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`DROPPED TABLE users`);
    // db.end();
  }
});

createTables = {
  bookInfo: `
          CREATE TABLE IF NOT EXISTS bookInfo (
            id  SERIAL PRIMARY KEY ,
            title VARCHAR(150) NOT NULL,
            author VARCHAR (100) NOT NULL,
            description VARCHAR (500) NOT NULL,
            num_reviews INTEGER  NOT NULL,
            num_ratings INTEGER  NOT NULL,
            ratings_star INTEGER  NOT NULL,
            image VARCHAR(100) NOT NULL
          );`,
  users: `
          CREATE TABLE IF NOT EXISTS users (
            id SERIAL  PRIMARY KEY,
            email  VARCHAR(100) NOT NULL,
            bookInfo_id REAL NOT NULL
          );`,
  readStatus: `
          CREATE TABLE IF NOT EXISTS readStatus (
            id SERIAL  PRIMARY KEY,
            bookInfo_id REAL NOT NULL,
            user_id VARCHAR(100) NOT NULL,
            status REAL NOT NULL
        );`
};

// CREATE TABLES  ===========================================
db.query(createTables.bookInfo, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`CREATED TABLE bookInfo`);
    // db.end();
  }
});

db.query(createTables.users, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`CREATED TABLE users`);
    // db.end();
  }
});

db.query(createTables.readStatus, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`CREATED TABLE readStatus`);
    // db.end();
  }
});

// console.time("timing query");
// // const time = Date.now();

// var queryString = `SELECT * FROM bookInfo WHERE id  =  5000000`;
// db.query(queryString, (err, results) => {
//   if (err) {
//     console.error("ERROR");
//   } else {
//     console.log(results.rows);
//   }
// });

// console.log(queryString);
// // console.log(`total query time was ${Date.now() - time}ms`);
// console.timeEnd("timing query");

module.exports = db;
