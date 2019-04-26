const postgres = require('pg');
const cassandra = require('cassandra-driver');

// postgres
const dbPostgres = new postgres.Client({
  host: 'localhost',
  user: 'postgres',
  database: 'goodreads'
});

dbPostgres.connect((err, client) => {
  if (err) {
    throw err;
  } else {
    console.log(`Connected to database : ${dbPostgres.database}`);
  }
});

// cassandra
const dbCassandra = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'goodreads'
});

dbCassandra.connect(function(err, results) {
  console.log('Connected to keyspace : goodreads');
});

module.exports = {
  dbPostgres,
  dbCassandra
};
