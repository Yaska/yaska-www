var $ = require('jquery/core'),
	session = require('session'),
	auth_controls = require('duality/contrib/session/controls'),
	helpers = require('lib/helpers'),
	session = require("session"),
	markdown = require('lib/markdown');

require('duality/contrib/session/events');


// var JQTWEET = {
//      
//     // Set twitter username, number of tweets & id/class to append tweets
//     user: 'yaska_eu',
//     numTweets: 3,
//     appendTo: '#tweets',
//  
//     // core function of jqtweet
//     loadTweets: function() {
//         $.ajax({
//             url: 'http://api.twitter.com/1/statuses/user_timeline.json/',
//             type: 'GET',
//             dataType: 'jsonp',
//             data: {
//                 screen_name: JQTWEET.user,
//                 include_rts: true,
//                 count: JQTWEET.numTweets,
//                 include_entities: true
//             },
//             success: function(data, textStatus, xhr) {
//  
//                  var html = '<div class="tweet">TWEET_TEXT timeData';
//          
//                  // append tweets into page
//                  for (var i = 0; i < data.length; i++) {
//                     $(JQTWEET.appendTo).append(
//                         html.replace('TWEET_TEXT', JQTWEET.ify.clean(data[i].text) )
//                             .replace(/USER/g, data[i].user.screen_name)
//                             .replace('timeData', '<div class="tweetTime">' + JQTWEET.timeAgo(data[i].created_at) + '</div>' )
//                             .replace(/ID/g, data[i].id_str)
//                     );
//                  }                  
//             }   
//  
//         });
//          
//     }, 
//      
//          
//     /**
//       * relative time calculator FROM TWITTER
//       * @param {string} twitter date string returned from Twitter API
//       * @return {string} relative time like "2 minutes ago"
//       */
//     timeAgo: function(dateString) {
//         var rightNow = new Date();
//         var then = new Date(dateString);
//          
//         if ($.browser.msie) {
//             // IE can't parse these crazy Ruby dates
//             then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
//         }
//  
//         var diff = rightNow - then;
//  
//         var second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24,
//         week = day * 7;
//  
//         if (isNaN(diff) || diff < 0) {
//             return ""; // return blank string if unknown
//         }
//  
//         if (diff < second * 2) {
//             // within 2 seconds
//             return "right now";
//         }
//  
//         if (diff < minute) {
//             return Math.floor(diff / second) + " seconds ago";
//         }
//  
//         if (diff < minute * 2) {
//             return "about 1 minute ago";
//         }
//  
//         if (diff < hour) {
//             return Math.floor(diff / minute) + " minutes ago";
//         }
//  
//         if (diff < hour * 2) {
//             return "about 1 hour ago";
//         }
//  
//         if (diff < day) {
//             return  Math.floor(diff / hour) + " hours ago";
//         }
//  
//         if (diff > day && diff < day * 2) {
//             return "yesterday";
//         }
//  
//         if (diff < day * 365) {
//             return Math.floor(diff / day) + " days ago";
//         }
//  
//         else {
//             return "over a year ago";
//         }
//     }, // timeAgo()
//      
//      
//     /**
//       * The Twitalinkahashifyer!
//       * http://www.dustindiaz.com/basement/ify.html
//       * Eg:
//       * ify.clean('your tweet text');
//       */
//     ify:  {
//       link: function(tweet) {
//         return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
//           var http = m2.match(/w/) ? 'http://' : '';
//           return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
//         });
//       },
//  
//       at: function(tweet) {
//         return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
//           return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
//         });
//       },
//  
//       list: function(tweet) {
//         return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
//           return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
//         });
//       },
//  
//       hash: function(tweet) {
//         return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
//           return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
//         });
//       },
//  
//       clean: function(tweet) {
//         return this.hash(this.at(this.list(this.link(tweet))));
//       }
//     } // ify
//  
//      
// };

session.on('change', function (userCtx) {
   	console.log('session.change');
	//window.location.reload();
});

function login(usr, pwd, cb){
		session.login(usr, pwd, function (err, res) {
	    if (err) {
	    	alert('Stupid, stupid. You entered a wrong username or password. Try again.')
	    }
	    else {
		    console.log(res)
		    cb();
	    }
	});
}
function isHidpi(){
	var hdpiCheck = window.matchMedia("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
	if(hdpiCheck && hdpiCheck.matches){
		return true;
	}
	else{
		return false;
	}
	
}
function preloader() {
	if (document.images) {
		var julien = new Image();
		var eric = new Image();
		var alexis = new Image();
		var arthur = new Image();
		var laura = new Image();
		var david = new Image();
		var karl = new Image();
		var louis = new Image();
		var pierre = new Image();
		
		var hdpiCheck = window.matchMedia("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
		
		if(isHidpi()){
			console.log('loading hi-hidpi');
			julien.src = "http://yaska.eu/static/img/about/julien_alt@2x.png";
			eric.src = "http://yaska.eu/static/img/about/eric_alt@2x.png";
			alexis.src = "http://yaska.eu/static/img/about/alexis_alt@2x.png";
			arthur.src = "http://yaska.eu/static/img/about/arthur_alt@2x.png";
			laura.src = "http://yaska.eu/static/img/about/laura_alt@2x.png";
			david.src = "http://yaska.eu/static/img/about/david_alt@2x.png";
			karl.src = "http://yaska.eu/static/img/about/karl_alt@2x.png";
			louis.src = "http://yaska.eu/static/img/about/louis_alt@2x.png";
			pierre.src = "http://yaska.eu/static/img/about/pierre_alt@2x.png";
			
		}
		else{
			console.log('loading non-hidpi');
			julien.src = "http://yaska.eu/static/img/about/julien_alt.png";
			eric.src = "http://yaska.eu/static/img/about/eric_alt.png";
			alexis.src = "http://yaska.eu/static/img/about/alexis_alt.png";
			arthur.src = "http://yaska.eu/static/img/about/arthur_alt.png";
			laura.src = "http://yaska.eu/static/img/about/laura_alt.png";
			david.src = "http://yaska.eu/static/img/about/david_alt.png";
			karl.src = "http://yaska.eu/static/img/about/karl_alt.png";
			louis.src = "http://yaska.eu/static/img/about/louis_alt.png";
			pierre.src = "http://yaska.eu/static/img/about/pierre_alt.png";
		}
	}
}

$(document).ready(function() {
	console.log('doc.ready');
	$('body').removeClass('no-js');
	
	if(window.location.pathname === '/about'){
		preloader()
	}
	
	if(window.location.pathname.indexOf('/services') !== -1  && window.location.hash !== ""){
		$('.sideNavButton').removeClass('active');
		$('.sideNavButton a[href="' + window.location.hash + '"]').parents('.sideNavButton').addClass('active')
	}
	
	if(window.location.pathname === '/'){
		var randomizr = Math.random();
		if(randomizr <= 0.33){
			$('#pic')
				.css('background-color', '#293238')
				.find('img').attr('src', '/static/img/develop.png').end()
				.show();
		}else if (randomizr <= 0.66){
			$('#pic')
				.css('background-color', '#8dc63f')
				.find('img').attr('src', '/static/img/visual.png').end()
				.show();
		}else{
			$('#pic')
			.css('background-color', '#878b89')
			.find('img').attr('src', '/static/img/support.png').end()
			.show();
		}
	}
	//Hack for ETAG-caching until i find a better solution 
	if (document.location.href === 'http://yaska.couchdb:5984/post'){
		document.location.href = 'http://yaska.couchdb:5984/post?' + Math.random();
	}
	
	// if(window.innerWidth > 480){
// 		JQTWEET.loadTweets();
// 		$('#contactAndLegalese').css('width', '30%').css('margin-left', '3%');
// 		$('#tweets').css('width', '66%');
// 	}
	
	//Auth
	//auth_controls.bind();
	
	$('td[data-checks="yes"]').html('<img src="/static/img/checks/yes.png" />');
	$('td[data-checks="no"]').html('<img src="/static/img/checks/no.png" />');
	for(var i = 0, ii = $('table').length; i < ii; i++){
		for(var j = 0, jj = $($('table')[i]).find('tr').length; j < jj; j++){
			if(j % 2 !== 0){
				$($($('table')[i]).find('tr')[j]).addClass('odd');
			} 
		}
	}
	$('tr').css('border', 'none');
	
	$('.sideNavButton a').click(function(e){
		$('.sideNavButton.active').removeClass('active');
		$(this).parents('.sideNavButton').addClass('active');
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top - 50}, 500);
		return false;
	});
	
	$('#loginButton').click(function(e){
		var usr = $('input[name="userName"]').val().replace(' ', '');
		var pwd = $('input[name="password"]').val();
		login(usr, pwd, function(){
			console.log('cb works too');
			if (window.history !== undefined){
				window.history.back();
			}
			else{
				window.location.replace('post');	
			}
		});
		return false;
	});
	
	$('.person').click(function(){
		var img = $(this).css('background-image');
		var el = $(this)
		if(!isHidpi()){
			if(img.indexOf('_alt') === -1){
				el.css('background-image', img.replace('.png', '_alt.png'));
			}
			else{
				el.css('background-image', img.replace('_alt', ''));
			}
		}
		else{
			if(img.indexOf('_alt') === -1){
				el.css('background-image', img.replace('@2x.png', '_alt@2x.png'));
			}
			else{
				el.css('background-image', img.replace('_alt', ''));
			}
		}
	});
	
	/* ! SlideShow */
	$(".rslides").responsiveSlides();
	
	/* ! Responsive shizzle */
	$('#menuButton').click(function(){
		$('#nav').slideToggle('fast');
	})
	
});