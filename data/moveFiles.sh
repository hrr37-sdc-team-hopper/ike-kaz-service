#!/bin/bash

echo "Move Data..";
sudo mkdir /tmp/data/
sudo cp ./data/*.csv  /tmp/data/

sudo -u postgres psql -d goodreads

echo "Processing readStatus..";
COPY readStatus (bookInfo_id, user_id, status)
FROM '/tmp/data/readStatus_0.csv' DELIMITER ',' CSV HEADER;

echo "Processing users..";
COPY users (id, email, bookInfo_id)
FROM '/tmp/data/users_0.csv' DELIMITER ',' CSV HEADER;

echo "Processing bookInfo..";
COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_0.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_1.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_2.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_3.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_4.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_5.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_6.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_7.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_8.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_9.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_10.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_11.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_12.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_13.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_14.csv' DELIMITER ',' CSV HEADER;

COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/data/bookInfo_15.csv' DELIMITER ',' CSV HEADER;




