\c restaurants_db

DELETE FROM users;
DELETE FROM restaurants;
DELETE FROM categories;

INSERT INTO users (username, password_digest)
VALUES
('ginnygu', 'password'),
('blizabethbun', 'password');

INSERT INTO restaurants (name, price_point, addresses, user_id)
VALUES
('Tara Japanese cuisine', '3' , '25109 Northern Blvd, Little Neck, NY 11362', '1'),
('The Boil', '2', '139 Chrystie St, New York, NY 10002', '2'),
('Joju', '1', '83-25 Broadway, Elmhurst, NY 11373', '1');


INSERT INTO categories (name)
VALUES
('Japanese'),
('Chinese'),
('Italian'),
('Korean'),
('French'),
('American'),
('Greek'),
('Fusion'),
('Vietnamese'),
('Thai'),
('Buffet'),
('Kosher'),
('Comfort Food'),
('Cajun'),
('Seafood'),
('Vegetarian');

INSERT INTO res_cat (res_id, cat_id)
VALUES
('1', '1'),
('2', '14'),
('2', '15'),
('3', '9'),
('3', '8');

