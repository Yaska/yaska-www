/**
 * Views to be exported from the design doc.
 */
exports.blogPosts = {
	map: function(doc){
		if(doc.type === "blogpost"){
			emit(doc._id, doc);
		}
	}
 }
 
