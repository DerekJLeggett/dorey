// JScript File
//document.write("Hello!");
function displaymessage()
{
alert("Hello World!");
}
//Change the link field color on mouseover
$(document).ready(function(){
	$("a").mouseover(function(){
		$(this).css("background-color","red"); 
	});
});
//Animate the title
$(document).ready(function(){
        $("div#title").animate({left:"100px"},"slow");
	$("div#title").animate({fontSize:"50px"},"slow");

});
//fade in the picture
 $(document).ready(function () {
        $('#dlwedding').hide().fadeIn(3000);
    });

//Change the link field color on mouseout
$(document).ready(function(){
	$("a").mouseout(function(){
		$(this).css("background-color","pink"); 
	});
});
//Hide the clicked paragraph
$(document).ready(function(){
	$("p.hideable").click(function(){
		$(this).hide(1000);
	});
});
//Animate a div with text
$(document).ready(function(){
	  $("button.animate2").click(function(){
	    $("div#animate2").animate({left:"100px"},"slow");
	    $("div#animate2").animate({fontSize:"3em"},"slow");
	  });
	});
	
function validateFields() {
    var email = document.getElementById("email").value
    if(validateZipCode('zipCode')) {
        if(isValidEmail(email)) {
        return true;
        }
        else {
        alert("Please enter a valid email address.");
        return false;
        }
    }
    else {
    return false;
    }
}
function validateZipCode(id){
    var zipCode = document.getElementById(id).value
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    if(zipCodePattern.test(zipCode)) {
    return true;
    }
    else {
    alert("Please enter a valid Zip Code.");
    return false;
    }
}
function isValidEmail(str) {
   return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
}
function populateSelects() {
populateSelect('morningLowTemp', '-50', '50');
populateSelect('daytimeHighTemp', '0', '120');
populateSelect('daytimeChance', '0', '100');
populateSelect('nighttimeChance', '0', '100');
}

function populateSelect(id, start, end) {
var select = document.getElementById(id);
select.options.length = 0; // clear out existing items
for(var i=start; i < end; i++) { 
    select.options.add(new Option(i, i)) }
}
function featureComing() {
    alert("Feature coming soon, please check back later.");
    return false;
}
