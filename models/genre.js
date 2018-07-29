var mongoose=require("mongoose");
//Create schema
var genreSchema=mongoose.Schema({
	name:{
		type:String,required:true
	},
	Author:{
		type:String,required:true
	},
	create_date:{
		type:Date,default:Date.now
	}

});
//create object to  access in other files
var Genre=module.exports= mongoose.model('Genre',genreSchema);

//Get Genres
module.exports.getGenre=function(callback, limit){
	Genre.find(callback).limit(limit);
		}

module.exports.getGenreById=function(id,callback){
	Genre.findById(id, callback);
		}
// Add book
module.exports.addGenre=function(genre,callback){
	Genre.create(genre, callback);
		}

// update   genre
module.exports.updateGenre=function(id,genre,options,callback){
	var query={_id: id};
	var update={
		name:genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
		}

// delete genre
module.exports.removeGenre=function(id,callback){
	var query={_id: id};
	Genre.remove(query, callback);
		}