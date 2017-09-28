$(document).ready(function() {
    $(".addUser").click(function(){
        var first_name= $("#first_name").val();
        var last_name = $("#last_name").val();
        var new_card = (first_name + " " + last_name)
        var description = $("#description").val();
        $(".wrapper2").append(new_card);
    $(".wrapper2").append("<a href='#'>Click for description </a>")
});
    $(".wrapper2").on("click", "a", function () {
        $(this).hide();
        $(".wrapper2").append("<p>" + $("#description").val() + "</p>")
    });
});