DROP TABLE IF EXISTS res_cat;
DROP TABLE IF EXISTS dislikes;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;



CREATE TABLE users (
                 id SERIAL PRIMARY KEY,
           username VARCHAR(255) UNIQUE NOT NULL,
              email VARCHAR(255) NOT NULL,
    password_digest VARCHAR(255) NOT NULL,
       date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON users (username);

CREATE TABLE restaurants (
                id SERIAL PRIMARY KEY,
          res_name VARCHAR(255),
       price_point INT,
         addresses text,
           user_id INT REFERENCES users(id) ON DELETE CASCADE,
      date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON restaurants (res_name);
CREATE INDEX ON restaurants (price_point);

CREATE TABLE categories (
                id SERIAL PRIMARY KEY,
          cat_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE INDEX ON categories (cat_name);

CREATE TABLE res_cat (
                id SERIAL PRIMARY KEY,
            res_id INT REFERENCES restaurants (id) ON DELETE CASCADE,
            cat_id INT REFERENCES categories (id) ON DELETE CASCADE

);

CREATE TABLE likes (
             id SERIAL PRIMARY KEY,
         res_id INT REFERENCES restaurants (id) ON DELETE CASCADE,
        user_id INT REFERENCES users (id) ON DELETE CASCADE


);

CREATE TABLE dislikes (
             id SERIAL PRIMARY KEY,
         res_id INT REFERENCES restaurants (id) ON DELETE CASCADE,
        user_id INT REFERENCES users (id) ON DELETE CASCADE
);