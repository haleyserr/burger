DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INTEGER(9) AUTO_INCREMENT NOT NULL
  , burger_name VARCHAR(250) NOT NULL
  , devoured BOOLEAN NOT NULL DEFAULT false
  , PRIMARY KEY ( id ) 
);