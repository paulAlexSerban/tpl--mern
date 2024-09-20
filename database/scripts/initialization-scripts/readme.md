# Database / Scripts / Initialization/Setup Scripts

-   Purpose: Set up the database schema and initial configuration for new environments.
-   Use Case: Used when setting up development, testing, or production environments from scratch.
-   Example: A script that creates tables, defines relationships, and sets up constraints and indexes.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE
);
```
