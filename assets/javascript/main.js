$(document).ready(function(){

var apiKey = "5ea2b6678193a631fc563bd0b047bbba";

$("#search-button").click(function(event){
    callWeatherApi();
    callFiveDayApi();
});

var callWeatherApi = function(cityInput){
    var cityInput = $("#city-name").val();
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityInput + "&appid=" + apiKey;
    $.ajax({
        url: currentWeather,
        method: "GET"
    }).then(function(response){
        var weatherIcon = response.weather[0].icon;
        $("#cityName").addClass("card-body").html(response.name + " (" + new Date().toLocaleDateString() + ")");
        $("#mainIcon").addClass("card-body card-icon").html("<img src='" + "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png" + "'>")
        $("#temperature").addClass("card-body card-text").html("Temperature: " + response.main.temp + " &#8457;");
        $("#humidity").addClass("card-body card-text").text("Humidity: " + response.main.humidity + "%");
        $("#wind-speed").addClass("card-body card-text").text("Wind Speed: " + response.wind.speed + " MPH ");
    });
}

var callFiveDayApi = function(cityInput){
    var cityInput = $("#city-name").val();
    var fivDayWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&units=imperial" + "&appid=" + apiKey;
    $.ajax({
        url: fivDayWeather,
        method: "GET"
    }).then(function(results){
        // openweatherapi has 40 objects in array for 5 day forecast
        // this for loop is set up so that it skips over the repeated date 
        // shows the next 5 days instead of same day 5 times
        for( var i = 6; i < results.list.length; i += 8) {
            
            let createCardContainer = $("<div>").addClass("card-container").attr("id", "card" + i);;
            $(".forecast").append(createCardContainer);
            var containerId = $("#card" + i);
            let createCard = $("<div>").addClass("create-card");
            let createCardIcon = $("<div>").addClass("card-icon");
            let createCardContent = $("<div>").addClass("card-content");

            let weather = results.list[i];
            let title = results.city.name;
            let icon = weather.weather[0].icon;
            createCardContent.append($("<h1>").addClass("card-title").text(title + " (" + new Date(weather.dt_txt).toLocaleDateString() + ")"));
            createCardIcon.append($("<img>").addClass("card-icon").attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png"));
            createCardContent.append(createCardIcon);

            let temp = weather.main.temp;
            
            let humidity = weather.main.humidity;
            let windSpeed = weather.wind.speed;
            createCardContent.append($("<p>").addClass("temp").html("Temperature: " + temp + " &#8457;"));
            createCardContent.append($("<p>").addClass("humidity").html("Humidity: " + humidity + "%"));
            createCardContent.append($("<p>").addClass("windSpeed").html("Wind Speed: " + windSpeed + " MPH "));
            createCard.append(createCardContent);
            containerId.append(createCard);            
        }
    })
}

});



