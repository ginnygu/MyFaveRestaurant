DROP TABLE IF EXISTS res_cat;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS categories;

CREATE TABLE restaurants (
                id SERIAL PRIMARY KEY,
          res_name VARCHAR(255),
       price_point INT,
         addresses text,
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
