
$(document).ready(function(){
    $("#searchBtn").click(function(){
        var movie = $('#inputArea').val();
        $('#inputArea').val("");
        var url = "https://www.omdbapi.com/?apikey=91df3f70&t="+movie
      $.get(url, function(data, status){
          $('#searchResult').empty();
        $("<img />",{src:data.Poster,id: "movieImg"}).appendTo("#searchResult");
        $("<h3 />",{text:"Title: "+data.Title}).appendTo("#searchResult");
        $("<h3 />",{text:"Director: "+data.Director}).appendTo("#searchResult");
        $("<h3 />",{text:"Actors: "+data.Actors}).appendTo("#searchResult");
        $("<h3 />",{text:"Year: "+data.Year}).appendTo("#searchResult");
        $("<h3 />",{text:"IMDB: "+data.imdbRating}).appendTo("#searchResult");

      });
    });
  });
