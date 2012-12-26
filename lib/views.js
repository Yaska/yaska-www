/**
 * Views to be exported from the design doc.
 */
exports.blogPosts = {
	map: function(doc){
		if(doc.docType === "blogPost"){
			emit(doc._id, doc);
		}
	}
 }