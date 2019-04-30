const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const db = require('../database/index');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const DB = require('../database/db');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/public')));

// app.all('/books/:id', async (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/public/index.html'));
// });

app.all('/books/:id', async (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// get a record from bookInfo - Postgres for testing
// console.time("timing query");

// app.get('/postgres', function(req, res) {
//   const time = Date.now();

//   var queryString = `SELECT * FROM bookInfo WHERE id  =  9999999`;
//   DB.dbPostgres.query(queryString, function(err, results) {
//     if (err) {
//       console.error('ERROR');
//       throw err;
//     }
//     console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
//     console.log(results.rows);
//     console.log(queryString);
//     console.log(`total query time was ${Date.now() - time}ms`);
//     res.send(results);
//   });
// });

// GET/:id
app.get('/postgres/:id/info', function(req, res) {
  const id = req.params.id;
  console.log(req.params.id, 'id');

  const time = Date.now();

  var queryString = `SELECT * FROM bookInfo WHERE id  =  $1`;
  DB.dbPostgres.query(queryString, [id], function(err, results) {
    if (err) {
      console.error('ERROR');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
    console.log(results.rows);
    console.log(queryString);
    console.log(`total query time was ${Date.now() - time}ms`);
    res.send(results);
  });
});

// // POST
// app.post('/postgres/info', function(req, res) {
//   console.log(req.body, 'body');
//   const {
//     id,
//     title,
//     author,
//     description,
//     num_reviews,
//     num_ratings,
//     ratings_star,
//     image
//   } = req.body;

//   const time = Date.now();

//   var queryString = `INSERT INTO bookInfo (id, title, author, description, num_reviews, num_ratings, ratings_star, image) VALUES  ($1, $2, $3, $4, $5, $6, $7, $8)`;
//   DB.dbPostgres.query(
//     queryString,
//     [id, title, author, description, num_reviews, num_ratings, ratings_star, image],
//     function(err, results) {
//       if (err) {
//         console.error('ERROR');
//         throw err;
//       }
//       console.log(`SUCCESS : Inserted  records into  table : bookInfo `);
//       console.log(results.rows[0]);
//       console.log(queryString);
//       console.log(`total query time was ${Date.now() - time}ms`);
//       res.send(results);
//     }
//   );
// });

// //PUT/:id
// app.put('/postgres/:id/info', function(req, res) {
//   const id = parseInt(req.params.id);
//   console.log(id, 'id');
//   console.log(req.body, 'body');

//   const { title, author, description, num_reviews, num_ratings, ratings_star, image } = req.body;

//   const time = Date.now();

//   var queryString = `UPDATE bookInfo SET title = $, author = $3, description = $4, num_reviews = $5, num_ratings = $6, ratings_star = $7, image = $8 WHERE id = $1`;
//   DB.dbPostgres.query(
//     queryString,
//     [req.params.id, title, author, description, num_reviews, num_ratings, ratings_star, image],
//     function(err, results) {
//       if (err) {
//         console.error('ERROR');
//         throw err;
//       }
//       console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
//       console.log(results.rows);
//       console.log(queryString);
//       console.log(`total query time was ${Date.now() - time}ms`);
//       res.send(results);
//     }
//   );
// });

// //DELETE/:id
// app.delete('/postgres/:id/info', function(req, res) {
//   const id = parseInt(req.params.id);
//   const time = Date.now();

//   var queryString = `DELETE FROM bookInfo WHERE id = $1`;
//   DB.dbPostgres.query(queryString, [id], function(err, results) {
//     if (err) {
//       console.error('ERROR');
//       throw err;
//     }
//     console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
//     console.log(results.rows);
//     console.log(queryString);
//     console.log(`total query time was ${Date.now() - time}ms`);
//     res.send(results);
//   });
// });

// app.get('/booksTest/cassandra', function(req, res) {
//   const time = Date.now();

//   var queryString = 'SELECT * FROM goodreads.bookInfo where id = 9999999';
//   DB.dbCassandra.execute(queryString, [], function(err, results) {
//     if (err) {
//       console.error('ERROR');
//       throw err;
//     }
//     console.log(`total query time was ${Date.now() - time}ms`);
//     console.log(`SUCCESS : Retrieved records from   keyspace : goodreads `);
//     console.log(results.rows);
//     // res.send(results);
//   });
// });

// ============== REPLACEMENTS  ==============================

// app.get('/books/:id/info', async (req, res) => {
//   const id = req.params.id;
//   if (!/^\d+$/.test(id)) return res.status(422).json();

//   try {
//     const rows = await db.getBookInfo(id);
//     if (rows && rows.length) {
//       res.json(rows[0]);
//     } else {
//       res.status(404).json({ error: 'no data' });
//     }
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

app.get('/books/:id/info', function(req, res) {
  const id = req.params.id;
  console.log(req.params.id, 'id');

  const time = Date.now();

  var queryString = `SELECT id, title, author, description FROM bookInfo WHERE id  =  $1`;
  DB.dbPostgres.query(queryString, [id], function(err, results) {
    if (err) {
      console.error('ERROR');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
    console.log(results.rows);
    console.log(queryString);
    console.log(`total query time was ${Date.now() - time}ms`);
    res.send(results.rows);
  });
});
// ==============

// app.get('/books/:id/info/users', async (req, res) => {
//   let id = req.params.id;
//   try {
//     if (!/^\d+$/.test(id)) {
//       res.status(404).json();
//     } else {
//       const rows = await db.getUserInfo(id);
//       res.json(rows);
//     }
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

app.get('/books/:id/info/users', function(req, res) {
  const id = req.params.id;
  console.log(req.params.id, 'id');

  const time = Date.now();

  var queryString = `SELECT id, email, bookInfo_id FROM users WHERE id  =  $1`;
  DB.dbPostgres.query(queryString, [id], function(err, results) {
    if (err) {
      console.error('ERROR');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
    console.log(results.rows);
    console.log(queryString);
    console.log(`total query time was ${Date.now() - time}ms`);
    res.send(results.rows);
  });
});
// ==============
// app.get('/books/:id/info/image', async (req, res) => {
//   let id = parseInt(req.params.id);
//   if (!/^\d+$/.test(id)) {
//     return res.status(404).json();
//   }

//   try {
//     const rows = await db.getBookImage(id);
//     res.json(rows[0]);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

app.get('/books/:id/info/image', function(req, res) {
  const id = req.params.id;
  console.log(req.params.id, 'id');

  const time = Date.now();

  var queryString = `SELECT id, id as bookInfo_id, image FROM bookInfo WHERE id  =  $1`;
  DB.dbPostgres.query(queryString, [id], function(err, results) {
    if (err) {
      console.error('ERROR');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
    console.log(results.rows);
    console.log(queryString);
    console.log(`total query time was ${Date.now() - time}ms`);
    res.send(results.rows);
  });
});
// ==============
// app.get('/books/:id/info/ratings', async (req, res) => {
//   const id = req.params.id;

//   if (!/^\d+$/.test(id)) {
//     return res.status(404).json();
//   }

//   try {
//     const rows = await db.getRatings(id);
//     res.json(rows);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

app.get('/books/:id/info/ratings', function(req, res) {
  const id = req.params.id;
  console.log(req.params.id, 'id');

  const time = Date.now();

  var queryString = `SELECT bookInfo.id, users.bookInfo_id, users.id as user_id, num_ratings as rating  FROM bookInfo JOIN users ON users.id = bookInfo.id WHERE bookInfo.id = $1`;
  DB.dbPostgres.query(queryString, [id], function(err, results) {
    if (err) {
      console.error('ERROR');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
    console.log(results.rows);
    console.log(queryString);
    console.log(`total query time was ${Date.now() - time}ms`);
    res.send(results.rows);
  });
});
// ==============

// app.get('/books/:id/info/reviews', async (req, res) => {
//   const id = req.params.id;

//   if (!/^\d+$/.test(id)) {
//     return res.status(404).json();
//   }

//   try {
//     const rows = await db.getReviews(id);

//     res.json(rows);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

app.get('/books/:id/info/reviews', function(req, res) {
  const id = req.params.id;
  console.log(req.params.id, 'id');

  const time = Date.now();

  var queryString = `SELECT id, id as bookInfo, description as review FROM bookInfo WHERE id = $1`;
  DB.dbPostgres.query(queryString, [id], function(err, results) {
    if (err) {
      console.error('ERROR');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
    console.log(results.rows);
    console.log(queryString);
    console.log(`total query time was ${Date.now() - time}ms`);
    res.send(results.rows);
  });
});
// ==============

// app.put('/books/:id/info/users/:userId/readStatus', async (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const userId = parseInt(req.params.userId, 10);
//   const { status } = req.body;
//   if (!/^\d+$/.test(id) || !/^\d+$/.test(userId)) {
//     return res.status(404).json();
//   }

//   try {
//     const rows = await db.getReadStatus(id, userId);
//     if (rows[0]) {
//       await db.updateReadStatus(id, userId, status);
//     } else {
//       await db.insertReadStatus(id, userId, status);
//     }

//     const data = await db.getReadStatus(id, userId);
//     return res.json({
//       data: data[0]
//     });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// app.put('/books/:id/info/users/:userId/readStatus', function(req, res) {
//   const id = req.params.id;
//   console.log(req.params.id, 'id');

//   const time = Date.now();

//   var queryString = `SELECT * FROM readStatus WHERE id = $1 AND bookInfo_id  =  $2`;
//   DB.dbPostgres.query(queryString, [id, user_id], function(err, results) {
//     if (err) {
//       console.error('ERROR');
//       throw err;
//     }
//     console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
//     console.log(results.rows);
//     console.log(queryString);
//     console.log(`total query time was ${Date.now() - time}ms`);
//     res.send(results.rows);
//   });
// });

// ==============

// app.get('/books/:id/info/users/:userId/readStatus', async (req, res) => {
//   const id = req.params.id;
//   const userId = req.params.userId;

//   if (!/^\d+$/.test(id) || !/^\d+$/.test(userId)) {
//     return res.status(404).json();
//   }
//   try {
//     const rows = await db.getReadStatus(id, userId);

//     return res.json({
//       data: rows[0] || ''
//     });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

app.get('/books/:id/info/users/:userId/readStatus', function(req, res) {
  const id = req.params.id;
  const userId = req.params.userId;

  console.log(req.params.id, 'id');

  const time = Date.now();

  var queryString = `SELECT * FROM readStatus WHERE user_id = $1`;

  // var queryString = `SELECT * FROM bookInfo WHERE id  =  $1`;
  DB.dbPostgres.query(queryString, [id], function(err, results) {
    if (err) {
      console.error('ERROR');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : bookInfo `);
    console.log(results.rows);
    console.log(queryString);
    console.log(`total query time was ${Date.now() - time}ms`);
    res.send(results);
  });
});

//=====================================================================
// // Adding a shelf
// app.post('/users/:userId/shelf', async (req, res) => {
//   const { shelfName } = req.body;
//   const userId = req.params.userId;

//   if(!/^\d+$/.test(userId)) {
//     return res.status(404).json();
//   }

//   if(!shelfName || typeof shelfName !== 'string')
//     return res.status(422).json();

//   try{
//     await db.insertShelf(shelfName, userId);
//     res.json({ success: true })

//   } catch(e){
//     res.status(500).json({ error: e.message })
//   }
// });

// // Adding a shelf to bookShelf
// app.post('/books/:id/inusers/:userId/shelf/:shelfId', async (req, res) => {
//   const { id, shelfId, userId } = req.params;

//   if(!/^\d+$/.test(id) || !/^\d+$/.test(shelfId) || !/^\d+$/.test(userId)) {
//     return res.status(404).json();
//   }

//   try{
//     await db.insertBookshelf(id, shelfId);
//     res.json({ success: true })

//   } catch(e){
//     res.status(500).json({ error: e.message })
//   }
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
