\c connection_db

DROP TABLE IF EXISTS test_table;
DROP TABLE IF EXISTS user_table;

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
