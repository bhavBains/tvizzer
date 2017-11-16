/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).on("ready", function() {
  function createTweetElement(tweet) {
    var tweetBody =     tweet.content.text,
        tweetUserName = tweet.user.name,
        tweetAvatar =   tweet.user.avatars.small,
        tweetHandler =  tweet.user.handle,
        tweetFooter =   tweet.created_at;

    const $tweet = 
      `<article>
      <header><img src="${tweetAvatar}">${tweetUserName}<p class="userId">${tweetHandler}</p></header>
      <div class="recent-tweets-body">
        <p class="">${tweetBody}</p>
      </div>
      <footer>${tweetFooter}</footer>
      </article>` ;
    
    return $tweet;
  }

  function renderTweets(tweets) {
    tweets.forEach ((tweet) =>{
        $(".recent-tweets").append(createTweetElement(tweet));
    })
  }

  //renderTweets(data);

  function loadTweets() {
    $.get("/tweets/",function(data) {
      return renderTweets(data);
    }) 
  }
  loadTweets();

  $("form").on("submit", function(event) {
    event.preventDefault();
    $.post("/tweets/", $(this).serialize(), (data) => {
      console.log("data: " + data);
    })

  });
});
