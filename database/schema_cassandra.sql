DROP DATABASE IF EXISTS opentable_reviews;

CREATE DATABASE opentable_reviews;

USE opentable_reviews;

CREATE TABLE IF NOT EXISTS ratings_ambience (

  id INT NOT NULL AUTO_INCREMENT,
  restaurant_name VARCHAR(40) ,
  restaurant_rating FLOAT NOT NULL,
  restaurant_food_rating FLOAT NOT NULL,
  restaurant_service_rating FLOAT NOT NULL,
  restaurant_ambience_rating FLOAT NOT NULL,
  restaurant_value_rating FLOAT NOT NULL,
  restaurant_no_of_reviews INT NOT NULL,
  noise_level INT NOT NULL,
  percent_recommend INT NOT NULL,
  PRIMARY KEY (id)
);


-- CREATE TABLE IF NOT EXISTS ratings_ambience (

--   id INT NOT NULL AUTO_INCREMENT,
--   restaurant_name VARCHAR(40) ,
--   restaurant_rating FLOAT NOT NULL,
--   food_rating FLOAT NOT NULL,
--   service_rating FLOAT NOT NULL,
--   ambience_rating FLOAT NOT NULL,
--   value_rating FLOAT NOT NULL,
--   restaurant_no_of_reviews INT NOT NULL,
--   noise_level INT NOT NULL,
--   percent_recommend INT NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE IF NOT EXISTS reviewer_info (

--   id INT NOT NULL AUTO_INCREMENT,
--   dined_at VARCHAR(10) NOT NULL,
--   reviewer_name VARCHAR(40) NOT NULL,
--   reviewer_city VARCHAR(40) NOT NULL,
--   no_of_reviews  INT NOT NULL,
--   reviewer_picture VARCHAR(100) NOT NULL,
--   reviewer_VIP VARCHAR(5) NOT NULL,
--   PRIMARY KEY (id)
-- );


-- CREATE TABLE IF NOT EXISTS reviews (

--   id INT NOT NULL AUTO_INCREMENT,
--   restaurant_id  INT NOT NULL,
--   review_id  INT NOT NULL,
--   reviews VARCHAR(500) NOT NULL,
--   PRIMARY KEY (id)
-- );

CREATE TABLE IF NOT EXISTS reviews (

  id INT NOT NULL AUTO_INCREMENT,

  overall_rating FLOAT NOT NULL,
  food_rating FLOAT NOT NULL,
  service_rating FLOAT NOT NULL,
  ambience_rating FLOAT NOT NULL,
  value_rating FLOAT NOT NULL,

  dined_at VARCHAR(10) NOT NULL,
  reviewer_name VARCHAR(40) NOT NULL,
  reviewer_city VARCHAR(40) NOT NULL,
  no_of_reviews  INT NOT NULL,
  reviewer_picture VARCHAR(100) NOT NULL,
  reviewer_VIP VARCHAR(5) NOT NULL,

  restaurant_id  INT NOT NULL,
  review_id  INT NOT NULL,
  reviews VARCHAR(500) NOT NULL,
  PRIMARY KEY (id)
);


-- INSERT INTO reviewer_info (id, amount, description, date) VALUES (1, -4.55, "EQUATOR", "2017-08-02");
-- INSERT INTO transactions (id, amount, description, date) VALUES (2, -9.19, "CHIPOTLE", "2017-08-02");


-- INSERT INTO reviewer_info (restaurant_id, dined_at, reviewer_name,reviewer_city ,no_of_reviews ,reviewer_picture , reviewer_VIP) VALUES (2, "2019-02-13", "Jayde_Shanahan28", "Horaceborough",975, "https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg", 'false');
