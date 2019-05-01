
sudo -u postgres psql -d goodreads

echo "Processing image..";
COPY image (bookInfo_id, image)
FROM '/tmp/postgres/image.csv' DELIMITER ',' CSV HEADER;

echo "Processing ratings..";
COPY ratings (bookInfo_id, user_id, rating)
FROM '/tmp/postgres/ratings.csv' DELIMITER ',' CSV HEADER;

echo "Processing reviews..";
COPY reviews (bookInfo_id, review)
FROM '/tmp/postgres/reviews.csv' DELIMITER ',' CSV HEADER;

echo "Processing readStatus..";
COPY readStatus (bookInfo_id, user_id, status)
FROM '/tmp/postgres/readStatus.csv' DELIMITER ',' CSV HEADER;

echo "Processing users..";
COPY users (email, bookInfo_id)
FROM '/tmp/postgres/users.csv' DELIMITER ',' CSV HEADER;

echo "Processing bookInfo..";
COPY bookInfo (title, author, description)
FROM '/tmp/postgres/bookInfo.csv' DELIMITER ',' CSV HEADER;


echo "Processing Index..";
CREATE INDEX idx_title_bookInfo ON bookInfo(title);
CREATE INDEX idx_bookInfo_image ON image(bookinfo_id);
CREATE INDEX idx_bookInfo_users ON users(bookinfo_id);
CREATE INDEX idx_bookInfo_ratings ON ratings(bookinfo_id);
CREATE INDEX idx_bookInfo_reviews ON reviews(bookinfo_id);
CREATE INDEX idx_bookInfo_readStatus ON readStatus(bookinfo_id);
CREATE INDEX idx_user_id_readStatus ON readStatus(user_id);