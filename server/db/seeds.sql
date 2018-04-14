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
),(
  'Samantha',
  '1234'
),(
  'Jennifer',
  '1234'
),(
  'Frank',
  '1234'
),(
  'Lucy',
  '1234'
),(
  'Paula',
  '1234'
),(
  'Tiffany',
  '1234'
),(
  'Johnathan',
  '1234'
);

INSERT INTO user_information (user_id, image, gender, seeking, description, location_lat, location_lon) VALUES (
  1,
  'https://imgur.com/a/urU8l',
  'M',
  'F',
  'Generally pissed off, emotionally challenged, but fun for the evening!',
  10,
  20
),(
  2,
  'https://www.myajc.com/rf/image_lowres/Pub/p8/MyAJC/2017/11/28/Images/newsEngin.20134134_Lowery_Mike.jpg',
  'M',
  'F',
  'My name is Gerald',
  10,
  20
),(
  3,
  'https://vice-images.vice.com/images/content-images-crops/2016/06/24/why-are-cult-leaders-usually-men-and-their-followers-usually-young-women-body-image-1466780139-size_1000.jpg?output-quality=75',
  'F',
  'M',
  'I am the description for Samantha',
  10,
  20
),(
  4,
  'http://images6.fanpop.com/image/photos/37300000/Random-Girl-people-37325426-236-354.jpg',
  'F',
  'M',
  'I am the description for Jennifer',
  10,
  20
),(
  5,
  'http://www.designskilz.com/random-users/images/imageM13.jpg',
  'M',
  'F',
  'I am the description for Frank',
  10,
  20
),(
  6,
  'https://cdn.acidcow.com/pics/20130122/nice_girls_08.jpg',
  'F',
  'M',
  'I am the description for Lucy',
  10,
  20
),(
  7,
  'http://i57.tinypic.com/dnhuo4.jpg',
  'F',
  'M',
  'I am the description for Paula',
  10,
  20
),(
  8,
  'https://pbs.twimg.com/profile_images/972251679449079808/lvz3LL6W_400x400.jpg',
  'F',
  'M',
  'I am the description for Tiffany',
  10,
  20
),(
  9,
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eRtqgYsOdSxyvoEqs1Xp7_tOQdZ7Ieo5_AZ5GjhXrbPRf1pW',
  'M',
  'F',
  'I am the description for Johnathan',
  10,
  20
);
