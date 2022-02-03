CREATE DATABASE todopern;

CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);