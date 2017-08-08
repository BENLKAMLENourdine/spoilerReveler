//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction
//1. hide spoiler
$(".spoiler span").hide();
//2. add button
$(".spoiler").append("<button>Reveal spoiler!</button>");
//3. when button pressed 
$("button").click(function(){
    //3.1 show the spoiler next the button clicked
    $(this).prev().show();
    //$(".spoiler span").show();
    //3.2 get rid of the button
    $(this).remove();
});
    