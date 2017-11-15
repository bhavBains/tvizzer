$(document).ready(function(){
  $('#tweet-textarea').on('keyup', characterCount);
  //$('#tweet-textarea').on('paste', characterCount); //doesnt need anymore  
})  

//To count Character of the tweet
function characterCount(){
  var counter = $(this).parents(".container").find(".counter")
  var length = $(this).val().length;
  var maxValue = 140;
  if (length >= 140) {
    counter.text((maxValue-length)).css({color:'red'});
  } else {
    counter.text((maxValue-length)).css({color:'black'});  
  }
}