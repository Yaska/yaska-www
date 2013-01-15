/**
 * Update functions to be exported from the design doc.
 */

//var $ = require('jquery/core'); 
var templates = require('duality/templates'),
    fields = require('couchtypes/fields'),
	markdown = require('lib/markdown'),
	utils = require('duality/utils'),
	helpers = require('lib/helpers'),
    Form = require('couchtypes/forms').Form;
	
var db = require('db');

//Types	
var person = require('./types').person;
var blogpost = require('./types').blogpost;

exports.update_my_form = function (doc, req) {
    var form = new Form(person);
    form.validate(req);

    /**
     * We do that because we are not using CouchType
     * CouchType takes care of generating a uuid
     */
    form.values._id = req.uuid;

 if (form.isValid()) {
		return [form.values, {content: 'Hello ' + form.values.first_name +', '+ form.values.last_name , title: 'Result'}];
    }
 else {
        var content = templates.render('form.html', req, {
            form_title: 'My Form',
            method: 'POST',
            action: '../_update/update_my_form',
            form: form.toHTML(req),
            input: 'Validate'
        });
        return [null, {content: content, title: 'My First Form'}];
    }
};

exports.update_post = function(doc, req){
	var form = new Form(blogpost);
	form.validate(req);
	
	if (form.isValid()){
		//Post that shit
		//var time = new Date();
		//return JSON.stringify(form.values);
		form.values.author = req.userCtx.name;
		form.values._id = helpers.slugifyString(form.values.title);
		//var date = form.values.pubDate;
		//form.values.archiveDate = helpers.fullMonth(date.getMonth()) + ' ' + date.getFullYear();
		//form.values.archiveDate = form.values.pubDate;
		
		return [form.values, {content: JSON.stringify(form.values)}]
		//return [form.values ,{content: 'Like a boss <br />' + JSON.stringify(form) , title: 'posted'}];			
		//test = JSON.stringify(db.current());
		//return [null, {content: 'That shit is valid', title: 'Posting in ordnung'}]
		
		//return [null, JSON.stringify(req), 'this is the shit'];
	}
	else{
		var content = templates.render('form.html', req, {
							form_title: 'Update Post',
						    method: 'POST',
						    action: '../_update/update_post',
						    form: form.toHTML(req),
						    button: 'Post'
						});
		return [null, {content: content, title: 'Not valid'}];
	}
}