# Custom ORM (Object-Relational Mapping) Scripts

-   Purpose: Write scripts using ORM libraries to interact with databases in an object-oriented way.
-   Use Case: Developers use these to abstract direct SQL queries, allowing interactions with the database using programming languages like Python, JavaScript, Ruby, etc.
-   Example: A Python script using SQLAlchemy to create tables, query data, and seed initial records.

```python
new_user = User(name="John Doe", email="john@example.com")
session.add(new_user)
session.commit()
```
