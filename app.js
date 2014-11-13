$(document).ready(function(){
  var $body = $('body');
  var $feed = $('.feed');

/* Navbar */

  /* Navbar dropdown */

  $('.dropdown-toggle').mouseover(function(){
    $('.dropdown-menu').show();
  });

  $('.dropdown-menu').mouseleave(function(){
    $(this).hide();
  });

  /* Placeholder for code to make dropdown-menu hide if anywhere on the screen is clicked */

  /* Navbar collapsed */

  /* Placeholder for code to make collapsed navbar show when clicked */

/* Content */

  var displayTweets = function(){
    var displayedTweetCount = $('.tweet').length - 1;
    var index = streams.home.length - 1;
    while(index > displayedTweetCount){
      var tweet = streams.home[index];

      // Uses moment.js library to format timestamp
      var formattedTime = moment(tweet.created_at).fromNow();
      
      // Creates new tweet
      $("<div class='container tweet'><div class='row'><div class='tweet-profile col-xs-4 col-md-2'><img src='./img/" + tweet.user + ".jpg'><span>@" + tweet.user + "</span></div><div class='tweet-update-group col-xs-8 col-md-10'><div class='tweet-content'>" + tweet.message + "</div><div class='timestamp'><em>" + formattedTime + "</em></div></div></div></div>").prependTo($feed);

      index -= 1;
    }
    setTimeout(function(){
      displayTweets();
    }, 1000);
    // Reruns every 1000 miliseconds to search for new tweets
    // Why does an error occur when interval is 0 (instantaneous)?
  }
  displayTweets();
});