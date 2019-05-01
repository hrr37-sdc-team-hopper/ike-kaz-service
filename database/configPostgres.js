const postgres = require('pg');
const db = require('../database/db');

// DELETE tables======================================================
var queryString = `DROP TABLE IF EXISTS bookInfo`;
db.dbPostgres.query(queryString, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`DROPPED TABLE bookInfo`);
    // db.end();
  }
});

var queryString = `DROP TABLE IF EXISTS image`;
db.dbPostgres.query(queryString, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`DROPPED TABLE image`);
    // db.end();
  }
});

var queryString = `DROP TABLE IF EXISTS users`;
db.dbPostgres.query(queryString, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`DROPPED TABLE users`);
    // db.end();
  }
});

var queryString = `DROP TABLE IF EXISTS ratings`;
db.dbPostgres.query(queryString, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`DROPPED TABLE ratings`);
    // db.end();
  }
});

var queryString = `DROP TABLE IF EXISTS reviews`;
db.dbPostgres.query(queryString, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`DROPPED TABLE reviews`);
    // db.end();
  }
});

var queryString = `DROP TABLE IF EXISTS readStatus`;
db.dbPostgres.query(queryString, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`DROPPED TABLE readStatus`);
    // db.end();
  }
});

createTables = {
  bookInfo: `
          CREATE TABLE IF NOT EXISTS bookInfo (
            id  SERIAL PRIMARY KEY ,
            title VARCHAR(150) NOT NULL,
            author VARCHAR (100) NOT NULL,
            description VARCHAR (500) NOT NULL
          );`,
  image: `
          CREATE TABLE IF NOT EXISTS image (
            id SERIAL  PRIMARY KEY,
            bookInfo_id REAL NOT NULL,
            image VARCHAR(100) NOT NULL
          );`,
  users: `
          CREATE TABLE IF NOT EXISTS users (
            id SERIAL  PRIMARY KEY,
            email  VARCHAR(100) NOT NULL,
            bookInfo_id REAL NOT NULL
          );`,
  ratings: `
          CREATE TABLE IF NOT EXISTS ratings (
            id SERIAL  PRIMARY KEY,
            bookInfo_id REAL NOT NULL,
            user_id INTEGER  NOT NULL,
            rating INTEGER  NOT NULL
          );`,
  reviews: `
          CREATE TABLE IF NOT EXISTS reviews (
            id SERIAL  PRIMARY KEY,
            bookInfo_id REAL NOT NULL,
            review  VARCHAR(900) NOT NULL
          );`,
  readStatus: `
          CREATE TABLE IF NOT EXISTS readStatus (
            id SERIAL  PRIMARY KEY,
            bookInfo_id REAL NOT NULL,
            user_id INTEGER NOT NULL,
            status REAL NOT NULL
        );`
};

// CREATE TABLES  ===========================================
db.dbPostgres.query(createTables.bookInfo, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`CREATED TABLE bookInfo`);
    // db.end();
  }
});

db.dbPostgres.query(createTables.image, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`CREATED TABLE image`);
    // db.end();
  }
});

db.dbPostgres.query(createTables.users, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`CREATED TABLE users`);
    // db.end();
  }
});

db.dbPostgres.query(createTables.ratings, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`CREATED TABLE ratings`);
    // db.end();
  }
});

db.dbPostgres.query(createTables.reviews, (err, results) => {
  if (err) {
    console.error('ERROR');
  } else {
    console.log(`CREATED TABLE reviews`);
    // db.end();
  }
});

db.dbPostgres.query(createTables.readStatus, (err, results) => {
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
