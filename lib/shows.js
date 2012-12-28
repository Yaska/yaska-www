/**
 * Show functions to be exported from the design doc.
 */

var templates = require('duality/templates'),
	fields = require('couchtypes/fields'),
	Form = require('couchtypes/forms').Form;

var person = require('./types').person;
var blogpost = require('./types').blogpost;

exports.welcome = function (doc, req) {
    return {
        title: 'It worked!',
        content: templates.render('welcome.html', req, {})
    };
};

exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};

exports.contact = function(doc, req){
	return{
		title: 'Contact',
		content: templates.render('base.html', req, {})
	};
}

exports.post = function(doc, req){
	if(doc){
		return{
			title: doc.title ? doc.title : 'new post',
			content: templates.render('post.html', req, {
				title: doc.title,
				body: doc.body
			})
		};
	}
	else{
		return{
			title: 'new post',
			content: templates.render('post.html', req, {
				// title: doc.title ? doc.title : '',
				// 				body: doc.body ? doc.body : ''
			})
		}
	}
}
	
//Creates the form and renders it
exports.my_form = function (doc, req) {
    var myForm = new Form(person);
    return {
      title : 'My First Form',
      content: templates.render('form.html', req, {
            form_title : 'My Form',
            method : 'POST',
            action : '../_update/update_my_form',
            form : myForm.toHTML(req),
            button: 'Validate'})
    }
};

exports.my_form_content = function(doc, req) {
    return {
        title: 'Content of my Form',
        content: templates.render('base.html', req, {content : '<b>First Name</b> : ' +  doc.first_name + '<br/><b>Last Name</b> : ' + doc.last_name}) 
    };
};

exports.new_post = function(doc, req){
	if(req.userCtx.roles.indexOf("y_editor") === -1){
		return{
			title: 'unauthorised',
			content: 'You must be an editor to walk the walk and post a post.<br />Please log in now.	'
		}
	}
	else{
		var newPost = new Form(blogpost);
		return{
			title: 'New Post',
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
