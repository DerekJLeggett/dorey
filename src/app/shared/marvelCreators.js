var offset = 0;
$(document).ready(function () {
    getCreators(offset);
});
$("#previous10").click(function () {
    offset -= 10;
    if (offset < 0) {
        offset = 0;
    }
    getCreators(offset);
});
$("#next10").click(function () {
    offset += 10;
    getCreators(offset);
});
function getCreators(offSet) {
    $("#marvelCreatorsError").empty();
    $("#marvelCreatorsContent").empty();
    $.ajax({
        url: "http://gateway.marvel.com:80/v1/public/creators?",
        data: {
            apikey: "1acc0272c26b58f06f418cf285aaf60c"
           , limit: 10
           , offset: offset
        },
        success: function (response) {
            var marvelCreatorsContent = "<table><tr><th>Image</th><th>Name</th><th>Comics</th><th>Events</th><th>Series</th><th>Stories</th></tr>";
            var attributionHTML = response.attributionHTML;
            var attributionText = response.attributionText;
            var creatorName = "";
            var thumbExt = "";
            var thumbPath = "";
            var detailURL = "";
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
            for (var i = 0; i < response.data.results.length; i++) {
                var creator = response.data.results[i];
                creatorName = creator.fullName;
                if (creator.thumbnail == null) {
                    thumbExt = "";
                    thumbPath = "";
                }
                else {
                    thumbExt = creator.thumbnail.extension;
                    thumbPath = creator.thumbnail.path;
                }
                detailURL = creator.urls[0].url;
                //comics that character appears in
                comicList = "";
                for (var x = 0; x < response.data.results[i].comics.items.length; x++) {
                    var comic = response.data.results[i].comics.items[x];
                    comicName = comic.name;
                    comicURI = comic.resourceURI;
                    comicList += "<a class=\"minilink\" href=\"" + comicURI + "\">" + comicName + "</a><br />";
                }
                //events that character appears in
                eventList = "";
                for (var x = 0; x < response.data.results[i].events.items.length; x++) {
                    var event = response.data.results[i].events.items[x];
                    eventName = event.name;
                    eventURI = event.resourceURI;
                    eventList += "<a class=\"minilink\" href=\"" + eventURI + "\">" + eventName + "</a><br />";
                }
                //series the character appears in
                seriesList = "";
                for (var x = 0; x < response.data.results[i].series.items.length; x++) {
                    var series = response.data.results[i].series.items[x];
                    seriesName = series.name;
                    seriesURI = series.resourceURI;
                    seriesList += "<a class=\"minilink\" href=\"" + seriesURI + "\">" + seriesName + "</a><br />";
                }
                //stories
                storiesList = "";
                for (var x = 0; x < response.data.results[i].stories.items.length; x++) {
                    var story = response.data.results[i].stories.items[x];
                    storyName = story.name;
                    storyURI = story.resourceURI;
                    storiesList += "<a class=\"minilink\" href=\"" + storyURI + "\">" + storyName + "</a><br />";
                }
                marvelCreatorsContent += "<tr><td><img src=\"" + thumbPath + "." + thumbExt + "\" width=\"200\" height=\"200\"></img></td><td><a href=\"" + detailURL + "\" target=\"_blank\">" + creatorName + "</a></td><td>" + comicList + "</td><td>" + eventList + "</td><td>" + seriesList + "</td><td>" + storiesList + "</td></tr>";
            }
            marvelCreatorsContent += "<tr><td></td><td></td><td>" + attributionHTML + "</td></tr>";
            marvelCreatorsContent += "</table>";
            document.getElementById("marvelCreatorsContent").innerHTML += marvelCreatorsContent;
        }
    });
}