$(document).ready(function () {
    // Weather API settings
    const apiKey = 'b4427c033bmshb38ab485978438ep198683jsn71d3fc98b8b1';
    const apiUrl = 'https://visual-crossing-weather.p.rapidapi.com/history';

    // Search button click event
    $('#searchButton').click(function () {
        // Get the city name and date from the input fields
        const cityName = $('#searchInput').val().trim();
        const date = new Date($('#dateInput').val());

        // Check if the city name is not empty and a valid date is selected
        if (cityName !== '' && !isNaN(date.getTime())) {
            // Clear the previous weather data
            $('#weatherData').html('');

            // Adjust the date range for fetching weather data (plus 6 additional days from the prior year)
            const startDateTime = new Date(date);
            startDateTime.setFullYear(startDateTime.getFullYear() - 1);
            const endDateTime = new Date(startDateTime);
            endDateTime.setDate(endDateTime.getDate() + 6);

            // Convert dates to ISO format for the API
            const startISO = startDateTime.toISOString();
            const endISO = endDateTime.toISOString();

            // Make the API request
            $.ajax({
                url: apiUrl,
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
                },
                data: {
                    startDateTime: startISO,
                    endDateTime: endISO,
                    aggregateHours: '24',
                    location: cityName,
                    contentType: 'json',
                    unitGroup: 'us',
                    shortColumnNames: 'false'
                },
                success: function (response) {
                    console.log(response);
                    // Process the weather data and display it on the page
                    if (response.locations && response.locations[cityName]) {
                        const weatherData = response.locations[cityName].values;
                        let weatherHtml = `<h3>Prior Year Weather in ${cityName}</h3>`;

                        // Loop through the weather data for the selected dates
                        for (const data of weatherData) {
                            weatherHtml += `
                                <p>Date: ${data.datetimeStr}</p>
                                <p>Temperature: ${data.temp}</p>
                                <p>Weather: ${data.conditions}</p>
                                <hr>
                            `;
                        }

                        $('#weatherData').html(weatherHtml);
                    } else {
                        $('#weatherData').html('<p>No weather data found for the city.</p>');
                    }
                },
                error: function (error) {
                    console.error('An error occurred while fetching weather data:', error);
                    $('#weatherData').html('<p>An error occurred while fetching weather data.</p>');
                }
            });
        }
    });
});


