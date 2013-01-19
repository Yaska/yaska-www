var $ = require('jquery/core'),
	session = require('session'),
	auth_controls = require('duality/contrib/session/controls'),
	helpers = require('lib/helpers'),
	session = require("session"),
	markdown = require('lib/markdown');

require('duality/contrib/session/events');


var JQTWEET = {
     
    // Set twitter username, number of tweets & id/class to append tweets
    user: 'yaska_eu',
    numTweets: 3,
    appendTo: '#tweets',
 
    // core function of jqtweet
    loadTweets: function() {
        $.ajax({
            url: 'http://api.twitter.com/1/statuses/user_timeline.json/',
            type: 'GET',
            dataType: 'jsonp',
            data: {
                screen_name: JQTWEET.user,
                include_rts: true,
                count: JQTWEET.numTweets,
                include_entities: true
            },
            success: function(data, textStatus, xhr) {
 
                 var html = '<div class="tweet">TWEET_TEXT timeData';
         
                 // append tweets into page
                 for (var i = 0; i < data.length; i++) {
                    $(JQTWEET.appendTo).append(
                        html.replace('TWEET_TEXT', JQTWEET.ify.clean(data[i].text) )
                            .replace(/USER/g, data[i].user.screen_name)
                            .replace('timeData', '<div class="tweetTime">' + JQTWEET.timeAgo(data[i].created_at) + '</div>' )
                            .replace(/ID/g, data[i].id_str)
                    );
                 }                  
            }   
 
        });
         
    }, 
     
         
    /**
      * relative time calculator FROM TWITTER
      * @param {string} twitter date string returned from Twitter API
      * @return {string} relative time like "2 minutes ago"
      */
    timeAgo: function(dateString) {
        var rightNow = new Date();
        var then = new Date(dateString);
         
        if ($.browser.msie) {
            // IE can't parse these crazy Ruby dates
            then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
        }
 
        var diff = rightNow - then;
 
        var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;
 
        if (isNaN(diff) || diff < 0) {
            return ""; // return blank string if unknown
        }
 
        if (diff < second * 2) {
            // within 2 seconds
            return "right now";
        }
 
        if (diff < minute) {
            return Math.floor(diff / second) + " seconds ago";
        }
 
        if (diff < minute * 2) {
            return "about 1 minute ago";
        }
 
        if (diff < hour) {
            return Math.floor(diff / minute) + " minutes ago";
        }
 
        if (diff < hour * 2) {
            return "about 1 hour ago";
        }
 
        if (diff < day) {
            return  Math.floor(diff / hour) + " hours ago";
        }
 
        if (diff > day && diff < day * 2) {
            return "yesterday";
        }
 
        if (diff < day * 365) {
            return Math.floor(diff / day) + " days ago";
        }
 
        else {
            return "over a year ago";
        }
    }, // timeAgo()
     
     
    /**
      * The Twitalinkahashifyer!
      * http://www.dustindiaz.com/basement/ify.html
      * Eg:
      * ify.clean('your tweet text');
      */
    ify:  {
      link: function(tweet) {
        return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
          var http = m2.match(/w/) ? 'http://' : '';
          return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
        });
      },
 
      at: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
        });
      },
 
      list: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
        });
      },
 
      hash: function(tweet) {
        return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
          return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
        });
      },
 
      clean: function(tweet) {
        return this.hash(this.at(this.list(this.link(tweet))));
      }
    } // ify
 
     
};

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


/* ! GOOGLE MAPS */
/*
function initializeMap(positionAsArray, containerByID) {
	//Map
	var LatLng = new google.maps.LatLng(positionAsArray[0], positionAsArray[1]);
	console.log(LatLng);
	var mapOptions = {
	  center: LatLng,
	  zoom: 14,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  streetViewControl: false,
	  panControl: false
	};
	
	map = new google.maps.Map(document.getElementById(containerByID),
	    mapOptions);
	
	var marker = new google.maps.Marker({
	    position: LatLng,
	    map: map
    })
    
    marker.setMap(map);
};
*/


$(document).ready(function() {
	console.log('doc.ready');
	$('body').removeClass('no-js');
	//Hack for ETAG-caching until i find a better solution 
	if (document.location.href === 'http://yaska.couchdb:5984/post'){
		document.location.href = 'http://yaska.couchdb:5984/post?' + Math.random();
	}
	
	if(window.innerWidth > 480){
		JQTWEET.loadTweets();
		$('#contactAndLegalese').css('width', '30%').css('margin-left', '3%');
		$('#tweets').css('width', '66%');
	}
	
	//Auth
	//auth_controls.bind();
	
	$('td[data-checks="yes"]').html('<img src="/static/img/checks/yes.png" />');
	$('td[data-checks="no"]').html('<img src="/static/img/checks/no.png" />');
	for(var i = 0, ii = $('tr').length; i < ii; i++){
		if(i % 2 !== 0){
			$($('tr')[i]).addClass('odd');
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
	
	/* ! MAPS */
	/*
if(google !== undefined){
		initializeMap([51.055799, 3.742372], 'BelgianMap');
		initializeMap([52.182732, 20.99762], 'PolishMap');
		console.log("did some mappin'");
	}
*/
	
	
	/* ! Responsive shizzle */
	$('#menuButton').click(function(){
		
		$('#nav').slideToggle('fast');
	})
	
});