var mongoose=require("mongoose");
//Create schema
var bookSchema=mongoose.Schema({
	title:{
		type:String,required:true
	},
	create_date:{
		type:Date,default:Date.now
	}

});
//create object to  access in other files
var Book=module.exports= mongoose.model('Book',bookSchema);

//Get Books
module.exports.getBook=function(callback, limit){
	Book.find(callback).limit(limit);
		}
// get bookbyid
module.exports.getBookById=function(id,callback){
	Book.findById(id, callback);
		}
// Add book
module.exports.addBook=function(book,callback){
	Book.create(book, callback);
		}