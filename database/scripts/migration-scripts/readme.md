# Database / Scripts / Migrations

> Scripts t manage database schema and data migrations

-   Purpose: Apply changes to the database schema (e.g., adding new columns, renaming tables, modifying data types).
-   Use Case: To maintain version control of the database schema as the application evolves.
-   Tools: ORM-based migration tools (e.g., Sequelize, TypeORM for Node.js; ActiveRecord for Rails; Alembic for Python) or manual SQL scripts.
-   Example: A migration to add a new column birthdate to the users table.

```sql
ALTER TABLE users ADD COLUMN birthdate DATE;
```
