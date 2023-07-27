// Global variables

var itemList;
var currentListName = "";
var weatherKey = config.WEATHER_KEY
$(document).ready(function () {
    const apiKey = weatherKey;
    const apiUrl = 'https://visual-crossing-weather.p.rapidapi.com/history';


    // Fetch weather when the destination or date changes
    $('#weatherModal').on('show.bs.modal', function (e) {
        const cityName = $('#autocomplete').val().trim();
        const date = new Date($('#startDate').val());

        if (cityName !== '' && !isNaN(date.getTime())) {
            fetchWeatherData(cityName, date);
        }
        console.log(cityName, date);
    });
    console.log('Fetching weather data...');


    function fetchWeatherData(cityName, date) {
        $('#weatherData').html('');

        const startDateTime = new Date(date);
        startDateTime.setHours(12);
        startDateTime.setFullYear(startDateTime.getFullYear() - 1);

        const endDateTime = new Date(startDateTime);

        endDateTime.setDate(endDateTime.getDate() + 6);

        const startISO = startDateTime.toISOString();
        const endISO = endDateTime.toISOString();

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
                if (response.locations && response.locations[cityName]) {
                    const weatherData = response.locations[cityName].values;
                    let weatherHtml = `<h3>Weather in ${cityName}</h3><div class="weather-container d-flex flex-row justify-content-around flex-wrap">`;

                    for (const data of weatherData) {
                        const dateTime = new Date(data.datetimeStr);

                        const weekdayOptions = { weekday: 'long' };
                        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

                        const formattedWeekday = dateTime.toLocaleString('en-US', weekdayOptions);
                        const formattedDate = dateTime.toLocaleString('en-US', dateOptions);

                        weatherHtml += `
                <div class="card text-center" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${formattedWeekday}<br>${formattedDate}</h5>
                    <p class="card-text">Temperature: ${data.temp}</p>
                    <p class="card-text">Weather Conditions: 
                    <br>
                        ${data.conditions}</p>
                  </div>
                </div>`;
                    }

                    $('#weatherData').html(weatherHtml);

                } else {
                    $('#weatherData').html('<p>No weather data found for the city.</p>');
                }
            },
            error: function () {

                $('#weatherData').html('<p>An error occurred while fetching weather data.</p>');
            }
        });
    }
});


// Function to load the selected packing list
    function loadPackingList(listIndex) {
        var listName;
        switch (listIndex) {
            case '1':
                listName = ("Summer Destination");
                itemList = [
                    {text: "Lightweight and breathable clothing", completed: false},
                    {text: "Swimwear", completed: false},
                    {text: "Sunscreen", completed: false},
                    {text: "Hat and sunglasses", completed: false},
                    {text: "Sandals or flip-flops", completed: false},
                    {text: "Light, comfortable walking shoes", completed: false},
                    {text: "Travel-size toiletries", completed: false},
                    {text: "Insect repellent", completed: false},
                    {text: "Travel adapter for electronics", completed: false},
                    {text: "Beach towel", completed: false},
                    {text: "Daypack or beach bag", completed: false},
                    {text: "Reusable water bottle", completed: false},
                    {text: "Medications and basic first aid kit", completed: false},
                    {text: "Travel documents (passport, ID, tickets)", completed: false},
                    {text: "Cash and/or credit cards", completed: false}
                ];
                break;

            case '2':
                listName = ("Beach Destination");
                itemList = [
                    {text: "Swimwear", completed: false},
                    {text: "Beach towel", completed: false},
                    {text: "Sunscreen", completed: false},
                    {text: "Hat and sunglasses", completed: false},
                    {text: "Beach cover-up or sarong", completed: false},
                    {text: "Flip-flops or sandals", completed: false},
                    {text: "Lightweight and breathable clothing", completed: false},
                    {text: "Beach bag or tote", completed: false},
                    {text: "Snorkel and mask (if applicable)", completed: false},
                    {text: "Beach toys or games", completed: false},
                    {text: "Waterproof phone case", completed: false},
                    {text: "Portable Bluetooth speaker", completed: false},
                    {text: "Cooler bag or insulated water bottle", completed: false},
                    {text: "Reading material or e-reader", completed: false},
                    {text: "Beach umbrella or sunshade", completed: false}
                ];
                break;

            case '3':
                listName = ("Ski Destination");
                itemList = [
                    {text: "Ski jacket and pants", completed: false},
                    {text: "Thermal base layers", completed: false},
                    {text: "Insulated clothing layers", completed: false},
                    {text: "Warm hats and gloves", completed: false},
                    {text: "Ski socks", completed: false},
                    {text: "Ski goggles", completed: false},
                    {text: "Helmet (if desired)", completed: false},
                    {text: "Ski boots", completed: false},
                    {text: "Ski equipment (skis, poles, or snowboard)", completed: false},
                    {text: "Neck gaiter or face mask", completed: false},
                    {text: "Hand and toe warmers", completed: false},
                    {text: "Moisturizer and lip balm", completed: false},
                    {text: "Waterproof and insulated boots", completed: false},
                    {text: "Portable charger for electronics", completed: false},
                    {text: "Backpack for carrying essentials on the slopes", completed: false}
                ];
                break;


            case '4':
                listName = ("Romantic Destination");
                itemList = [
                    {text: "Appropriate clothing for the destination", completed: false},
                    {text: "Comfortable walking shoes", completed: false},
                    {text: "Evening wear for romantic dinners", completed: false},
                    {text: "Toiletries and personal care items", completed: false},
                    {text: "Intimate apparel", completed: false},
                    {text: "Camera or smartphone for capturing memories", completed: false},
                    {text: "Travel-size fragrance or cologne", completed: false},
                    {text: "Travel documents (passport, ID, tickets)", completed: false},
                    {text: "Cash and/or credit cards", completed: false},
                    {text: "Travel adapter for electronics", completed: false},
                    {text: "Travel guide or maps for exploring together", completed: false},
                    {text: "Portable Bluetooth speaker for romantic music", completed: false},
                    {text: "Snacks or treats for sharing", completed: false},
                    {text: "Compact umbrella (in case of rain)", completed: false},
                    {text: "Personalized surprise or gift for your partner", completed: false}
                ];
                break;

            case '5':
                listName = ("Winter Destination");
                itemList = [
                    {text: "Warm winter coat or jacket", completed: false},
                    {text: "Sweaters or thermal tops", completed: false},
                    {text: "Thermal base layers", completed: false},
                    {text: "Woolen or fleece hats and gloves", completed: false},
                    {text: "Scarves and neck warmers", completed: false},
                    {text: "Insulated and waterproof boots", completed: false},
                    {text: "Thermal socks", completed: false},
                    {text: "Thermal leggings or long johns", completed: false},
                    {text: "Ear muffs or earmuffs", completed: false},
                    {text: "Hand and toe warmers", completed: false},
                    {text: "Moisturizer and lip balm", completed: false},
                    {text: "Portable charger for electronics (cold weather affects battery life)", completed: false},
                    {text: "Travel-size umbrella", completed: false},
                    {text: "Travel documents (passport, ID, tickets)", completed: false},
                    {text: "Cash and/or credit cards", completed: false}
                ];
                break;

            case '6':
                listName = ("Sightseeing Destination");
                itemList = [
                    {text: "Comfortable walking shoes", completed: false},
                    {text: "Lightweight and breathable clothing", completed: false},
                    {text: "Daypack or backpack", completed: false},
                    {text: "Sunscreen and hat", completed: false},
                    {text: "Sunglasses", completed: false},
                    {text: "Water bottle or hydration pack", completed: false},
                    {text: "Travel-size toiletries", completed: false},
                    {text: "Portable charger for electronics", completed: false},
                    {text: "Travel adapter", completed: false},
                    {text: "Travel guide or maps", completed: false},
                    {text: "Camera or smartphone for capturing memories", completed: false},
                    {text: "Snacks or energy bars", completed: false},
                    {text: "Rain jacket or poncho (depending on the weather)", completed: false},
                    {text: "Travel documents (passport, ID, tickets)", completed: false},
                    {text: "Cash and/or credit cards", completed: false}
                ];

                break;
            case '7':
                listName = ("Nature Destination");
                itemList = [
                    {text: "Comfortable walking shoes or hiking boots", completed: false},
                    {text: "Lightweight and breathable clothing", completed: false},
                    {text: "Daypack or backpack", completed: false},
                    {text: "Sunscreen and hat", completed: false},
                    {text: "Sunglasses", completed: false},
                    {text: "Insect repellent", completed: false},
                    {text: "Water bottle or hydration pack", completed: false},
                    {text: "Travel-size toiletries", completed: false},
                    {text: "Portable charger for electronics", completed: false},
                    {text: "Travel adapter", completed: false},
                    {text: "Travel guide or maps of the national park", completed: false},
                    {text: "Binoculars (for wildlife spotting)", completed: false},
                    {text: "Snacks or energy bars", completed: false},
                    {text: "Rain jacket or poncho (depending on the weather)", completed: false},
                    {text: "Travel documents (passport, ID, tickets)", completed: false},
                    {text: "Cash and/or credit cards", completed: false}
                ];

                break;
            case '8':
                listName = ("International Destination");
                itemList = [
                    {text: "Passport and visa (if required)", completed: false},
                    {text: "Travel itinerary and reservation details", completed: false},
                    {text: "Local currency and/or credit cards", completed: false},
                    {text: "Travel adapter and chargers", completed: false},
                    {text: "Appropriate clothing for the destination", completed: false},
                    {text: "Comfortable walking shoes", completed: false},
                    {text: "Travel-size toiletries", completed: false},
                    {text: "Medications and prescriptions", completed: false},
                    {text: "First aid kit", completed: false},
                    {text: "Travel insurance documents", completed: false},
                    {text: "Phone and emergency contacts list", completed: false},
                    {text: "Portable power bank", completed: false},
                    {text: "Camera or smartphone for capturing memories", completed: false},
                    {text: "Maps or GPS device", completed: false},
                    {text: "Guidebooks or language phrasebook", completed: false},
                    {text: "Snacks for the journey", completed: false},
                    {text: "Reusable water bottle", completed: false},
                    {text: "Comfort items (e.g., travel pillow)", completed: false},
                    {text: "Copy of important documents (passport, ID)", completed: false},
                    {text: "Emergency contact information back home", completed: false}
                ];
                break;

            default:
                listName = ("Default List");
                itemList = [
                    {text: "Toothbrush", completed: false},
                    {text: "Toothpaste", completed: false},
                    {text: "Deodorant", completed: false},
                    {text: "Sunglasses", completed: false},
                    {text: "Swimming Suit", completed: false},
                    {text: "Sunscreen", completed: false},
                    {text: "Flip Flops", completed: false},
                    {text: "Shorts", completed: false},
                    {text: "T-Shirts", completed: false},
                    {text: "iPad", completed: false},
                    {text: "Phone Charger", completed: false}
                ];
                break;
        }

    }


// Function to handle the selection change event
    function handleSelectionChange() {
        var listSelection = document.getElementById('listSelection');
        var selectedValue = listSelection.value;
        loadPackingList(selectedValue);
    }

// Add an event listener to handle the selection change
//     document.getElementById('listSelection').addEventListener('change', handleSelectionChange);

// Function to render the list
    let itemCount = document.querySelector("#listItems").children.length;
    document.querySelector("#add-button").addEventListener("click", function (event) {

            const li = document.createElement("li");
            const div = document.createElement("div");
            let child = document.createElement("input");
            child.setAttribute("type", "hidden");
            child.setAttribute("id", `checklist.checklistItems${itemCount}.id`);
            child.setAttribute("name", `checklist.checklistItems[${itemCount}].id`);
            child.setAttribute("value", `0`);
            div.appendChild(child);

            child = document.createElement("input");
            child.setAttribute("type", "text");
            child.setAttribute("id", `checklist.checklistItems${itemCount}.itemName`);
            child.setAttribute("name", `checklist.checklistItems[${itemCount}].itemName`);
            child.setAttribute("value", ``);
            div.appendChild(child);

        child = document.createElement("button");
        child.setAttribute("type", "button");
        child.setAttribute("class", `btn btn-warning delete-todo`);
        child.innerText = "Delete";
        child.addEventListener("click", function(event) {
            event.target.parentElement.parentElement.remove();
        });
        div.appendChild(child);

            li.appendChild(div);
            document.querySelector("#listItems").appendChild(li);
            itemCount++;
        })


//Making the calls to the API on submit
    var searchResults = [];

    function initMap() {
        autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
            {
                types: ['geocode']
            })
        autocomplete.addListener('place_changed', searchNearbyPlaces)
    }

    function searchNearbyPlaces() {
        document.getElementById('places').innerHTML = ''

        var place = autocomplete.getPlace()
        map = new google.maps.Map(document.getElementById('map'), {
            center: place.geometry.location,
            zoom: 15
        });

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: place.geometry.location,
            radius: '5000',
            type: [document.getElementById('type').value]
        }, callback);
    }

    function callback(results, status) {
        $("#weatherButton").removeClass("d-none")
        searchResults = results;
        var table = document.getElementById('places');
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results)
            for (let i = 0; i < results.length; i++) {
                if (results[i].photos) {
                    let photoUrl = results[i].photos[0].getUrl();
                    table.innerHTML += `<div class="card m-4 col-2 align-items-center border border-0" id="${i}">
<img class="border-success rounded-circle mt-2" width = "100" height="100" src="${photoUrl}"/>
<br><div class="card-title">` + results[i].name + `</div><button id="${i}"  type="button" class="btn btn-outline-success" onclick="addToItinerary(${i})">ADD</button></div>`;
                } else {
                    let photoUrl = "https://via.placeholder.com/150"

                    table.innerHTML += `<div class="card m-4 col-2 align-items-center border border-0" id="${i}">
<img class="border border-4 rounded-circle mt-2" width = "100" height="100" src="${photoUrl}"/>
<br><div class="card-title">` + results[i].name + `</div><button id="${i}" type="button" class="btn btn-outline-success" onclick="addToItinerary(${i})">ADD</button></div>`;
                }
            }
        } else {
            table.innerHTML = "<div class='card m-4 col text-center align-items-center'><h2 class='m-3'>No Places in the area.</h2></div>"
        }

    }

    document.querySelector("#autocomplete", ).addEventListener('click', clearField)
    function clearField() {
        document.getElementById('autocomplete').value = "";
    }

    function addToItinerary(index) {
        var selectedResult = searchResults[index];
        var listContainer = document.getElementById('listContainer');
        let placeId = document.getElementById(index);
        placeId.classList.add('d-none');


        var card = document.createElement('div');
        card.className = 'card col-5 m-1';
        card.style = 'width: 18rem;';
        card.innerHTML = `
    <div class="destinationCard card-body">
    <div class="d-none" name="photoUrl">
    <img src="${selectedResult.photos[0].getUrl()}" >
    </div>
      <h5 class="card-title"  name="destinationName">
${selectedResult.name}
</h5>
<input type="hidden" value= 0 class="destination-id" >
<input type="hidden" value="${selectedResult.name}" class="destination-name">
<input type="hidden" value="${selectedResult.vicinity}" class="destination-address">
<input type="hidden" value="${selectedResult.place_id}" class="destination-place-id">
<input type="hidden" value="${selectedResult.photos[0].getUrl()}" class="destination-photo">

      <h6 class="card-subtitle mb-2 text-body-secondary" name="destinationAddress">
${selectedResult.vicinity}
</h6>
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedResult.name)}&query_place_id=${selectedResult.place_id}" class="card-link" target="_blank">
      View on Map
      </a>
    </div>`;

        listContainer.appendChild(card);
    }

    document.querySelector("#createItinerary").addEventListener("click",  function callToSubmit(){
        let nameFields = document.querySelectorAll(".destination-name");
        for (let i = 0; i < nameFields.length; i++) {
            nameFields[i].setAttribute("name", `destinations[${i}].name`)
        }

        let nameIds = document.querySelectorAll(".destination-id");
        for (let i = 0; i < nameIds.length; i++) {
            nameIds[i].setAttribute("name", `destinations[${i}].id`)
        }

        let nameAddress = document.querySelectorAll(".destination-address");
        for (let i = 0; i < nameAddress.length; i++) {
            nameAddress[i].setAttribute("name", `destinations[${i}].address`)
        }

        let namePhoto = document.querySelectorAll(".destination-photo");
        for (let i = 0; i < namePhoto.length; i++) {
            namePhoto[i].setAttribute("name", `destinations[${i}].photoUrl`)
        }



        document.querySelector("#submit-form").submit();
    })

