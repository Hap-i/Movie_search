
$(document).ready(function(){
    console.log("hello world !")
    $("#searchBtn").click(function(){
        var movie = $('#inputArea').val();
        console.log(movie)
        $('#inputArea').val("");
        var url = "http://www.omdbapi.com/?apikey=91df3f70&t="+movie
        console.log(url)
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