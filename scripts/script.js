$(document).ready(function() {
	console.log('doc.ready');
});

exports.hello = function (name) {
    return 'Hello, ' + name + '!';
};