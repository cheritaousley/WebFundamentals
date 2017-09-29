$(document).ready(function(){
    $(".red").click(function(){
        $(".red").css("color","red");
    });
    $(".slide").click(function(){
        $(".slide").slideToggle("slow");
    });
    $(".app").click(function(){
        $(".Append").append("<p>MAGIC P</p>");
    });
});