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
            var comicName = "";
            var comicURI = "";
            var eventName = "";
            var eventURI = "";
            var seriesName = "";
            var seriesURI = "";
            var storyName = "";
            var StoryURI = "";
            var authors = "";
            var previewLink = "";
            var description = "";
            marvelContent += "<table><tr><th>Image</th><th>Name</th></tr>";
            //Characters
            for (var i = 0; i < response.data.results.length; i++) {
                var character = response.data.results[i];
                characterName = character.name;
                characterURI = character.resourceURI;
                characterDescription = character.description;
                if (character.thumbnail == null) {
                    thumbExt = "";
                    thumbPath = "";
                }
                else {
                    thumbExt = character.thumbnail.extension;
                    thumbPath = character.thumbnail.path;
                }
                marvelContent += "<tr><td><img src=\"" + thumbPath + "." + thumbExt + "\" width=\"200\" height=\"200\"></img></td><td>Character: " + characterName + ": " + characterDescription + "</td></tr>";
                //                //comics
                //                for (var x = 0; x < response.data.results[i].comics.items.length; x++) {
                //                    var comic = response.data.results[i].comics.items[x];
                //                    comicName = comic.name;
                //                    comicURI = comic.resourceURI;
                //                    marvelContent += "<tr><td></td><td>Comic: " + comicName + "</td></tr>";
                //                }
                //                //events
                //                for (var x = 0; x < response.data.results[i].events.items.length; x++) {
                //                    var event = response.data.results[i].events.items[x];
                //                    eventName = event.name;
                //                    eventURI = event.resourceURI;
                //                    marvelContent += "<tr><td></td><td>Event: " + eventName + "</td></tr>";
                //                }
                //                //series
                //                for (var x = 0; x < response.data.results[i].series.items.length; x++) {
                //                    var series = response.data.results[i].series.items[x];
                //                    seriesName = series.name;
                //                    seriesURI = series.resourceURI;
                //                    marvelContent += "<tr><td></td><td>Series: " + seriesName + "</td></tr>";
                //                }
                //                //stories
                //                for (var x = 0; x < response.data.results[i].stories.items.length; x++) {
                //                    var story = response.data.results[i].stories.items[x];
                //                    storyName = story.name;
                //                    storyURI = story.resourceURI;
                //                    marvelContent += "<tr><td></td><td>Story: " + storyName + "</td></tr>";
                //                }
            } // server response
            //attribution
            marvelContent += "<tr><td></td><td>" + attributionHTML + "</td></tr>";
            marvelContent += "</table>";
            document.getElementById("marvelContent").innerHTML += marvelContent;
        }
    });
}