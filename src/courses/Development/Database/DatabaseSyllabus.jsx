import React from 'react'
import { TiTick } from "react-icons/ti";

const DatabaseSyllabus = () => {
  return (
    <div className="px-4 pt-10"> 
    <h1 className="font-bold text-2xl lg:text-3xl my-5">
    Detailed Course Outline
    </h1>
    <h2 className="font-bold text-xl lg:text-2xl my-5">
      Database
    </h2>
    <h2 className="font-bold text-xl lg:text-2xl my-5">
    Module 1: Introduction to Databases and RDBMS
    </h2>
    <ul>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Definition of Database and DBMS
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Database Models (Hierarchical, Network, Object-Oriented, Relational)
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Relational Database Management System (RDBMS) Concepts
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Tables, Rows, and Columns
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Primary Keys, Foreign Keys 
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick />  Relationships (One-to-One, One-to-Many, Many-to-Many)
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Constraints (NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT) 
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick />Advantages of RDBMS over Traditional File Systems 
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Introduction to **SQL** (Structured Query Language) 
      </li>
    </ul>
    <h2 className="font-bold text-xl lg:text-2xl my-5">
    Module 2: SQL Basics
    </h2>
    <ul>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Introduction to SQL 
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick />  DDL (Data Definition Language)
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> DML (Data Manipulation Language)
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick />  DCL (Data Control Language)
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> TCL (Transaction Control Language)
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick />  Understanding Database Objects (Tables, Views, Indexes, Sequences)
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> SQL Data Types
      </li>
    </ul>
    <h2 className="font-bold text-xl lg:text-2xl my-5">
    Module 3: Database Design and ER Model
    </h2>
    <ul>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Database Design Concepts 
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Entity-Relationship (ER) Model
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Entities, Attributes, Relationships
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Entity Sets and Relationship Sets
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Mapping Cardinalities
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Keys (Primary Key, Candidate Key, Composite Key)
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Converting ER Models to Relational Schemas
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> **Normalization**:  
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> Functional Dependencies
      </li>
      <li className="flex items-center gap-3 mb-2 text-gray-500">
        <TiTick /> 1NF, 2NF, 3NF, BCNF, and Denormalization
      </li>
    </ul>
    <h2 className="font-bold text-xl lg:text-2xl my-5">
  Module 4: SQL – Data Definition Language (DDL)
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Creating Databases
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Creating Tables with Constraints
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Modifying Tables (ALTER)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Dropping Tables and Databases
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Renaming Tables and Columns
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Data Types in MySQL (INT, VARCHAR, DATE, etc.)
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Module 5: SQL – Data Manipulation Language (DML)
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> INSERT Statement (Inserting Data into Tables)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> SELECT Statement (Basic Queries)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Using WHERE Clause (Filtering Data)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> UPDATE Statement (Modifying Data)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> DELETE Statement (Removing Data)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Basic String Operations, Pattern Matching using LIKE, Wildcards
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Using Aggregate Functions (SUM, COUNT, AVG, MIN, MAX)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Grouping Data with GROUP BY and HAVING
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Module 6: SQL – Data Querying and Joins
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN: Querying Data from Multiple Tables
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Joining Tables on Primary and Foreign Key Relationships
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Self Joins (Joining a Table with Itself)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Subqueries (Nested Queries)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> UNION, INTERSECT, and EXCEPT for Combining Queries
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Aliases for Tables and Columns
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Module 7: SQL – Functions and Advanced Queries
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> String Functions (CONCAT, SUBSTRING, LENGTH, REPLACE)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Date Functions (NOW, CURDATE, DATEDIFF, DATE_ADD, DATE_FORMAT)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Numeric Functions (ROUND, CEIL, FLOOR, ABS)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Using CASE and IF Statements in Queries
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Working with NULL Values (IS NULL, IS NOT NULL)
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Module 8: SQL – Indexes, Views, and Transactions
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Indexes: Creating and Dropping Indexes
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Use of Indexes for Query Optimization
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Views: Creating and Managing Views
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Updatable Views
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Transactions: Introduction to Transactions
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> ACID Properties (Atomicity, Consistency, Isolation, Durability)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> COMMIT, ROLLBACK, and SAVEPOINT
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Transaction Management in SQL
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Module 9: Database Security and Privileges
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> User Management in MySQL: Creating and Deleting Users
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Assigning Privileges (GRANT and REVOKE)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Roles and Privileges: Administrative, Object, and System Privileges
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Database Security Best Practices
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Encryption in Databases (Basic Concepts)
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Module 10: Advanced Database Concepts
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Stored Procedures: Creating and Executing Stored Procedures
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> IN, OUT, and INOUT Parameters
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Triggers: Creating and Managing Triggers
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> BEFORE and AFTER Triggers
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Functions: Creating and Using Functions in SQL
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Cursors: Introduction to Cursors
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Working with Cursors in Stored Procedures
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Module 11: Database Backup and Recovery
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Importance of Database Backup
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Backup Types: Full, Incremental, Differential
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> MySQL Backup Methods: Using mysqldump for Backup
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Exporting and Importing Data
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Recovery Options in MySQL
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Database Restore Process
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Module 12: Introduction to NoSQL and Modern Databases (Optional/Bonus Module)
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Overview of NoSQL Databases
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Differences between SQL and NoSQL
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Basic Introduction to MongoDB
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Understanding the use cases for RDBMS vs. NoSQL
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Practical Sessions (Throughout the Course)
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Setting up MySQL Environment (Installing MySQL Workbench, phpMyAdmin, or other tools)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Hands-on practice with SQL Queries in MySQL
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Creating a Simple Database Project (e.g., Library Management System, Student Records)
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Group Assignments and Lab Exercises on SQL Queries, Database Design, and Transactions
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Final Project
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Design a relational database from scratch
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Create tables with proper relationships and constraints
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Implement SQL queries for data manipulation and reporting
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Create views, stored procedures, and triggers
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Demonstrate database security and backup methods
  </li>
</ul>

<h2 className="font-bold text-xl lg:text-2xl my-5">
  Learning Outcomes
</h2>
<ul>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Understand the core concepts of RDBMS and database design
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Be proficient in SQL queries for data manipulation and retrieval
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Create, manage, and query relational databases using MySQL
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Understand normalization and design efficient databases
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Work with advanced SQL features like joins, subqueries, and transactions
  </li>
  <li className="flex items-center gap-3 mb-2 text-gray-500">
    <TiTick /> Implement stored procedures, triggers, and manage database security
  </li>
</ul>

  </div>
  )
}

export default DatabaseSyllabus