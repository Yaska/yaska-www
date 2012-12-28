/**
 * List functions to be exported from the design doc.
 */

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
	start({
		"headers": {
			"Content-Type": "text/html"
		}
	});
	while (post = getRow()){
		posts.push(post);
	}
	
	var content = templates.render('blog.html', req, {
		posts: posts,
		stringyfied: JSON.stringify(posts)
	});
	
	return {
		contentType: 'text/html',
		title: 'Blog', 
		content: content
	};
}

