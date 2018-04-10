\c connection_db

INSERT INTO test_table (name, expression) VALUES (
  'Ryan',
  'I am testing the connection of routing'
),(
  'Chris',
  'this is more test data'
);


INSERT INTO user_table (username, password) VALUES (
  'Brittryant',
  '1234'
),(
  'Gerald',
  '1234'
);

INSERT INTO user_information (user_id, gender, seeking, description, location_lat, location_lon) VALUES (
  1,
  'M',
  'F',
  'Generally pissed off, emotionally challenged, but fun for the evening!',
  10,
  20
)
