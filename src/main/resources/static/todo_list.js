// Global variables
var itemList;
var currentListName = "Default List";

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
    renderList(listName); // Render the list with the correct list name
}


// Function to handle the selection change event
function handleSelectionChange() {
    var listSelection = document.getElementById('listSelection');
    var selectedValue = listSelection.value;
    loadPackingList(selectedValue);
}

// Add an event listener to handle the selection change
document.getElementById('listSelection').addEventListener('change', handleSelectionChange);

// Function to add an item to the list
function addItem() {
    var itemInput = document.getElementById("itemInput");
    var itemText = itemInput.value.trim();
    if (itemText !== "") {
        var newItem = {text: itemText, completed: false};
        itemList.push(newItem);
        itemInput.value = "";
        renderList();
    }
}

// Function to change the status of an item


// Function to delete an item from the list
function deleteItem(index) {
    itemList.splice(index, 1);
    renderList();
}


// Function to render the list
function renderList() {
    var itemListElement = document.getElementById("itemList");
    itemListElement.innerHTML = "";

    // Add the list header using the current list name
    var listHeader = document.createElement("h2");
    listHeader.textContent = currentListName;
    itemListElement.appendChild(listHeader);

    // Render the items
    for (var i = 0; i < itemList.length; i++) {
        var listItem = document.createElement("li"); // Create a new list item element

        var toggleContainer = document.createElement("div");
        toggleContainer.classList.add("form-check", "form-switch");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("form-check-input");
        checkbox.checked = itemList[i].completed;
        checkbox.onchange = (function (index) {
            return function () {
                toggleItem(index);
            };
        })(i);

        var label = document.createElement("label");
        label.classList.add("form-check-label");
        label.appendChild(checkbox);
        toggleContainer.appendChild(label);

        listItem.appendChild(toggleContainer);

        var itemText = document.createElement("span");
        itemText.innerText = itemList[i].text;
        listItem.appendChild(itemText);

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "btn btn-danger btn-sm ms-auto round-delete-button";
        deleteButton.onclick = (function (index) {
            return function () {
                deleteItem(index);
            };
        })(i);
        listItem.appendChild(deleteButton);

        itemListElement.appendChild(listItem);

        if (itemList[i].completed) {
            listItem.classList.add("completed");
        }
    }
}

// Function to change the status of an item
function toggleItem(index) {
    itemList[index].completed = !itemList[index].completed;
    renderList("Selected Packing List"); // Update the list after toggling completion status
}

// Function to save the list
function saveList() {
    var listNameInput = document.getElementById("listNameInput");
    var newListName = listNameInput.value.trim();

    if (newListName !== "") {
        // Update the current list name
        currentListName = newListName;

        // Save the list and the current list name to local storage
        localStorage.setItem("currentListName", currentListName);
        localStorage.setItem("itemList", JSON.stringify(itemList));

        // Update the rendered list
        renderList();
    }
}


// Call renderList() to display the pre-made list when the page loads
window.addEventListener("load", renderList);
// Call loadPackingList() to load the default packing list when the page loads
loadPackingList('0');

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
    searchResults = results;
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results)
        var table = document.getElementById('places');
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
<br><div class="card-title">` + results[i].name + '</div><button id="${i}" type="button" class="btn btn-outline-success" onclick="addToItinerary(${i})">ADD</button></div>';
            }
        }
    } else {
        var table = document.getElementById('places');
        table.innerHTML = "<div class='card m-4 col text-center align-items-center'><h2 class='m-3'>No Places in the area.</h2></div>"
    }
}

function saveDestination(){
    console.log("hello")
}
function clearField(){
    document.getElementById('autocomplete').value = "";
}
function addToItinerary(index) {
    var selectedResult = searchResults[index];
    var listContainer = document.getElementById('listContainer');
    const saveDestinationBtn = document.getElementById('saveDestinationBtn');
    saveDestinationBtn.classList.remove('d-none')

    var card = document.createElement('div');
    card.className = 'card col-4 mt-3';
    card.style = 'width: 18rem;';
    card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${selectedResult.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${selectedResult.vicinity}</h6>
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedResult.name)}&query_place_id=${selectedResult.place_id}" class="card-link" target="_blank">View on Map</a>
    </div>`;

    listContainer.appendChild(card);
}



