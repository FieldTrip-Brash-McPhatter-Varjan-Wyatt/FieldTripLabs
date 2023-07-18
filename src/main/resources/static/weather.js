"use strict";
var mykey = config.WEATHER_KEY;
$(document).ready(function () {
    function updateCards(lat, lng) {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: mykey,
            lat: lat,
            lon: lng,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            //reset city:
            $("#city").empty();
            //reset cards:
            $("#cards").empty();
            $("#city").append(`Location: ${data.city.name.toUpperCase()}`);
            for (let i = 0; i < data.list.length; i = i + 8) {
                $("#cards").append(`
                    <div class="card">
                        <div class="cardHeader"><p>${data.list[i].dt_txt.slice(0, 10)}</p></div>
                        <hr>
                        <div class="card-body">
                            <div class="temperature"><p>Temperature<br> Low :${Math.round(data.list[i].main.temp_min)}°F  High :${Math.round(data.list[i].main.temp_max)}°F</p></div>
                            <hr>
                            <div class="humidity"><p>Humidity:${data.list[i].main.humidity} %</p></div>
                            <hr>
                            <div class="real-feel"><p>Feels like:${Math.round(data.list[i].main.feels_like)} °F</p></div>
                            <hr>
                            <div class="description">
                                ${data.list[i].weather[0].description.toUpperCase()}<br>
                                <img class="image" src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt='Weather icon'>
                            </div>
                            <hr>
                            <div class="wind"><p>Wind: ${Math.round(data.list[i].wind.speed)} MPH</p></div>
                        </div>
                    </div>
                `);
            }
        });
    }

    $("#searchButton").click(function () {
        var location = $("#searchInput").val();
        if (location.trim() !== "") {
            var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${mykey}`;

            // Make the API request to get the latitude and longitude
            $.get(apiUrl, function (geoData) {
                if (geoData.length === 0) {
                    $("#city").html("<p>No location found.</p>");
                    $("#cards").empty();
                } else {
                    var lat = geoData[0].lat;
                    var lng = geoData[0].lon;
                    updateCards(lat, lng);
                }
            }).fail(function () {
                $("#city").html("<p>An error occurred while fetching location data.</p>");
                $("#cards").empty();
            });
        }
    });
});
