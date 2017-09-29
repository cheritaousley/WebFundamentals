$(document).ready(function () {
    $('img').click(function () {
        var url = "https://anapioficeandfire.com/api/houses/"
        var house= $(this).attr("id")
        console.log(url);
        $.get(url + house, function(res) {
            console.log(res);
            $(".House_details").append(res.name + "<br></br>" + res.founded + "<br></br> " + res.regioin + "<br></br>" + res.words + "<br></br>" + "<br></br>" + res.titles[0]);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
