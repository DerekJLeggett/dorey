var offset = 0;
$(document).ready(function () {
     getCharacters(offset);
});
$("#previous10").click(function () {
    offset -= 10;
    if (offset < 0) {
        offset = 0;
    }
    getCharacters(offset);
});
$("#next10").click(function () {
    offset += 10;
    getCharacters(offset);
});
function getCharacters(offset) {
    $("#marvelContent").empty();
    $("#marvelError").empty();
    $.ajax({
        url: "http://gateway.marvel.com:80/v1/public/characters?",
        data: {
            apikey: "1acc0272c26b58f06f418cf285aaf60c"
            , limit: 10
            , offset: offset
        },
        // work with the response
        success: function (response) {
            var marvelContent = "";
            var attributionHTML = response.attributionHTML;
            var attributionText = response.attributionText;
            var characterName = "";
            var characterURI = "";
            var detailURL = "";
            var wikiURL = "";
            var comicLinkURL = "";
            var characterDescription = "";
            var thumbExt = "";
            var thumbPath = "";
            var previewLink = "";
            var description = "";
            marvelContent += "<table><tr><th>Image</th><th>Name</th><th>Description</th></tr>";
            //Characters
            for (var i = 0; i < response.data.results.length; i++) {
                var character = response.data.results[i];
                characterName = character.name;
                characterURI = character.resourceURI;
                characterDescription = character.description;
                detailURL = character.urls[0].url;
                //wikiURL = character.urls[1].url;
                //comicLinkURL = character.urls[2].url;
                if (character.thumbnail == null) {
                    thumbExt = "";
                    thumbPath = "";
                }
                else {
                    thumbExt = character.thumbnail.extension;
                    thumbPath = character.thumbnail.path;
                }
               
                marvelContent += "<tr onclick=\"showDialog('" + characterURI + "')\"><td><img src=\"" + thumbPath + "." + thumbExt + "\" width=\"200\" height=\"200\"></img></td><td><a href=\"" + detailURL + "\" target=\"_blank\">" + characterName + "</a></td><td>" + characterDescription + "</td></tr>";
            } 
            marvelContent += "<tr><td></td><td>" + attributionHTML + "</td></tr>";
            marvelContent += "</table>";
            document.getElementById("marvelContent").innerHTML += marvelContent;
        }
    });
}

$(function () {
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });
    //$(".minilink").click(function () {
    //    $("#dialog").dialog("open");
    //});
});
function showDialog(detailURI) {
    var characterList = "Characters: <br />";
    $("#dialog").empty();
    $.ajax({
        url: detailURI,
        data: {
            apikey: "1acc0272c26b58f06f418cf285aaf60c"
           , limit: 10
           , offset: offset
        },
        success: function (response) {
            var characterDetails = "<table><th>Comics</th><th>Events</th><th>Series</th><th>Stories</th>";
            var comicName = "";
            var comicURI = "";
            var comicList = "";
            var eventName = "";
            var eventURI = "";
            var eventList = "";
            var seriesName = "";
            var seriesURI = "";
            var seriesList = "";
            var storyName = "";
            var StoryURI = "";
            var storiesList = "";
            var authors = "";
            for (var x = 0; x < response.data.results[0].comics.items.length; x++) {
                var comic = response.data.results[0].comics.items[x];
                comicName = comic.name;
                comicURI = comic.resourceURI;
                comicList += "<a class=\"minilink\" >" + comicName + "</a><br />";
            }
            //events that character appears in
            eventList = "";
            for (var x = 0; x < response.data.results[0].events.items.length; x++) {
                var event = response.data.results[0].events.items[x];
                eventName = event.name;
                eventURI = event.resourceURI;
                eventList += "<a class=\"minilink\" href=\"" + eventURI + "\">" + eventName + "</a><br />";
            }
            //series the character appears in
            seriesList = "";
            for (var x = 0; x < response.data.results[0].series.items.length; x++) {
                var series = response.data.results[0].series.items[x];
                seriesName = series.name;
                seriesURI = series.resourceURI;
                seriesList += "<a class=\"minilink\" href=\"" + seriesURI + "\">" + seriesName + "</a><br />";
            }
            //stories
            storiesList = "";
            for (var x = 0; x < response.data.results[0].stories.items.length; x++) {
                var story = response.data.results[0].stories.items[x];
                storyName = story.name;
                storyURI = story.resourceURI;
                storiesList += "<a class=\"minilink\" href=\"" + storyURI + "\">" + storyName + "</a><br />";
            }
            characterDetails += "<tr><td>" + comicList + "</td><td>" + eventList + "</td><td>" + seriesList + "</td><td>" + storiesList + "</td></tr></table>";
            document.getElementById("dialog").innerHTML += characterDetails;
            $("#dialog").dialog("open");
        }
    });
   
    
}