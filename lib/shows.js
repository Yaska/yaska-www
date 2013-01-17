/**
 * Show functions to be exported from the design doc.
 */

var templates = require('duality/templates'),
	fields = require('couchtypes/fields'),
	markdown = require('lib/markdown'),
	Form = require('couchtypes/forms').Form;

var person = require('./types').person;
var blogpost = require('./types').blogpost;
var timeStamp = new Date();
var fullYear = timeStamp.getFullYear();

exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
		pageID: 'fourOhfour',
		fullYear: fullYear,
        content: templates.render('404.html', req, {})
    };
};
exports.index = function(doc, req){
	return{
		title: 'Yaska',
		fullYear: fullYear,
		pageID: 'index',
		content: templates.render('index.html', req, {})
	}
}

exports.services = function(doc, req){
	return{
		title: 'Services',
		fullYear: fullYear,
		pageID: 'services',
		nav_services: 'active',
		content: templates.render('services.html', req, {})
	}
}
exports.contact = function(doc, req){
	return{
		title: 'Contact',
		fullYear: fullYear,
		nav_contact: 'active',
		pageID: 'contact',
		extraScripts: ['<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdoNt2UX3HTe5LXZLr8YF5sS14vtr7Bjw&sensor=true"></script>'],
		content: templates.render('contact.html', req, {})
	};
}
exports.about = function(doc, req){
	return{
		title: 'About',
		fullYear: fullYear,
		nav_about: 'active',
		pageID: 'about',
		content: templates.render('about.html', req, {})
	};
}
exports.thankyou = function(doc, req){
	return{
		title: 'Thank You',
		fullYear: fullYear,
		pageID: 'thankYou',
		content: templates.render('thankyou.html', req, {})
	};
}
//colors for dev
exports.colors = function(doc, req){
	return{
		title: 'Colors',
		fullYear: fullYear,
		content: templates.render('colors.html', req, {})
	};
}

exports.post = function(doc, req){
	if(req.userCtx.roles.indexOf("y_editor") === -1){
		return{
			title: 'unauthorised',
			fullYear: fullYear,
			content: '<p>You must be an editor to walk the walk and post a post.<br />Please <a href="/login">log in</a> now.</p>'
		}
	}
	
	if(doc){
		return{
			title: doc.title ? doc.title : 'new post',
			fullYear: fullYear,
			content: templates.render('post.html', req, {
				title: doc.title,
				body: doc.markdown
			})
		};
	}
	else{
		//return JSON.stringify(req);
		return{
			title: req.path[req.path.length - 1],
			fullYear: fullYear,
			content: templates.render('post.html', req, {
				title: req.path[req.path.length - 1],
				body: 'yup'
			})
		}
	}
}

exports.login = function(doc, req){
	return{
		title: 'Login',
		pageID: 'login',
		fullYear: fullYear,
		content: templates.render('login.html', req, {})
	};
}
	
//Creates the form and renders it
// exports.my_form = function (doc, req) {
//     var myForm = new Form(person);
//     return {
//       title : 'My First Form',
// 	  fullYear: fullYear,
//       content: templates.render('form.html', req, {
//             form_title : 'My Form',
//             method : 'POST',
//             action : '../_update/update_my_form',
//             form : myForm.toHTML(req),
//             button: 'Validate'})
//     }
// };
// 
// exports.my_form_content = function(doc, req) {
//     return {
//         title: 'Content of my Form',
// 		fullYear: fullYear,
//         content: templates.render('base.html', req, {content : '<b>First Name</b> : ' +  doc.first_name + '<br/><b>Last Name</b> : ' + doc.last_name}) 
//     };
// };

exports.new_post = function(doc, req){
	// if(req.userCtx.roles.indexOf("y_editor") === -1){
	// 		return{
	// 			title: 'unauthorised',
	// 			fullYear: fullYear,
	// 			content: '<p>You must be an editor to walk the walk and post a post.<br />Please <a href="/login">log in</a> now.</p>'
	// 		}
	// 	}
	// 	else{
		var newPost = new Form(blogpost);
		//return JSON.stringify(newPost);
		//return JSON.stringify(newPost);
		var newTimeStampToPrevent304 = new Date();
		// start({
		// 			"date": {
		// 				"Date": newTimeStampToPrevent304,
		// 				"code": 200,
		// 				"expires": "Sun Jan 13 2013 10:36:28 GMT+0100 (CET)"
		// 			}
		// 		});
		return{
			title: 'New Post',
			fullYear: fullYear,	
			content: templates.render('form.html', req, {
				form_title: 'New Post',
				method: 'POST',
				action: '/_update/update_post',
				form: newPost.toHTML(req),
				button: 'Post it'
			})
		}
	// }
}
exports.blog = function(doc, req){
	//return 'there should be a document request! <br />Doc:<br />' + JSON.stringify(doc) + '<br />req: <br />' + JSON.stringify(req);
	if(!doc){
		return 'there should be a document request! <br />Doc:<br />' + JSON.stringify(doc) + '<br />req: <br />' + JSON.stringify(req);
	}
	else{
		doc.html = markdown.encode(doc.markdown);
		doc.dateString = (new Date(doc.pubDate)).toDateString();
		var post = {
			"value": doc
		}
		var posts = [post];
		
		
		// post.value.html = markdown.encode(post.value.markdown);
		// 		post.value.dateString = (new Date(post.value.pubDate)).toDateString();
		
		
		//change the structure a bit so i can use the same blog.html template
		// var data = {
		// 			"posts": doc
		// 		}
		// 		return JSON.stringify(data);
		//return JSON.stringify(post)
		return{
			title: 'title',
			fullYear: fullYear,
			content: templates.render('blog.html', req, {posts: posts})
		}
	}
}

