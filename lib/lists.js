/**
 * List functions to be exported from the design doc.
 */
var markdown = require('lib/markdown'); 
var templates = require('duality/templates');


// exports.page_list = function (head, req) {
// 
//     log('calling page list');
//     log(head);
// 
//     start({code: 200, headers: {'Content-Type': 'text/html'}});
// 
//     // fetch all the rows
//     var page, pages= [];
// 
//     while (page = getRow()) {
//         pages.push(page);
//     }
// 
//     // generate the markup for a list of pages
//     var content = templates.render('page_list.html', req, {
//         pages: pages
//     });
// 
//     return {title: 'Page Index', content: content};
// 
// };
// 
// exports.page = function (head, req) {
// 
//     start({code: 200, headers: {'Content-Type': 'text/html'}});
//     
//     // fetch row and set page.
//     var row = [];
//     var page;
//     if (row = getRow()) {
//     	page = row.doc
//     }
//     else {
//         return {
//     	    title: '404 - Not Found',
// 	        content: templates.render('404.html', req, {})
//     	};
//     }
// 
//     // generate the markup for the pages
//     var content = templates.render(page.template, req, {
//         page: page
//     });
// 
//     return {title: page.title, content: content};
// 
// };

// exports.blog = function (head, req) {
// 
//     log('calling blog list');
//     log(head);
// 
//     start({code: 200, headers: {'Content-Type': 'text/html'}});
// 
//     // fetch all the rows
//     var post, posts= [];
// 
//     while (post = getRow()) {
//         posts.push(post);
//     }
// 
//     // generate the markup for a list of pages
//     var content = templates.render('blog.html', req, {
//         posts: posts
//     });
// 
//     return {title: 'Blog', content: content};
// 
// };
// 
// exports.simpleList = function(doc, req) {   
//     provides("html", function() {
//         html = "<html><body><ol>\n";
//         while (row = getRow()) {
//             html += "<li>" + row.key + ":" + JSON.stringify(row.value) + "</li>\n";
//         }   
//         html += "</ol></body></head>";
//         return html;
//     }); 
// }

exports.blog = function(doc, req){
	var post, posts = [];
	var tag, tags = [];
	var latestPost, latestPosts = []
	start({
				"headers": {
					"Content-Type": "text/html"
				}
			});	
	while (doc = getRow()){
		if(doc.key !== 'tags'){
			post = doc;
			post.value.html = markdown.encode(post.value.markdown);
			post.value.dateString = (new Date(post.value.pubDate)).toDateString();
			posts.push(post);
			// if(latestPosts.length < 3){
			// 				latestPost = {
			// 					"_id": post.value._id,
			// 					"title": post.value.title
			// 				}
			// 				latestPosts.push(latestPost)
			// 			}
		}
		else{
			for(var i = 0, ii = doc.value.length; i < ii; i++){
				if (tags.indexOf(doc.value[i]) === -1){
					tag = doc.value[i];
					tags.push(tag);
				}
			}
		}
	}
	posts.reverse();
	//return JSON.stringify(posts)
	for (var i = 0, ii = 3; i < ii; i++){
		latestPost = {
			"url": posts[i].value._id,
			"title": posts[i].value.title
		}
		latestPosts.push(latestPost)
	}
	//return JSON.stringify(latestPosts);
	var content = templates.render('blog.html', req, {
		posts: posts,
		tags: tags,
		latestPosts: latestPosts
		// , stringyfied: JSON.stringify(posts)
	});
	
	return {
		contentType: 'text/html',
		title: 'Blog eh',
		nav_blog: 'active', 
		content: content
	};
}
exports.atom = function(doc, req){
	var post, posts = [];
	start = ({
		"headers": {
			"Content-Type": ""
		}
	});
}
exports.byTags = function(doc, req){
	var posts, posts = [];
	start = ({
		"headers": {
			"Content-Type": "text/html"
		}
	})
}
