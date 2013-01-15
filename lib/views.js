/**
 * Views to be exported from the design doc.
 */
exports.blogPosts = {
	map: function(doc){
		if(doc.type === "blogpost"){
			var date = new Date(doc.pubDate);
			emit([date], doc);
			if(doc.tags){
				emit('tags',doc.tags);
			}
		}
	}
}
 
