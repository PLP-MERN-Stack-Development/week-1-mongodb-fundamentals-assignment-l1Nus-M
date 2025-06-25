//Task 2: Basic CRUD Operations
//Finding all books in a specific genre
db.books.find({ genre: "Fiction" })

//Find books published after a certain year
db.books.find({ published_year: { $gt: 1949 } })

//Find books by a specific author
db.books.find({ author: "Harper Lee" })

//Update the price of a specific book
db.books.updateOne({ title: "To Kill a Mockingbird"}, { $set: { price: 10.99} } )

//Delete a book by its title
db.books.deleteOne({ title: "To Kill a Mockingbird" })


//Task 3: Advanced Queries
//Write a query to find books that are both in stock and published after 2010 with projection of author, title, and price
db.books.find({in_stock: true, published_year: { $gt: 2010}}, { _id: 0, title: 1, author: 1, price: 1})

//Implement sorting to display books by price (both ascending and descending)
//Ascending Order: Cheapest to Most Expensive
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: 1 })
//Descending Order: Most Expensive to Cheapest
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: -1 })

//Use the limit and skip methods to implement pagination (5 books per page)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ title: 1 }).limit(5).skip(0) // Page 1
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ title: 1 }).limit(5).skip(5) // Page 2

//Task 4: Aggregation Pipeline
//Create an aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([{ $group: { _id: "$genre", averagePrice: { $avg: "$price" }, count: { $sum: 1 } } }]) 

//Create an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([{ $group: { _id: "$author", bookCount: { $sum: 1 } } }, { $sort: { bookCount: -1 } }, { $limit: 1 }])

//Implement a pipeline that groups books by publication decade and counts them
db.books.aggregate([{ $addFields: { decade: { $subtract: [ { $year: "$published_date" }, { $mod: [ { $year: "$published_date" }, 10 ] } ] } } }, { $group: { _id: "$decade", bookCount: { $sum: 1 } } }, { $sort: { _id: 1 } }])


//Task 5: Indexing
//Create an index on the title field for faster searches
db.books.createIndex({ title: 1 })

//Create a compound index on author and published_year
db.books.createIndex({ author: 1, publicationYear: 1 })

//Use the explain() method to demonstrate the performance improvement with your indexes
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");