# MongoDB Book Collection Manager

This repository contains MongoDB queries and aggregation pipelines for managing a book collection database. The scripts demonstrate various CRUD operations, analytics, and performance optimization techniques.

# Prerequisites

- MongoDB installed and running (version 4.4 or higher recommended)
- mongosh (MongoDB Shell) or compatible client
- Sample book collection imported into your database

# Setup

1. Import sample data:

node `insert_books.js`

2. Connect to your MongoDB instance:

mongosh "mongodb://localhost:27017"

3. Switch to your database:

use plp_bookstore

## Script Categories
### Basic CRUD Operations
- Find books by genre
- Find books published after a certain year
- Find books by author
- Update book prices
- Delete books by title

### Advanced Queries
- Filter with projection
- Sorting (ascending/descending)
- Pagination implementation

### Aggregation Pipelines
- Average price by genre
- Most prolific author
- Books by publication decade

### Performance Optimization
- Index creation (single)
- Query performance analysis using `explain()`