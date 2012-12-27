var $ = require('jquery/core');
var session = require('session');
var auth_controls = require('duality/contrib/session/controls');
require('duality/contrib/session/events');

$(document).ready(function() {
	console.log('doc.ready');
	
	//Auth
	auth_controls.bind();
});