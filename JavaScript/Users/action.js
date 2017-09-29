$(document).ready(function(){
    $(".addUser").click(function() {
        console.log("FORM HAS BEEN CLICKED");
        var first_name= $("#first_name").val();
        var last_name=$("#last_name").val();
        var email=$("#email").val();
        var contact=$("#contact").val();
        var new_row = "<tr><td>" + first_name + "</td><td>" + last_name + "</td><td>" + email + "</td><td>" + contact + "</td></tr>"
        $(".table").append(new_row);
    });
});