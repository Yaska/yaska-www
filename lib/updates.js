/**
 * Update functions to be exported from the design doc.
 */


var templates = require('duality/templates'),
    fields = require('couchtypes/fields'),
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
		db.current().saveDoc(
			{
				'author': req.userCtx.name,
				'title': req.title,
				'body': req.text
			}
		),
		function(err, res){
			if(err){
				return [null, {content: JSON.stringify(err), title: 'Error Posting'}];
			}
			else{
				return [null, {content: JSON.stringify(res), title: 'Posting in ordnung'}];
			}
		}
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