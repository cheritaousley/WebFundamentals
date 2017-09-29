$(document).ready(function () {
    $('.button').click(function () {
        var key ="&&appid=5afb8958dd5b07baea36fbae9b5bec61";
        var url = ("http://api.openweathermap.org/data/2.5/weather?q=" + key );
        var city= $("#search_weather").val();
        var proxyurl = ("http://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=imperial' + key );
        console.log(proxyurl);
        $.get(proxyurl, function (res) {
            console.log(res);
            $(".output").append( res.name + "<br></br>" + res.main.temp  + "<br></br> " +  res.main.humidity );
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
