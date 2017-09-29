$(document).ready(function () {
    for (var i = 1; i <= 152; i++) {
        $('.pokemon_box').append("<img id='"+i+"' src='http://pokeapi.co/media/img/" + i + ".png' >");
    }
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "http://pokeapi.co/api/v2/pokemon/";
    $("img").click(function () {
        var pokemon_id = $(this).attr("id");
        $.get(proxyurl + url + pokemon_id, function (res) {
             console.log(res);
             $(".pokedex").html("<img src='" +  res.sprites.front_default + "'>");
             $(".pokedex").append(res.name + " " + res.types.type + " " + res.height + " " + res.weight);
         }, "json");
    });
    });