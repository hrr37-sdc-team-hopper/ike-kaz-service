const cassandra = require('cassandra-driver');
const db = require('../database/db');

const time = Date.now();

var queryString = 'SELECT * FROM goodreads.bookInfo where id = 9999999';
db.dbCassandra.execute(queryString, [], function(err, results) {
  if (err) {
    console.error('ERROR');
    throw err;
  } else {
    console.log(`SUCCESS : Retrieved records from  keyspace : goodreads `);
    console.log(results.rows);
    console.log(queryString);
    console.log(`total query time was ${Date.now() - time}ms`);
    // res.send(results);
  }
});
