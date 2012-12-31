var $ = require('jquery/core');
var session = require('session');
var auth_controls = require('duality/contrib/session/controls');
require('duality/contrib/session/events');
var helpers = require('lib/helpers');
var session = require("session");

$(document).ready(function() {
	console.log('doc.ready');
	
	//Auth
	auth_controls.bind();
});


session.on('change', function (userCtx) {
   	console.log('session.change');
	//window.location.reload();
});