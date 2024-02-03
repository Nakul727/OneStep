In client directory:

`npm install`
`npm run start` to start frontend \
`npm run format` to format code

In server directory: 

`npm install`
`npm run start` to start backend server \
`npm run format` to format code

Database:

\du to check users postgres users
\dt to check tables is db

```sql

CREATE DATABASE OneStep;

CREATE TABLE Users (
    id          SERIAL PRIMARY KEY,
    
    name        VARCHAR(25) NOT NULL,
    email       VARCHAR(100) NOT NULL,
    password    VARCHAR(72) NOT NULL
);

CREATE TABLE habits (
  id            SERIAL PRIMARY KEY,

  habit_name    VARCHAR(255) NOT NULL,
  start_date    DATE NOT NULL,
  end_date      DATE NOT NULL,
  completed     BOOLEAN DEFAULT false
);

CREATE TABLE tasks (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(255) NOT NULL,
  message       TEXT
);

```