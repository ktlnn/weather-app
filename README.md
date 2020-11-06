# Weather-App [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Links
- Deployed Webpage: https://ktlnn.github.io/weather-app/
- API used: https://openweathermap.org/
    - Current Weather: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    - 5 Day Forecast: https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    
## Table of Contents
- [User Story](#user-story)
- [Business Context](#business-context)
- [How Weather App Works](#how-weather-app-works)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Questions](#questions)

## User Story
``` 
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Business Context
Traveling can be exhausting and having a weather app handy will lessen the worries of a traveler. Being able to search for any city and find the current weather, along with the next 5 days' forecast, allows travelers to plan their trip accordingly.

## How Weather App Works
Weather App uses an OpenWeatherMap API key that allows for the application to render the current weather and a 5 day forecast. The cards are created dynamically and appear on search. The 5 day weather forecast function has a unique for loop that loops through the 5 day forecast object provided by the API key and create a card for each day. Adding a class to the dynamically created cards allows for the styling to appear once the search is completed. Each weather card displays the searched city's name, the date, temperature, humidity, wind-speed, and UV index.

## Screenshots
![current-day-weather](/assets/images/current-weather.png)
![five-day-forecast-screenshot](/assets/images/forecast.png)

## Demo 
![weather-app-demp](/assets/images/weather-app-demo.gif)

## Questions
If you have any questions about Weather App, feel free to contact me at: ktlnn.nguyen@gmail.com
