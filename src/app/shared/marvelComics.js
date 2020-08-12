var offset = 0;
$(document).ready(function () {
    getComics(offset);
});
$("#previous10").click(function () {
    offset -= 10;
    if (offset < 0) {
        offset = 0;
    }
    getComics(offset);
});
$("#next10").click(function () {
    offset += 10;
    getComics(offset);
});
function getComics(offSet) {
    $("#marvelComicsError").empty();
    $("#marvelComicsContent").empty();
    $.ajax({
        url: "http://gateway.marvel.com:80/v1/public/comics?",
        data: {
            apikey: "1acc0272c26b58f06f418cf285aaf60c"
           , limit: 10
           , offset: offset
        },
        success: function (response) {
            var marvelComicsContent = "<table><tr><th>Image</th><th>Title</th><th>Description</th><th>Characters</th><th>Creators</th><th>Events</th><th>Series</th><th>Stories</th></tr>";
            var attributionHTML = response.attributionHTML;
            var attributionText = response.attributionText;
            var comicTitle = "";
            var comicDescription = "";
            var thumbExt = "";
            var thumbPath = "";
            var detailURL = "";
            var characterName = "";
            var characterURI = "";
            var characterList = "";
            var creatorName = "";
            var creatorURI = "";
            var creatorList = "";
            var eventName = "";
            var eventURI = "";
            var eventList = "";
            var seriesName = "";
            var seriesURI = "";
            var seriesList = "";
            var storyName = "";
            var StoryURI = "";
            var storiesList = "";
            for(var i = 0; i < response.data.results.length; i++){
                var comic = response.data.results[i];
                comicTitle = comic.title;
                if (comic.description == null) {
                    comicDescription = "";
                }
                else {
                    comicDescription = comic.description;
                }
                if (comic.thumbnail == null) {
                    thumbExt = "";
                    thumbPath = "";
                }
                else {
                    thumbExt = comic.thumbnail.extension;
                    thumbPath = comic.thumbnail.path;
                }
                detailURL = comic.urls[0].url;
                //characters that appear in the comic
                characterList = "";
                for (var x = 0; x < response.data.results[i].characters.items.length; x++) {
                    var character = response.data.results[i].characters.items[x];
                    characterName = character.name;
                    characterURI = character.resourceURI;
                    characterList += "<a class=\"minilink\" href=\"" + characterURI + "\">" + characterName + "</a><br />";
                }
                //creators of the comic
                creatorList = "";
                for (var x = 0; x < response.data.results[i].creators.items.length; x++) {
                    var creator = response.data.results[i].creators.items[x];
                    creatorName = creator.name;
                    creatorURI = creator.resourceURI;
                    creatorList += "<a class=\"minilink\" href=\"" + creatorURI + "\">" + creatorName + "</a><br />";
                }
                //events that character appears in
                eventList = "";
                for (var x = 0; x < response.data.results[i].events.items.length; x++) {
                    var event = response.data.results[i].events.items[x];
                    eventName = event.name;
                    eventURI = event.resourceURI;
                    eventList += "<a class=\"minilink\" href=\"" + eventURI + "\">" + eventName + "</a><br />";
                }
                //series the comic appears in
                seriesList = "";
                var series = response.data.results[i].series;
                    seriesName = series.name;
                    seriesURI = series.resourceURI;
                    seriesList += "<a class=\"minilink\" href=\"" + seriesURI + "\">" + seriesName + "</a><br />";
                //stories
                storiesList = "";
                for (var x = 0; x < response.data.results[i].stories.items.length; x++) {
                    var story = response.data.results[i].stories.items[x];
                    storyName = story.name;
                    storyURI = story.resourceURI;
                    storiesList += "<a class=\"minilink\" href=\"" + storyURI + "\">" + storyName + "</a><br />";
                }
                marvelComicsContent += "<tr><td><img src=\"" + thumbPath + "." + thumbExt + "\" width=\"200\" height=\"200\"></img></td><td><a href=\"" + detailURL + "\" target=\"_blank\">" + comicTitle + "</a></td><td>" + comicDescription + "</td><td>" + characterList + "</td><td>" + creatorList + "</td><td>" + eventList + "</td><td>" + seriesList + "</td><td>" + storiesList + "</td></tr>";
            }
            marvelComicsContent += "<tr><td></td><td></td><td>" + attributionHTML + "</td></tr>";
            marvelComicsContent += "</table>";
            document.getElementById("marvelComicsContent").innerHTML += marvelComicsContent;
        }
    });
}