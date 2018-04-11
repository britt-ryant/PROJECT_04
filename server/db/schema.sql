\c connection_db

DROP TABLE IF EXISTS test_table;
DROP TABLE IF EXISTS user_table;
DROP TABLE IF EXISTS user_information;
DROP TABLE IF EXISTS like_table;

CREATE TABLE test_table (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  expression VARCHAR(255)
);

CREATE TABLE user_table (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE user_information (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  image VARCHAR(255),
  gender VARCHAR(255),
  seeking VARCHAR(255),
  description VARCHAR(255),
  location_lat INTEGER,
  location_lon INTEGER
);

CREATE TABLE like_table (
  like_sent INTEGER,
  like_received INTEGER
);
