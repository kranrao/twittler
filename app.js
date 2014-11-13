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
      var $tweet = $("<div class='tweet'></div>");
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
      $tweet.prependTo($feed);
      index -= 1;
    }
    setTimeout(function(){
      displayTweets();
    }, 1000); 
    // Reruns to search for new tweets
    // Why does an error occur when interval is 0 (instantaneous)?
  }
  displayTweets();
  // Begins displayTweets loop

});