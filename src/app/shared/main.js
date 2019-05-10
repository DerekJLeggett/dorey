//$(document).ready(function () {
//       $('#content').load('LoriandDerek.html');
//});
//Change the link field color on mouseover
$(document).ready(function () {
    $("a").mouseover(function () {
        $(this).css("background-color", "red");
    });
});
//Animate the title
$(document).ready(function () {
    $("div#title").animate({ left: "100px" }, "slow");
    $("div#title").animate({ fontSize: "50px" }, "slow");

});
//fade in the picture
$(document).ready(function () {
    $('#dlwedding').hide().fadeIn(3000);
});

//Change the link field color on mouseout
$(document).ready(function () {
    $("a").mouseout(function () {
        $(this).css("background-color", "pink");
    });
});
//Hide the clicked paragraph
$(document).ready(function () {
    $("p.hideable").click(function () {
        $(this).hide(1000);
    });
});
