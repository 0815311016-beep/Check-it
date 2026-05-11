
function setupButton() {
    let createButton = document.getElementById("createListButton");
    
    if (createButton === null) {
        alert("Button not found!");
        return;
    }
    
    createButton.addEventListener("click", function() {
        window.location.href = "checklist.html";
    });
}

// Run the function when page loads
setupButton();

// Function to add item when button is clicked
function addItemToList() {
    let inputBox = document.getElementById("newItemInput");
    let userText = inputBox.value;
    
    // Check if user typed something
    if (userText === "") {
        alert("Please type something first!");
        return;
    }
    
    // Create the checklist item
    makeChecklistItem(userText);
    
    // Clear the input box for next item
    inputBox.value = "";
}

// Function to create a checklist item element
function makeChecklistItem(itemText) {
    let container = document.getElementById("checklistContainer");
    
    // Create item container
    let itemBox = document.createElement("div");
    itemBox.style.padding = "12px";
    itemBox.style.margin = "10px 0";
    itemBox.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    itemBox.style.borderRadius = "5px";
    itemBox.style.border = "1px solid #ff69b4";
    
    // Create checkbox
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.style.marginRight = "10px";
    
    // Create text label
    let itemLabel = document.createElement("span");
    itemLabel.innerText = itemText;
    itemLabel.style.color = "#ff69b4";
    itemLabel.style.fontSize = "16px";
    
    // When checkbox is clicked, cross out text
    checkBox.addEventListener("click", function() {
        if (checkBox.checked) {
            itemLabel.style.textDecoration = "line-through";
            itemLabel.style.color = "#888";
        } else {
            itemLabel.style.textDecoration = "none";
            itemLabel.style.color = "#ff69b4";
        }
    });
    
    // Put checkbox and text in the item box
    itemBox.appendChild(checkBox);
    itemBox.appendChild(itemLabel);
    
    // Add item box to the container
    container.appendChild(itemBox);
}

// Connect the Add button
let addButton = document.getElementById("addItemButton");
addButton.addEventListener("click", addItemToList);

// Connect the Back button
let backButton = document.getElementById("backButton");
backButton.addEventListener("click", function() {
    window.location.href = "index.html";
});

let createButton = document.getElementById("createListButton");
createButton.addEventListener("click", function() {
    alert("Button clicked!"); // This should show if the button works
    window.location.href = "checklist.html";
});



