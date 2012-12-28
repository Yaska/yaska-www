/**
 * Views to be exported from the design doc.
 */
exports.blogPosts = {
	map: function(doc){
		if(doc.type === "blogPost"){
			emit(doc._id, doc);
		}
	}
 }
 
