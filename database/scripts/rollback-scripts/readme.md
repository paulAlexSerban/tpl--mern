# Database / Scripts / Rollback Scripts

-   Purpose: Undo or revert changes made by a migration or update.
-   Use Case: When something goes wrong with a schema change, and the database needs to be returned to its previous state.
-   Example: If a migration added a column birthdate and it caused issues, the rollback script would remove the column.

```sql
ALTER TABLE users DROP COLUMN birthdate;
```
