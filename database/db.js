const postgres = require('pg');

var db = new postgres.Client({
  host: 'localhost',
  user: 'postgres',
  database: 'goodreads'
});

db.connect((err, client) => {
  if (err) {
    throw err;
  } else {
    console.log(`Connected to database :${db.database}`);
  }
});

module.exports = db;
