// Global variables
var itemList = [
    { text: "Toothbrush", completed: false },
    { text: "Toothpaste", completed: false },
    { text: "Deodorant", completed: false },
    { text: "Sunglasses", completed: false },
    { text: "Swimming Suit", completed: false },
    { text: "Sunscreen", completed: false },
    { text: "Flip Flops", completed: false },
    { text: "Shorts", completed: false },
    { text: "T-Shirts", completed: false },
    { text: "iPad", completed: false },
    { text: "Phone Charger", completed: false }
];

// Function to add an item to the list
function addItem() {
    var itemInput = document.getElementById("itemInput");
    var itemText = itemInput.value.trim();
    if (itemText !== "") {
        var newItem = { text: itemText, completed: false };
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


