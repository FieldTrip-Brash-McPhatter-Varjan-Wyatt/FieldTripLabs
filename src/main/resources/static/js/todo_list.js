// Global variables

var itemList;
var currentListName = "";
var weatherKey = config.WEATHER_KEY
$(document).ready(function () {
    const apiKey = weatherKey;
    const apiUrl = 'https://visual-crossing-weather.p.rapidapi.com/history';

    // Event handler for changes in the location and date fields
    $('#autocomplete, #startDate').on('input', function () {
        // Get the values of the two fields
        const cityName = $('#autocomplete').val().trim();
        const startDate = $('#startDate').val().trim();

        // If both fields have a value, show the button
        if (cityName !== '' && startDate !== '') {
            $('#weatherButton').removeClass('d-none');
        } else {
            // If not, hide the button
            $('#weatherButton').addClass('d-none');
        }
    });

    // Fetch weather when the destination or date changes
    $('#weatherModal').on('show.bs.modal', function (e) {
        const cityName = $('#autocomplete').val().trim();
        const date = new Date($('#startDate').val());

        if (cityName !== '' && !isNaN(date.getTime())) {
            fetchWeatherData(cityName, date);
        }
        console.log(cityName, date);
    });

    console.log('Select a location and a start date to view historical weather conditions.');


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

                        const weekdayOptions = {weekday: 'long'};
                        const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

                        const formattedWeekday = dateTime.toLocaleString('en-US', weekdayOptions);
                        const formattedDate = dateTime.toLocaleString('en-US', dateOptions);

                        weatherHtml += `
                <div class="card text-center" style="width: 18rem;">
                  <div class="card-body" style="background-color: #003B46; color: #DBD1B3;>
                    <h5 class="card-title">${formattedWeekday}<br>${formattedDate}</h5><br>
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
                {text: "Lightweight and breathable clothing"},
                {text: "Swimwear"},
                {text: "Sunscreen"},
                {text: "Hat and sunglasses"},
                {text: "Sandals or flip-flops"},
                {text: "Light, comfortable walking shoes"},
                {text: "Travel-size toiletries"},
                {text: "Insect repellent"},
                {text: "Travel adapter for electronics"},
                {text: "Beach towel"},
                {text: "Daypack or beach bag"},
                {text: "Reusable water bottle"},
                {text: "Medications and basic first aid kit"},
                {text: "Travel documents (passport, ID, tickets)"},
                {text: "Cash and/or credit cards"}
            ];
            break;

        case '2':
            listName = ("Beach Destination");
            itemList = [
                {text: "Swimwear"},
                {text: "Beach towel"},
                {text: "Sunscreen"},
                {text: "Hat and sunglasses"},
                {text: "Beach cover-up or sarong"},
                {text: "Flip-flops or sandals"},
                {text: "Lightweight and breathable clothing"},
                {text: "Beach bag or tote"},
                {text: "Snorkel and mask (if applicable)"},
                {text: "Beach toys or games"},
                {text: "Waterproof phone case"},
                {text: "Portable Bluetooth speaker"},
                {text: "Cooler bag or insulated water bottle"},
                {text: "Reading material or e-reader"},
                {text: "Beach umbrella or sunshade"}
            ];
            break;

        case '3':
            listName = ("Ski Destination");
            itemList = [
                {text: "Ski jacket and pants"},
                {text: "Thermal base layers"},
                {text: "Insulated clothing layers"},
                {text: "Warm hats and gloves"},
                {text: "Ski socks"},
                {text: "Ski goggles"},
                {text: "Helmet (if desired)"},
                {text: "Ski boots"},
                {text: "Ski equipment (skis, poles, or snowboard)"},
                {text: "Neck gaiter or face mask"},
                {text: "Hand and toe warmers"},
                {text: "Moisturizer and lip balm"},
                {text: "Waterproof and insulated boots"},
                {text: "Portable charger for electronics"},
                {text: "Backpack for carrying essentials on the slopes"}
            ];
            break;

        case '4':
            listName = ("Romantic Destination");
            itemList = [
                {text: "Appropriate clothing for the destination"},
                {text: "Comfortable walking shoes"},
                {text: "Evening wear for romantic dinners"},
                {text: "Toiletries and personal care items"},
                {text: "Intimate apparel"},
                {text: "Camera or smartphone for capturing memories"},
                {text: "Travel-size fragrance or cologne"},
                {text: "Travel documents (passport, ID, tickets)"},
                {text: "Cash and/or credit cards"},
                {text: "Travel adapter for electronics"},
                {text: "Travel guide or maps for exploring together"},
                {text: "Portable Bluetooth speaker for romantic music"},
                {text: "Snacks or treats for sharing"},
                {text: "Compact umbrella (in case of rain)"},
                {text: "Personalized surprise or gift for your partner"}
            ];
            break;

        case '5':
            listName = ("Winter Destination");
            itemList = [
                {text: "Warm winter coat or jacket"},
                {text: "Sweaters or thermal tops"},
                {text: "Thermal base layers"},
                {text: "Woolen or fleece hats and gloves"},
                {text: "Scarves and neck warmers"},
                {text: "Insulated and waterproof boots"},
                {text: "Thermal socks"},
                {text: "Thermal leggings or long johns"},
                {text: "Ear muffs or earmuffs"},
                {text: "Hand and toe warmers"},
                {text: "Moisturizer and lip balm"},
                {text: "Portable charger for electronics (cold weather affects battery life)"},
                {text: "Travel-size umbrella"},
                {text: "Travel documents (passport, ID, tickets)"},
                {text: "Cash and/or credit cards"}
            ];
            break;

        case '6':
            listName = ("Sightseeing Destination");
            itemList = [
                {text: "Comfortable walking shoes"},
                {text: "Lightweight and breathable clothing"},
                {text: "Daypack or backpack"},
                {text: "Sunscreen and hat"},
                {text: "Sunglasses"},
                {text: "Water bottle or hydration pack"},
                {text: "Travel-size toiletries"},
                {text: "Portable charger for electronics"},
                {text: "Travel adapter"},
                {text: "Travel guide or maps"},
                {text: "Camera or smartphone for capturing memories"},
                {text: "Snacks or energy bars"},
                {text: "Rain jacket or poncho (depending on the weather)"},
                {text: "Travel documents (passport, ID, tickets)"},
                {text: "Cash and/or credit cards"}
            ];

            break;

        case '7':
            listName = ("Nature Destination");
            itemList = [
                {text: "Comfortable walking shoes or hiking boots"},
                {text: "Lightweight and breathable clothing"},
                {text: "Daypack or backpack"},
                {text: "Sunscreen and hat"},
                {text: "Sunglasses"},
                {text: "Insect repellent"},
                {text: "Water bottle or hydration pack"},
                {text: "Travel-size toiletries"},
                {text: "Portable charger for electronics"},
                {text: "Travel adapter"},
                {text: "Travel guide or maps of the national park"},
                {text: "Binoculars (for wildlife spotting)"},
                {text: "Snacks or energy bars"},
                {text: "Rain jacket or poncho (depending on the weather)"},
                {text: "Travel documents (passport, ID, tickets)"},
                {text: "Cash and/or credit cards"}
            ];

            break;
        case '8':
            listName = ("International Destination");
            itemList = [
                {text: "Passport and visa (if required)"},
                {text: "Travel itinerary and reservation details"},
                {text: "Local currency and/or credit cards"},
                {text: "Travel adapter and chargers"},
                {text: "Appropriate clothing for the destination"},
                {text: "Comfortable walking shoes"},
                {text: "Travel-size toiletries"},
                {text: "Medications and prescriptions"},
                {text: "First aid kit"},
                {text: "Travel insurance documents"},
                {text: "Phone and emergency contacts list"},
                {text: "Portable power bank"},
                {text: "Camera or smartphone for capturing memories"},
                {text: "Maps or GPS device"},
                {text: "Guidebooks or language phrasebook"},
                {text: "Snacks for the journey"},
                {text: "Reusable water bottle"},
                {text: "Comfort items (e.g., travel pillow)"},
                {text: "Copy of important documents (passport, ID)"},
                {text: "Emergency contact information back home"}
            ];
            break;

        default:
            listName = ("Default List");
            itemList = [
                {text: "Toothbrush"},
                {text: "Toothpaste"},
                {text: "Deodorant"},
                {text: "Sunglasses"},
                {text: "Swimming Suit"},
                {text: "Sunscreen"},
                {text: "Flip Flops"},
                {text: "Shorts"},
                {text: "T-Shirts"},
                {text: "iPad"},
                {text: "Phone Charger"}
            ];
            break;


    }
    return {listName: listName, itemList: itemList};
}

document.getElementById('listSelection').addEventListener('change', function () {
    var listIndex = this.value;
    var packingList = loadPackingList(listIndex);

    // Clear the existing items in the list
    var listItems = document.getElementById('listItems');
    while (listItems.firstChild) {
        listItems.removeChild(listItems.firstChild);
    }
    listItems.style.listStyleType = 'none';


    // Add new items to the list
    packingList.itemList.forEach(function (item) {
        var li = document.createElement('li');
        li.classList.add("d-flex")
        // var checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';
        // li.appendChild(checkbox);
        var input = document.createElement('input');



        var span = document.createElement(span)
        span.innerText = item.text;
        span.className = 'item-name flex-grow-1';
        input.type = 'hidden';
        input.className = 'item-id';
        input.value = '0';

        // Event listener for blur event
        input.addEventListener('blur', convertToText);

        // Event listener for keydown event
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                convertToText.call(this);
            }
        });

        li.appendChild(span);
        li.appendChild(input);

        // Create delete button
        var deleteBtn = document.createElement('button');
        deleteBtn.setAttribute("type", "button");
        deleteBtn.setAttribute("class", "btn btn-danger delete-todo"); // Change class to 'btn-danger' for red color
        deleteBtn.style.backgroundColor = "transparent"; // Change button background to transparent
        deleteBtn.classList.add("flex-shrink-1");
        deleteBtn.style.border = "none"; // Remove border

// Create a span element for the icon
        var deleteIcon = document.createElement('span');
        deleteIcon.className = 'material-symbols-outlined';
        deleteIcon.innerText = 'delete'; // Set the icon's content

// Append the icon to the button
        deleteBtn.appendChild(deleteIcon);

        deleteBtn.addEventListener('click', function () {
            li.parentNode.removeChild(li);
        });

// Append delete button to the list item
        li.appendChild(deleteBtn);


        // Delete function
        deleteBtn.addEventListener('click', function () {
            li.parentNode.removeChild(li);
        });

        listItems.appendChild(li);

        function convertToText() {
            var text = document.createTextNode(this.value);
            li.replaceChild(text, this);

            // Add click listener to text
            text.parentNode.addEventListener('click', function () {
                var input = document.createElement('input');
                input.type = 'text';
                input.className = 'item-name';
                input.value = text.textContent;

                // Add the same listeners to the new input
                input.addEventListener('blur', convertToText);
                input.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        convertToText.call(this);
                    }
                });

                li.replaceChild(input, text);
            });
        }
    });


    // Update the list name
    document.getElementById('listNameInput').value = packingList.listName;
});


function createNewItem() {
    // Create a new list item with an input box
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add("d-flex")
    div.classList.add("justify-content-between")
    li.style.listStyle = "none"

    // let checkbox = document.createElement("input");
    // checkbox.setAttribute("type", "checkbox");
    // div.appendChild(checkbox);

    let child = document.createElement("input");
    child.setAttribute("type", "text");
    child.setAttribute("class", "edit-input");
    div.appendChild(child);

    let span = document.createElement("span");
    span.classList.add("item-name")
    span.style.display = "none";
    div.appendChild(span);

    let hiddenName = document.createElement("input");
    hiddenName.setAttribute("type", "hidden");
    hiddenName.setAttribute("class", "hidden-input");
    div.appendChild(hiddenName)

    let hiddenId = document.createElement("input");
    hiddenId.setAttribute("type", "hidden");
    hiddenId.classList.add("item-id");
    hiddenId.setAttribute("value", 0);
    div.appendChild(hiddenId);







    function convertInputToText() {
        span.textContent = child.value;
        span.style.display = "inline";
        child.remove();
    }

    child.addEventListener("blur", function(event) {
        if (child.value.trim() !== '') {
            convertInputToText();
        } else {
            div.parentElement.remove();
        }
    });

    child.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();  // Prevent form submission
            if (child.value.trim() !== '') {
                convertInputToText();
                createNewItem(); // Create a new item
            }
        }
    });

    span.addEventListener("click", function () {
        span.style.display = "none";
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "edit-input");
        input.value = span.textContent;
        div.insertBefore(input, span);
        input.focus();

        function convertEditedInputToText() {
            span.textContent = input.value;
            span.style.display = "inline";
            input.remove();
        }

        input.addEventListener("blur", function(event) {
            if (input.value.trim() !== '') {
                convertEditedInputToText();
            } else {
                div.parentElement.remove();
            }
        });

        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();  // Prevent form submission
                if (input.value.trim() !== '') {
                    convertEditedInputToText();
                    createNewItem(); // Create a new item
                }
            }
        });
    });



    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("class", "btn btn-danger delete-todo flex-shrink-1");
    deleteBtn.style.backgroundColor = "transparent"; // Change button background to transparent
    deleteBtn.style.border = "none"; // Remove border

    // Create a span element for the icon
    let deleteIcon = document.createElement('span');
    deleteIcon.className = 'material-symbols-outlined';
    deleteIcon.innerText = 'delete'; // Set the icon's content

    // Append the icon to the delete button
    deleteBtn.appendChild(deleteIcon);

    deleteBtn.addEventListener("click", function (event) {
        event.target.parentElement.parentElement.remove();
    });
    div.appendChild(deleteBtn);

    li.appendChild(div);
    document.querySelector("#listItems").appendChild(li);

    child.focus();
}




document.querySelector("#add-button").addEventListener("click", createNewItem);


document.getElementById("listItems").addEventListener("click", function (event) {
    if (event.target.parentElement.classList.contains("delete-todo")) {
        event.target.parentElement.parentElement.parentElement.remove();
    }
});






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

    $("#places").css("display", "block");
    $("#itineraryContainer").css("display", "block");
    $("#packingListContainer").css("display", "block");
    $("#saveFunctionContainer").css("display", "block");
}



function callback(results, status) {
    searchResults = results;
    var container = document.getElementById('places');
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results)
        for (let i = 0; i < results.length; i++) {
            if (results[i].photos) {
                let photoUrl = results[i].photos[0].getUrl();
                container.innerHTML += `
<div class="card m-2 p-1 col-2 align-items-center m-0 rounded position-relative d-flex flex-column justify-content-between card-fixed-size" style="width:300px; color:#003B46; font-family: 'Nobile', sans-serif; background-color: #dbd1b3; border: none" id="${i}">
    <img class="mt-2 mb-2" width= "250" height="200" src="${photoUrl}" style="box-shadow: 10px 10px 10px gray; border-radius: 8px;"/>
  <div class="card-title text-center m-1 p-0">
    ${results[i].name}
  </div>
  <div class="m-2">
  <button id="${i}" type="button" class="btn btn-outline-success m-1 p-1" onclick="addToItinerary(${i})" style="border: #003b46 1px solid; border-radius: 8px; background-color: #dbd1b3; color: #003b46; font-family: 'Nobile', sans-serif; box-shadow: 10px 10px 10px gray;">ADD</button>
  <a href="reviews/${results[i].place_id}" id="${i}" class="btn btn-outline-success m-1 p-1" target="_blank" style="border: #003b46 1px solid; border-radius: 8px; background-color: #dbd1b3; color: #003b46; font-family: 'Nobile', sans-serif; box-shadow: 10px 10px 10px gray;">REVIEWS</a>
  </div>
  </div>
</div>`;


            } else {
                let photoUrl = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&w=1000&q=80"

                container.innerHTML += `
<div class="card m-2 p-1 col-2 align-items-center m-0 rounded position-relative d-flex flex-column justify-content-between card-fixed-size" style="width:300px; color:#003B46; font-family: 'Nobile', sans-serif; background-color: #dbd1b3; border: none" id="${i}">
    <img class="mt-2 mb-2" width= "250" height="200" src="${photoUrl}" style="box-shadow: 10px 10px 10px gray; border-radius: 8px;"/>
  <div class="card-title text-center m-1 p-0">
    ${results[i].name}
  </div>
  <div class="m-2">
  <button id="${i}" type="button" class="btn btn-outline-success m-1 p-1" onclick="addToItinerary(${i})" style="border: #003b46 1px solid; border-radius: 8px; background-color: #dbd1b3; color: #003b46; font-family: 'Nobile', sans-serif; box-shadow: 10px 10px 10px gray;">ADD</button>
  <a href="reviews/${results[i].place_id}" id="${i}" class="btn btn-outline-success m-1 p-1" target="_blank" style="border: #003b46 1px solid; border-radius: 8px; background-color: #dbd1b3; color: #003b46; font-family: 'Nobile', sans-serif; box-shadow: 10px 10px 10px gray;">REVIEWS</a>
  </div>
  </div>
</div>`;


            }
        }
    } else {
        container.innerHTML = "<div class='card m-4 col text-center align-items-center' style='background-color: #D9D0B2;'><h2 class='m-3' style='color: #003B46; box-shadow: 10px 10px 10px gray; opacity: 0.5;'>No Places in the area. Please try another location.</h2></div>"
    }
}

function clearField() {
    document.getElementById('autocomplete').value = "";
}
const text = "Enter your trip location and dates to get started!";
const typingTextElement = document.getElementById('typing-text');
let index = 0;

function typeText() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust the typing speed by changing this value
    }
}

// Start the typing effect when the page loads
typeText();




function addToItinerary(index) {
    var selectedResult = searchResults[index];
    var listContainer = document.getElementById('listContainer');
    let placeId = document.getElementById(index);
    placeId.classList.add('d-none');



    if (selectedResult.photos){
        var photoUrl = selectedResult.photos[0].getUrl();
        var card = document.createElement('div');
        card.className = 'd-flex col-4 justify-content-evenly flex-wrap m-2';
        card.innerHTML = `

    <div class="destinationCard  card-body m-2  d-flex flex-column align-items-center" style="background-color: #dbd1b3;">
    <img src="${photoUrl}" style="height: 200px; width: 250px; border-radius: 8px; box-shadow: 10px 10px 10px gray" class=" mb-1">
      <h5 class="text-capitalize col-12" name="destinationName">
${selectedResult.name}
</h5>
<input type="hidden" value= 0 class="destination-id" >
<input type="hidden" value="${selectedResult.name}" class="destination-name">
<input type="hidden" value="${selectedResult.vicinity}" class="destination-address">
<input type="hidden" value="${selectedResult.place_id}" class="destination-place-id">
<input type="hidden" value="${photoUrl}" class="destination-photo">

        <h6 class="card-subtitle mb-2 text-body-secondary" name="destinationAddress">
${selectedResult.vicinity}
</h6>
<div class="mt-3">
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedResult.name)}&query_place_id=${selectedResult.place_id}" class="card-link text-decoration-none" target="_blank" style="border: #003b46 1px solid; border-radius: 8px; background-color: ; color: #003b46; font-family: 'Nobile', sans-serif; box-shadow: 10px 10px 10px gray; padding: 4px;">
      View on Map
      </a>
       <a href="/reviews/${selectedResult.place_id}" class="card-link text-decoration-none" target="_blank" style="border: #003b46 1px solid; border-radius: 8px; background-color: #dbd1b3; color: #003b46; font-family: 'Nobile', sans-serif; box-shadow: 10px 10px 10px gray; padding: 4px;">Reviews</a>
       </div>
    </div>`;
    }else{
        card = document.createElement('div');
        card.className = 'd-flex col-4 justify-content-evenly flex-wrap m-2';
        photoUrl = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&w=1000&q=80"
        card.innerHTML = `
    <div class="destinationCard card-body">
     <img src="${photoUrl}" style="height: 200px; width: 250px; border-radius: 8px; box-shadow: 10px 10px 10px gray" class=" mb-1">
      <h5 class="card-title"  name="destinationName">
${selectedResult.name}
</h5>
<input type="hidden" value= 0 class="destination-id" >
<input type="hidden" value="${selectedResult.name}" class="destination-name">
<input type="hidden" value="${selectedResult.vicinity}" class="destination-address">
<input type="hidden" value="${selectedResult.place_id}" class="destination-place-id">


      <h6 class="card-subtitle mb-2 text-body-secondary" name="destinationAddress">
${selectedResult.vicinity}
</h6>
      <div class="mt-3">
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedResult.name)}&query_place_id=${selectedResult.place_id}" class="card-link text-decoration-none" target="_blank" style="border: #003b46 1px solid; border-radius: 8px; background-color: ;color: #003b46; font-family: 'Nobile', sans-serif; box-shadow: 10px 10px 10px gray; padding: 4px;">View on Map</a>
       <a href="/reviews/${selectedResult.place_id}" class="card-link text-decoration-none" target="_blank" style="border: #003b46 1px solid; border-radius: 8px; background-color: #dbd1b3; color: #003b46; font-family: 'Nobile', sans-serif; box-shadow: 10px 10px 10px gray; padding: 4px;">Reviews</a>
       </div>
    </div>`;
    }

    listContainer.appendChild(card);
}

document.querySelector("#createItinerary, #editForm").addEventListener("click", function callToSubmit() {
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

    let namePlaceId = document.querySelectorAll(".destination-place-id");
    for (let i = 0; i < namePlaceId.length; i++) {
        namePlaceId[i].setAttribute("name", `destinations[${i}].placeId`)
    }

    const itemNames = document.querySelectorAll(".item-name");
    itemNames.forEach((nameField, index) => {
        const next = nameField.nextElementSibling;
        const nextNext = next.nextElementSibling;
        next.setAttribute("name", `checklist.checklistItems[${index}].itemName`);
        next.setAttribute("value", nameField.innerText);
        nextNext.setAttribute("name", `checklist.checklistItems[${index}].id`);
        nextNext.setAttribute("value",nextNext.value ? nextNext.value : 0);
    });


    document.querySelector("#submit-form , #input-edit-form").submit();


})

