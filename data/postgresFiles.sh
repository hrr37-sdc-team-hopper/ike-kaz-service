
sudo -u postgres psql -d goodreads

echo "Processing readStatus..";
COPY readStatus (bookInfo_id, user_id, status)
FROM '/tmp/postgres/readStatus.csv' DELIMITER ',' CSV HEADER;

echo "Processing users..";
COPY users (email, bookInfo_id)
FROM '/tmp/postgres/users.csv' DELIMITER ',' CSV HEADER;

echo "Processing bookInfo..";
COPY bookInfo (title, author, description, num_reviews, num_ratings, ratings_star,image)
FROM '/tmp/postgres/bookInfo.csv' DELIMITER ',' CSV HEADER;



