# Indexing and Performance Tuning Scripts

-   Purpose: Create or modify indexes and tune database performance by optimizing queries.
-   Use Case: Used to improve query performance by adding the right indexes or adjusting database configurations.
-   Example: A script that adds indexes to frequently queried columns to speed up read operations.

```sql
CREATE INDEX idx_email ON users(email);
```
