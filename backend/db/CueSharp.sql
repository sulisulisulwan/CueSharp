DROP DATABASE IF EXISTS CueSharp;
CREATE DATABASE CueSharp;
USE CueSharp;

CREATE TABLE Users (
  userID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY (userID)
);

CREATE TABLE HighScores (
  scoreID INT NOT NULL AUTO_INCREMENT,
  userID INT NOT NULL,
  PRIMARY KEY (scoreID),
  FOREIGN KEY (userID) REFERENCES Users (userID)
);



