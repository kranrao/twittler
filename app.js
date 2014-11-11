$(document).ready(function(){
  var $body = $('body');
  $body.html('');
  // What is the purpose of this?

  var displayTweets = function(){
    var displayedTweetCount = $('div').length - 1;
    // Counts the number of tweets already displayed - 1 to normalize with the index variable
    var index = streams.home.length - 1;
    // Counts the index of the variable holding the number of tweets generated
    while(index > displayedTweetCount){
      // initially 10 > -1
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
      $tweet.appendTo($body);
      index -= 1;
    }
    setTimeout(function(){
      displayTweets();
    }, 1);
    // Reruns to search for new tweets
    // Why does an error occur when interval is 0 (instantaneous)?
    // Paused for now: save memory
  }
  displayTweets();
  // Begins displayTweets loop

});