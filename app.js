var express=require("express");
var app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
app.use(bodyParser.json());					//initialise bodypaser	//while sending post request through resteasy in  json
Genre= require("./models/genre");
Book= require("./models/book");

mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection;

app.get('/',function(req,res){
	res.send("Bookstoresite");

});
// get the book object from model book.js
app.get('/api/genres', function(req,res){
	Genre.getGenre(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});

});
app.get('/api/books',function(req,res){
		
	Book.getBook(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	});

});
//get book by id
app.get('/api/books/:_id',function(req,res){
	Book.getBooksById(req.params._id,function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	});

});

//add genre or  create
app.post('/api/genres', function(req,res){
	var genre=req.body;                     // everything that comes through form is parsed and put in genre
	Genre.addGenre(genre, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});

});

// add book
app.post('/api/books', function(req,res){
	var book=req.body;                     // everything that comes through form is parsed and put in genre
	Book.addBook(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});

});
//
app.put('/api/genres/:id', function(req,res){
	var id=req.params._id;
	var genre=req.body;                     // everything that comes through form is parsed and put in genre
	Genre.updateGenre(id,genre,{}, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});

});
//delete genre
app.delete('/api/genres/:id', function(req,res){
	var id=req.params._id;                  
	Genre.removeGenre(id, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});

});
app.listen(3000);
	console.log("hello u");
