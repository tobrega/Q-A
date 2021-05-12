DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS photos;

CREATE TABLE questions (
  id INT PRIMARY KEY,
  product_id INT,
  body VARCHAR(255) NOT NULL,
  date_written DATE,
  asker_name VARCHAR(55) NOT NULL,
  asker_email VARCHAR(55),
  reported BOOLEAN NOT NULL,
  helpfulness INT
);

CREATE TABLE answers (
  id INT PRIMARY KEY,
  question_id INT,
  body VARCHAR(255) NOT NULL,
  date_written DATE,
  answerer_name VARCHAR(55) NOT NULL,
  answerer_email VARCHAR(55),
  reported BOOLEAN NOT NULL,
  helpfulness INT
);

CREATE TABLE answers_photos (
id INT PRIMARY KEY,
answer_id INT,
url VARCHAR(255)
);

COPY questions FROM '/Users/gea/Desktop/HR/hr-sea16/SDC/Catwalk-QA/data/cleaned/questionsCleaned.csv' WITH delimiter ',' NULL AS 'null' csv header;
COPY answers FROM '/Users/gea/Desktop/HR/hr-sea16/SDC/Catwalk-QA/data/cleaned/answersCleaned.csv' WITH delimiter ',' NULL AS 'null' csv header;
COPY answers_photos FROM '/Users/gea/Desktop/HR/hr-sea16/SDC/Catwalk-QA/data/cleaned/answers_photosCleaned.csv' WITH delimiter ',' NULL AS 'null' csv header;

