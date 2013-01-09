var Type = require('couchtypes/types').Type,
	fields = require('couchtypes/fields'),
	widgets = require('couchtypes/widgets');
	
exports.blogpost = new Type('blogpost', {
    fields: {
        pubDate: fields.createdTime(),
        title: fields.string(),
        markdown: fields.string({
            widget: widgets.textarea({cols: 40, rows: 10})
        }),
		tags: fields.array(),
		author: fields.creator()
    }
});

exports.person = new Type('person'), {
	fields: {
		first_name: fields.string(),
		last_name: fields.string()
	}
}
