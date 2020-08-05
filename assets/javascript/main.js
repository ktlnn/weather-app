$(document).ready(function(){


var apiKey = "20429f05beb7b7ddca41ce6d64ba493b";

$("#search-button").click(function(event){
    console.log(event.target);
    callWeatherApi();
})

var callWeatherApi = function(cityInput){
    var cityInput = $("#city-name").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityInput + "&appid=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
}
})
