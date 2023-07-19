// Global variables
var itemList;

// Function to load the selected packing list
function loadPackingList(listIndex) {
    switch (listIndex) {
        case '1':
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



        case '4':
            itemList = [
                { text: "Appropriate clothing for the destination", completed: false },
                { text: "Comfortable walking shoes", completed: false },
                { text: "Evening wear for romantic dinners", completed: false },
                { text: "Toiletries and personal care items", completed: false },
                { text: "Intimate apparel", completed: false },
                { text: "Camera or smartphone for capturing memories", completed: false },
                { text: "Travel-size fragrance or cologne", completed: false },
                { text: "Travel documents (passport, ID, tickets)", completed: false },
                { text: "Cash and/or credit cards", completed: false },
                { text: "Travel adapter for electronics", completed: false },
                { text: "Travel guide or maps for exploring together", completed: false },
                { text: "Portable Bluetooth speaker for romantic music", completed: false },
                { text: "Snacks or treats for sharing", completed: false },
                { text: "Compact umbrella (in case of rain)", completed: false },
                { text: "Personalized surprise or gift for your partner", completed: false }
            ];

            break;
        case '5':
             itemList = [
                { text: "Warm winter coat or jacket", completed: false },
                { text: "Sweaters or thermal tops", completed: false },
                { text: "Thermal base layers", completed: false },
                { text: "Woolen or fleece hats and gloves", completed: false },
                { text: "Scarves and neck warmers", completed: false },
                { text: "Insulated and waterproof boots", completed: false },
                { text: "Thermal socks", completed: false },
                { text: "Thermal leggings or long johns", completed: false },
                { text: "Ear muffs or earmuffs", completed: false },
                { text: "Hand and toe warmers", completed: false },
                { text: "Moisturizer and lip balm", completed: false },
                { text: "Portable charger for electronics (cold weather affects battery life)", completed: false },
                { text: "Travel-size umbrella", completed: false },
                { text: "Travel documents (passport, ID, tickets)", completed: false },
                { text: "Cash and/or credit cards", completed: false }
            ];

        case '6':
             itemList = [
                { text: "Comfortable walking shoes", completed: false },
                { text: "Lightweight and breathable clothing", completed: false },
                { text: "Daypack or backpack", completed: false },
                { text: "Sunscreen and hat", completed: false },
                { text: "Sunglasses", completed: false },
                { text: "Water bottle or hydration pack", completed: false },
                { text: "Travel-size toiletries", completed: false },
                { text: "Portable charger for electronics", completed: false },
                { text: "Travel adapter", completed: false },
                { text: "Travel guide or maps", completed: false },
                { text: "Camera or smartphone for capturing memories", completed: false },
                { text: "Snacks or energy bars", completed: false },
                { text: "Rain jacket or poncho (depending on the weather)", completed: false },
                { text: "Travel documents (passport, ID, tickets)", completed: false },
                { text: "Cash and/or credit cards", completed: false }
            ];

            break;
        case '7':
            itemList = [
                { text: "Comfortable walking shoes or hiking boots", completed: false },
                { text: "Lightweight and breathable clothing", completed: false },
                { text: "Daypack or backpack", completed: false },
                { text: "Sunscreen and hat", completed: false },
                { text: "Sunglasses", completed: false },
                { text: "Insect repellent", completed: false },
                { text: "Water bottle or hydration pack", completed: false },
                { text: "Travel-size toiletries", completed: false },
                { text: "Portable charger for electronics", completed: false },
                { text: "Travel adapter", completed: false },
                { text: "Travel guide or maps of the national park", completed: false },
                { text: "Binoculars (for wildlife spotting)", completed: false },
                { text: "Snacks or energy bars", completed: false },
                { text: "Rain jacket or poncho (depending on the weather)", completed: false },
                { text: "Travel documents (passport, ID, tickets)", completed: false },
                { text: "Cash and/or credit cards", completed: false }
            ];

            break;
        case '8':
             itemList = [
                { text: "Passport and visa (if required)", completed: false },
                { text: "Travel itinerary and reservation details", completed: false },
                { text: "Local currency and/or credit cards", completed: false },
                { text: "Travel adapter and chargers", completed: false },
                { text: "Appropriate clothing for the destination", completed: false },
                { text: "Comfortable walking shoes", completed: false },
                { text: "Travel-size toiletries", completed: false },
                { text: "Medications and prescriptions", completed: false },
                { text: "First aid kit", completed: false },
                { text: "Travel insurance documents", completed: false },
                { text: "Phone and emergency contacts list", completed: false },
                { text: "Portable power bank", completed: false },
                { text: "Camera or smartphone for capturing memories", completed: false },
                { text: "Maps or GPS device", completed: false },
                { text: "Guidebooks or language phrasebook", completed: false },
                { text: "Snacks for the journey", completed: false },
                { text: "Reusable water bottle", completed: false },
                { text: "Comfort items (e.g., travel pillow)", completed: false },
                { text: "Copy of important documents (passport, ID)", completed: false },
                { text: "Emergency contact information back home", completed: false }
            ];


        default:
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
    renderList();
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
function toggleItem(index) {
    itemList[index].completed = !itemList[index].completed;
    renderList();
}

// Function to delete an item from the list
function deleteItem(index) {
    itemList.splice(index, 1);
    renderList();
}

// Function to render the list
function renderList() {
    var itemListElement = document.getElementById("itemList");
    itemListElement.innerHTML = "";

    for (var i = 0; i < itemList.length; i++) {
        var listItem = document.createElement("li");
        listItem.classList.add("list-group-item");

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
        deleteButton.className = "btn btn-danger btn-sm ms-3 round-delete-button";
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

// Call renderList() to display the pre-made list when the page loads
window.addEventListener("load", renderList);
// Call loadPackingList() to load the default packing list when the page loads
loadPackingList('0');

//Making the calls to the API on submit

async function fetchAndSend() {
  
}
