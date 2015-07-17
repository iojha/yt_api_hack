$(function() {

  $("#search-form").submit(function(event) {
    event.preventDefault();
    $("#search-results").empty();

  var searchTerm = $('#query').val();
  search(searchTerm)
  });

  function search(searchTerm) {
    var params = {
      key: "AIzaSyDEXI_y_MOBESNZOweABu667Ey27SlXCwc",
      part: "snippet", //The snippet object contains basic details about the video, such as its title, description, and category.
      type:'video',
      q: searchTerm, 
      maxResults: 10
    }

    $.getJSON("https://www.googleapis.com/youtube/v3/search", params, function(data) {
      
      var resultsArray = data.items;
      var arrayLength = resultsArray.length;
      
      for (var i = 0; i < arrayLength; i++) {
        console.log(resultsArray[i].id.videoId)
        $("#search-results").append("<a href=https://www.youtube.com/watch?v="+
          resultsArray[i].id.videoId+"><img src="+resultsArray[i].snippet.thumbnails.medium.url+"><p>"+resultsArray[i].snippet.title+"</p></a>");

      };
    });

  };
});