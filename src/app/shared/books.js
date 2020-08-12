$(document).ready(function () {

    $("#search").click(function () {

        var keyword = $("#keyword").val();

        if (keyword == "") {

            $("#bookContent").empty();

            $("#bookError").html("<p class=\"error\">Please enter a search criteria.</p>");

            return;

        }

        else {



        }

        //$(this).hide();

        $("#bookContent").empty();

        $("#bookError").empty();

        $.ajax({

            url: "https://www.googleapis.com/books/v1/volumes?",



            // the name of the callback parameter, as specified by the YQL service

            jsonp: "callback",



            // tell jQuery we're expecting JSONP

            dataType: "jsonp",



            // tell YQL what we want and that we want JSON

            data: {

                q: keyword,

                format: "json"

            },



            // work with the response

            success: function (response) {

                var bookContent = "";

                var smallThumbnail = "";

                var title = "";

                var authors = "";

                var previewLink = "";

                var description = "";

                bookContent += "<table><tr><th>Image</th><th>Title</th><th>Author</th><th>Description</th></tr>";

                for (var i = 0; i < response.items.length; i++) {

                    var item = response.items[i];

                    if (item.volumeInfo.imageLinks == undefined) {

                        smallThumbnail = "";

                    }

                    else {

                        smallThumbnail = item.volumeInfo.imageLinks.smallThumbnail;

                    }

                    title = item.volumeInfo.title;

                    authors = item.volumeInfo.authors;

                    previewLink = item.volumeInfo.previewLink;

                    if (item.volumeInfo.description == undefined) {

                        description = "Description not available.";

                    }

                    else {

                        description = item.volumeInfo.description;

                    }

                    // in production code, item.text should have the HTML entities escaped.

                    bookContent += "<tr><td><a href=\"" + previewLink + "\" target=\"_blank\"><img src=\"" + smallThumbnail + "\"></img></a></td><td>" + title + "</td><td>" + authors + "</td><td>" + description + "</td></tr>";

                } // server response

                bookContent += "</table>";

                document.getElementById("bookContent").innerHTML += bookContent;

            }

        });

    });

});