-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS character_db;
-- Creates the database --
CREATE DATABASE character_db;

USE character_db;

-- Creating the table character_db -- 

CREATE TABLE characters (
  id int NOT NULL AUTO_INCREMENT,
  character_name VARCHAR(200),
  PRIMARY KEY (id)
);
