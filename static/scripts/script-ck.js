function login(e,t,n){session.login(e,t,function(e,t){if(e)alert("Stupid, stupid. You entered a wrong username or password. Try again.");else{console.log(t);n()}})}function isHidpi(){var e=window.matchMedia("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");return e&&e.matches?!0:!1}function preloader(){if(document.images){var e=new Image,t=new Image,n=new Image,r=new Image,i=new Image,s=new Image,o=new Image,u=new Image,a=new Image,f=window.matchMedia("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");if(isHidpi()){console.log("loading hi-hidpi");e.src="http://yaska.eu/static/img/about/julien_alt@2x.png";t.src="http://yaska.eu/static/img/about/eric_alt@2x.png";n.src="http://yaska.eu/static/img/about/alexis_alt@2x.png";r.src="http://yaska.eu/static/img/about/arthur_alt@2x.png";i.src="http://yaska.eu/static/img/about/laura_alt@2x.png";s.src="http://yaska.eu/static/img/about/david_alt@2x.png";o.src="http://yaska.eu/static/img/about/karl_alt@2x.png";u.src="http://yaska.eu/static/img/about/louis_alt@2x.png";a.src="http://yaska.eu/static/img/about/pierre_alt@2x.png"}else{console.log("loading non-hidpi");e.src="http://yaska.eu/static/img/about/julien_alt.png";t.src="http://yaska.eu/static/img/about/eric_alt.png";n.src="http://yaska.eu/static/img/about/alexis_alt.png";r.src="http://yaska.eu/static/img/about/arthur_alt.png";i.src="http://yaska.eu/static/img/about/laura_alt.png";s.src="http://yaska.eu/static/img/about/david_alt.png";o.src="http://yaska.eu/static/img/about/karl_alt.png";u.src="http://yaska.eu/static/img/about/louis_alt.png";a.src="http://yaska.eu/static/img/about/pierre_alt.png"}}}var $=require("jquery/core"),session=require("session"),auth_controls=require("duality/contrib/session/controls"),helpers=require("lib/helpers"),session=require("session"),markdown=require("lib/markdown");require("duality/contrib/session/events");var JQTWEET={user:"yaska_eu",numTweets:3,appendTo:"#tweets",loadTweets:function(){$.ajax({url:"http://api.twitter.com/1/statuses/user_timeline.json/",type:"GET",dataType:"jsonp",data:{screen_name:JQTWEET.user,include_rts:!0,count:JQTWEET.numTweets,include_entities:!0},success:function(e,t,n){var r='<div class="tweet">TWEET_TEXT timeData';for(var i=0;i<e.length;i++)$(JQTWEET.appendTo).append(r.replace("TWEET_TEXT",JQTWEET.ify.clean(e[i].text)).replace(/USER/g,e[i].user.screen_name).replace("timeData",'<div class="tweetTime">'+JQTWEET.timeAgo(e[i].created_at)+"</div>").replace(/ID/g,e[i].id_str))}})},timeAgo:function(e){var t=new Date,n=new Date(e);$.browser.msie&&(n=Date.parse(e.replace(/( \+)/," UTC$1")));var r=t-n,i=1e3,s=i*60,o=s*60,u=o*24,a=u*7;return isNaN(r)||r<0?"":r<i*2?"right now":r<s?Math.floor(r/i)+" seconds ago":r<s*2?"about 1 minute ago":r<o?Math.floor(r/s)+" minutes ago":r<o*2?"about 1 hour ago":r<u?Math.floor(r/o)+" hours ago":r>u&&r<u*2?"yesterday":r<u*365?Math.floor(r/u)+" days ago":"over a year ago"},ify:{link:function(e){return e.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g,function(e,t,n,r,i){var s=n.match(/w/)?"http://":"";return'<a class="twtr-hyperlink" target="_blank" href="'+s+t+'">'+(t.length>25?t.substr(0,24)+"...":t)+"</a>"+i})},at:function(e){return e.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g,function(e,t){return'<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name='+t+'">@'+t+"</a>"})},list:function(e){return e.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g,function(e,t){return'<a target="_blank" class="twtr-atreply" href="http://twitter.com/'+t+'">@'+t+"</a>"})},hash:function(e){return e.replace(/(^|\s+)#(\w+)/gi,function(e,t,n){return t+'<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23'+n+'">#'+n+"</a>"})},clean:function(e){return this.hash(this.at(this.list(this.link(e))))}}};session.on("change",function(e){console.log("session.change")});$(document).ready(function(){console.log("doc.ready");$("body").removeClass("no-js");window.location.pathname==="/about"&&preloader();if(window.location.pathname.indexOf("/services")!==-1&&window.location.hash!==""){$(".sideNavButton").removeClass("active");$('.sideNavButton a[href="'+window.location.hash+'"]').parents(".sideNavButton").addClass("active")}window.location.pathname==="/"&&(Math.random()<=.5?$("#pic").css("background-color","#293238").find("img").attr("src","/static/img/develop.png").end().show():$("#pic").css("background-color","#8dc63f").find("img").attr("src","/static/img/visual.png").end().show());document.location.href==="http://yaska.couchdb:5984/post"&&(document.location.href="http://yaska.couchdb:5984/post?"+Math.random());if(window.innerWidth>480){JQTWEET.loadTweets();$("#contactAndLegalese").css("width","30%").css("margin-left","3%");$("#tweets").css("width","66%")}$('td[data-checks="yes"]').html('<img src="/static/img/checks/yes.png" />');$('td[data-checks="no"]').html('<img src="/static/img/checks/no.png" />');for(var e=0,t=$("table").length;e<t;e++)for(var n=0,r=$($("table")[e]).find("tr").length;n<r;n++)n%2!==0&&$($($("table")[e]).find("tr")[n]).addClass("odd");$("tr").css("border","none");$(".sideNavButton a").click(function(e){$(".sideNavButton.active").removeClass("active");$(this).parents(".sideNavButton").addClass("active");$("html,body").animate({scrollTop:$($(this).attr("href")).offset().top-50},500);return!1});$("#loginButton").click(function(e){var t=$('input[name="userName"]').val().replace(" ",""),n=$('input[name="password"]').val();login(t,n,function(){console.log("cb works too");window.history!==undefined?window.history.back():window.location.replace("post")});return!1});$(".person").click(function(){var e=$(this).css("background-image"),t=$(this);isHidpi()?e.indexOf("_alt")===-1?t.css("background-image",e.replace("@2x.png","_alt@2x.png")):t.css("background-image",e.replace("_alt","")):e.indexOf("_alt")===-1?t.css("background-image",e.replace(".png","_alt.png")):t.css("background-image",e.replace("_alt",""))});$("#menuButton").click(function(){$("#nav").slideToggle("fast")})});