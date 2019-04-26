

echo "Processing readStatus..";
COPY goodreads.readStatus (id, bookInfo_id, user_id, status)
FROM '/tmp/cassandra/readStatus.csv'  WITH DELIMITER=',' AND HEADER=FALSE;
# Starting copy of goodreads.readstatus with columns [id, bookinfo_id, user_id, status].
# Processed: 10000000 rows; Rate:   11960 rows/s; Avg. rate:   38674 rows/s
# 10000000 rows imported from 1 files in 4 minutes and 18.574 seconds (0 skipped).



echo "Processing users..";
COPY goodreads.users (id, email, bookInfo_id)
FROM '/tmp/cassandra/users.csv' WITH DELIMITER=',' AND HEADER=FALSE;
# Starting copy of goodreads.users with columns [id, email, bookinfo_id].
# Processed: 10000000 rows; Rate:   10605 rows/s; Avg. rate:   42648 rows/s
# 10000000 rows imported from 1 files in 3 minutes and 54.476 seconds (0 skipped).


echo "Processing bookInfo..";
COPY goodreads.bookInfo (id, title,author ,description ,num_reviews , num_ratings ,ratings_star, image) FROM '/tmp/cassandra/bookInfo.csv'WITH DELIMITER=',' AND HEADER=FALSE;
# Processed: 10993077 rows; Rate:   10219 rows/s; Avg. rate:   23315 rows/s
# 10993077 rows imported from 1 files in 7 minutes and 51.510 seconds (0 skipped).



# CREATE KEYSPACE IF NOT EXISTS goodreads WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

# USE goodreads;

# CREATE TABLE goodreads.bookInfo (
#         id int PRIMARY KEY,
#         title text,
#         author text,
#         description text,
#         num_reviews decimal,
#         num_ratings decimal,
#         ratings_star decimal,
#         image text
#    );

# CREATE TABLE goodreads.users (
#         id int PRIMARY KEY,
#         email text,
#         bookInfo_id decimal
#    );

# CREATE TABLE goodreads.readStatus (
#         id int PRIMARY KEY,
#         bookInfo_id decimal,
#         user_id text,
#         status decimal
#     );

# DROP TABLE bookinfo;
# DROP TABLE users;
# DROP TABLE readStatus;


# INSERT INTO goodreads.bookInfo (id, title,author ,description ,num_reviews , num_ratings ,ratings_star, image) VALUES (now(), 'The Book', 'Ike Okonkwo', 'The Badest Book',34, 56, 5,  'VOS');

# SELECT * FROM goodreads.bookInfo;

# ALLOW FILTERING - where


# COPY goodreads.bookInfo (now(), title,author ,description ,num_reviews , num_ratings ,ratings_star, image) FROM '/tmp/data/bookInfo_0.csv'WITH DELIMITER=',' AND HEADER=TRUE;
