// Global visitor variable set
var visitor = 'kranrao';

$(document).ready(function(){

// Navbar

  // Navbar dropdown
  $('.dropdown-toggle').mouseover(function(){
    $('.dropdown-menu').show();
  });
  $('.dropdown-menu').mouseleave(function(){
    $(this).hide();
  });

  // Placeholder for code to make dropdown-menu hide if anywhere on the screen is clicked

  //Navbar collapsed//
  //Placeholder for code to make collapsed navbar show when clicked

//Content

  // Visitor submitted tweets enter the display and status-box related items are cleared 
  $('.update-btn').click(function(){
    // Message in status-box captured and sent
    var visitorPost = $('.status-box').val();
    writeTweet(visitorPost);

    // Resets status-box, counter, and update-btn
    $('.status-box').val('');
    $('.counter').text('140');
    $('.update-btn').addClass('disabled');
  });

  $('.status-box').keyup(function(event){
    // Updates counter based on what visitor types in status-box
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);

    // User only able to submit if characters are between 1 and 141 
    if(charactersLeft < 0){
      $('.update-btn').addClass('disabled');
    } else if(charactersLeft === 140){
      $('.update-btn').addClass('disabled');
    } else{
      $('.update-btn').removeClass('disabled');
    }
  });
  $('.update-btn').addClass('disabled');

  // Checks for and displays any new user tweets
  var displayTweets = function(){
    var displayedTweetCount = $('.tweet').length - 1;
    var index = streams.home.length - 1;
    while(index > displayedTweetCount){
      var tweet = streams.home[index];

      // Uses moment.js library to format timestamp
      // Does the new timestamp update? i.e. seconds ago -> minutes ago -> etc.
      var formattedTime = moment(tweet.created_at).fromNow();
      
      // Creates new tweet
      $("<div class='container tweet'><div class='row'><div class='tweet-profile col-xs-4 col-md-2'><img src='./img/" + tweet.user + ".jpg'><span>@" + tweet.user + "</span></div><div class='tweet-update-group col-xs-8 col-md-10'><div class='tweet-content'>" + tweet.message + "</div><div class='timestamp'><em>" + formattedTime + "</em></div></div></div></div>").prependTo($('.feed'));

      index -= 1;
    }
    // Reruns every 1000 miliseconds to search for new tweets
    setTimeout(function(){
      displayTweets();
    }, 1000);
  }
  displayTweets();
});