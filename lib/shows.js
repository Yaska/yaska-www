/**
 * Show functions to be exported from the design doc.
 */

var templates = require('duality/templates'),
	fields = require('couchtypes/fields'),
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
		content: templates.render('contact.html', req, {})
	};
}
exports.about = function(doc, req){
	return{
		title: 'About',
		fullYear: fullYear,
		nav_about: 'active',
		content: templates.render('about.html', req, {})
	};
}
exports.admin = function(doc, req){
	return{
		title: 'Login',
		pageID: 'login',
		fullYear: fullYear,
		content: templates.render('login.html', req, {})
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
	if(doc){
		return{
			title: doc.title ? doc.title : 'new post',
			fullYear: fullYear,
			content: templates.render('post.html', req, {
				title: doc.title,
				body: doc.body
			})
		};
	}
	else{
		return{
			title: 'new post',
			fullYear: fullYear,
			content: templates.render('post.html', req, {
				// title: doc.title ? doc.title : '',
				// 				body: doc.body ? doc.body : ''
			})
		}
	}
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
	if(req.userCtx.roles.indexOf("y_editor") === -1){
		return{
			title: 'unauthorised',
			fullYear: fullYear,
			content: '<p>You must be an editor to walk the walk and post a post.<br />Please log in now.</p>' + JSON.stringify(req.userCtx)
		}
	}
	else{
		var newPost = new Form(blogpost);
		return{
			title: 'New Post',
			fullYear: fullYear,	
			content: templates.render('form.html', req, {
				form_title: 'New Post',
				method: 'POST',
				action: '../_update/update_post',
				form: newPost.toHTML(req),
				button: 'Post it'
			})
		}
	}
}
