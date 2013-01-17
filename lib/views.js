/**
 * Views to be exported from the design doc.
 */
exports.blogPosts = {
	map: function(doc){
		if(doc.type === "blogpost"){
			var date = new Date(doc.pubDate);
			emit(date, doc);
			if(doc.tags){
				emit('tags',doc.tags);
			}
		}
	}
}
 
 
// exports.postsPerTag = {
// 	map: function(doc){
// 		if(doc.type === "blogpost" && doc.tags){
// 			emit('tags',doc.tags);
// 			for(var i = 0, ii = doc.tags.length; i < ii; i++){
// 				emit(doc.tags[i], doc);
// 			}
// 		}
// 	}
// }
