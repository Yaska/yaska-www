/**
 * List functions to be exported from the design doc.
 */
var markdown = require('lib/markdown'); 
var helpers = require('lib/helpers');
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
	var latestPost, latestPosts = [];
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
			var date = new Date(post.value.pubDate);
			post.value.archiveDate = helpers.fullMonth(date.getMonth()) + ' ' + date.getFullYear();
			posts.push(post);
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
	if(posts.length > 3){
		for (var i = 0; i < 3; i++){
			latestPost = {
				"url": posts[i].value._id,
				"title": posts[i].value.title
			}
			latestPosts.push(latestPost);
		}
	}
	//return JSON.stringify(posts);
	//Build array of Date/months & associated doc ids for archive
	var allDates = [];
	var dateArray = [];
	var elements = "";
	var gotOne = false;
	for(var i = 0, ii = posts.length; i < ii; i++){
		var date = new Date(posts[i].key[0]);
		dateString = [date.getFullYear(), date.getMonth()];
		//return JSON.stringify(dateString);
		gotOne = false;
		if(allDates.length !== 0){
			for (var j = 0, jj = allDates.length; j < jj; j++){
				//return JSON.stringify(el) + ' ' + JSON.stringify(allDates);
				if(allDates[j][0] === dateString[0] && allDates[j][1] === dateString[1]){
					//elements += ' ' + JSON.stringify(el) + ' === ' + JSON.stringify(dateArray) + '<br />';
					gotOne = true;
				}
			}
		}
		if(gotOne === false){
			allDates.push(dateString);
		}
	}
	//return JSON.stringify(allDates);
	
	var content = templates.render('blog.html', req, {
		posts: posts,
		tags: tags,
		latestPosts: latestPosts,
		allDates : allDates
		// , stringyfied: JSON.stringify(posts)
	});
	
	return {
		contentType: 'text/html',
		title: 'Yaska | Blog',
		nav_blog: 'active',
		extrasInHead: '<link href="/feed" type="application/atom+xml" rel="alternate" title="Yaska Feed">',
		content: content
	};
}


exports.atom = function(doc, req){
	var post, posts = [];
	start({
		"headers": {
			"Content-Type": "application/atom+xml"
		}
	});
	
	while (doc = getRow()){
		if(doc.key !== 'tags'){
			post = doc;
			post.value.html = markdown.encode(post.value.markdown);
			post.value.ISOString = new Date(post.value.pubDate).toISOString();
			posts.push(post);
		}
	}
	posts.reverse();
	var content = templates.render('feed.xml', req, {
		posts: posts,
		updateDate : new Date().toISOString()
	}) 
	return {
	   "headers" : {"Content-Type" : "application/atom+xml", "kaka": "pipi"},
	   "body" : content
	}
}





exports.tags = function(doc, req){
	var tag, tags = [];
	while (doc = getRow()){
		if(doc.key === 'tags'){
			for(var i = 0, ii = doc.value.length; i < ii; i++){
				if (tags.indexOf(doc.value[i]) === -1){
					tag = doc.value[i];
					tags.push(tag);
				}
			}
		}
	}
	start = ({
		"headers": {
			"Content-Type": "application/json"
		}
	});
	return {
		contentType: "application/json",
		tags : tags
	};
	
}
