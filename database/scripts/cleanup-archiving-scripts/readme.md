# Database Cleanup/Archiving Scripts

-   Purpose: Remove old or unused data, archive it for long-term storage, or clean up temporary tables.
-   Use Case: To maintain database performance and storage efficiency.
-   Example: A script that deletes user activity logs older than 1 year.

```sql
DELETE FROM activity_logs WHERE activity_date < NOW() - INTERVAL '1 year';
```
