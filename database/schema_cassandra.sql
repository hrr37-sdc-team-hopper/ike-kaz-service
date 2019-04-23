-- DROP DATABASE IF EXISTS goodreads;

-- CREATE DATABASE goodreads;

-- \c  goodreads;

CREATE TABLE IF NOT EXISTS bookInfo (

  id  SERIAL PRIMARY KEY ,
  title VARCHAR(40) NOT NULL,
  author VARCHAR (40) NOT NULL,
  description VARCHAR (300) NOT NULL,
  num_reviews INTEGER  NOT NULL,
  num_ratings INTEGER  NOT NULL,
  ratings_star INTEGER  NOT NULL,
  image VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS users (

  id SERIAL  PRIMARY KEY,
  email  VARCHAR(40) NOT NULL,
  bookInfo_id INTEGER NOT NULL
);


CREATE TABLE IF NOT EXISTS readStatus (

  id SERIAL  PRIMARY KEY,
  bookInfo_id INTEGER NOT NULL,
  user_id VARCHAR(50) NOT NULL,
  status INTEGER NOT NULL
);
