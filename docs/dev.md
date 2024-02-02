CREATE DATABASE OneStep;

\du to check users postgres users
\dt to check tables is db

```sql
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(72) NOT NULL
);
```