### **Data Manipulation Scripts**

#### **Purpose**

Data manipulation scripts are used to interact with, modify, and manage the data stored in a database. This includes creating, reading, updating, and deleting records (commonly referred to as CRUD operations). These scripts automate tasks like inserting new data, updating existing records, or cleaning up incorrect data. They are essential for maintaining data integrity, performing bulk operations, and handling changes programmatically.

#### **Use Cases**

-   **Bulk Data Updates**: When you need to apply changes to large sets of data based on specific conditions (e.g., updating the status of users who haven’t logged in for a year).
-   **Data Cleanup**: Removing or fixing incorrect, outdated, or inconsistent data entries (e.g., cleaning up invalid email addresses or removing orphaned records).
-   **Data Migration**: Moving data from one table or system to another (e.g., changing the format of a field or transferring data between environments).
-   **Scheduled Data Operations**: Automating regular tasks such as monthly report generation, recalculating statistics, or resetting data values.
-   **Business Logic Enforcement**: Applying business rules to the data in the database (e.g., setting default values for missing fields).

#### **Examples**

1. **Updating a Specific Field Across Many Records**

    - **Purpose**: Change the `status` of all orders that have been unfulfilled for more than 30 days to "expired."
    - **Script Example**:
        ```sql
        UPDATE orders
        SET status = 'expired'
        WHERE order_date < NOW() - INTERVAL '30 days' AND status = 'unfulfilled';
        ```
    - **Use Case**: To ensure that old unfulfilled orders are marked as expired automatically.

2. **Deleting Inactive Users**

    - **Purpose**: Remove users who haven’t logged in for over 2 years to free up database space and improve performance.
    - **Script Example**:
        ```sql
        DELETE FROM users
        WHERE last_login < NOW() - INTERVAL '2 years';
        ```
    - **Use Case**: Data cleanup to remove inactive users and optimize database storage.

3. **Recalculate User Scores**

    - **Purpose**: Update user scores based on new ranking logic.
    - **Script Example**:
        ```javascript
        const users = db.collection('users').find({});
        users.forEach((user) => {
            let newScore = calculateNewScore(user.activities);
            db.collection('users').update({ _id: user._id }, { $set: { score: newScore } });
        });
        ```
    - **Use Case**: To update user scores when the business logic changes for calculating those scores.

4. **Fix Incorrectly Formatted Data**
    - **Purpose**: Fix phone numbers that were stored without country codes by prepending a specific country code.
    - **Script Example**:
        ```sql
        UPDATE users
        SET phone_number = CONCAT('+1', phone_number)
        WHERE CHAR_LENGTH(phone_number) = 10;
        ```
    - **Use Case**: Data cleanup to ensure all phone numbers are standardized in the database.

#### **Tools**

-   **Database Query Languages**:
    -   **SQL**: For relational databases like MySQL, PostgreSQL, and SQL Server (manipulation done through `UPDATE`, `DELETE`, `INSERT`, etc.).
    -   **NoSQL Query APIs**: For databases like MongoDB or DynamoDB (manipulation via scripts using their specific SDKs or drivers, such as `updateMany` or `scan`).
-   **Scripting Languages**:

    -   **Node.js**: Popular for writing scripts that interact with databases (e.g., using the DynamoDB SDK, MySQL client, or MongoDB client).
    -   **Python**: Frequently used for automation scripts, especially when working with ORMs like SQLAlchemy or directly interacting with databases using `psycopg2` for PostgreSQL or `PyMySQL` for MySQL.
    -   **Bash**: For simple automation tasks in UNIX environments, combining tools like `psql` (PostgreSQL CLI) or `mysql` CLI.

-   **Database Clients**:

    -   **AWS SDK**: For interacting with DynamoDB and other AWS services from Node.js, Python, etc.
    -   **MongoDB Compass**: Provides a visual way to manipulate MongoDB data.
    -   **MySQL Workbench / pgAdmin**: Visual tools for MySQL and PostgreSQL databases.

-   **ORMs (Object-Relational Mappers)**:
    -   **Sequelize (Node.js)**: For abstracting SQL queries and working with databases in an object-oriented way.
    -   **SQLAlchemy (Python)**: Provides a powerful toolkit for interacting with relational databases in Python.
    -   **ActiveRecord (Rails)**: Used for data manipulation in Ruby on Rails applications.

### Summary

-   **Purpose**: Modify and maintain database records through CRUD operations, enforcing data integrity and consistency.
-   **Use Case**: Apply bulk updates, clean data, enforce business rules, or migrate data across systems.
-   **Examples**: Update expired orders, delete inactive users, fix formatting issues, or recalculate scores.
-   **Tools**: SQL, NoSQL APIs, scripting languages like Node.js and Python, ORMs like Sequelize and SQLAlchemy, and database clients like MySQL Workbench.
