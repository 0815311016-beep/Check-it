// HOME PAGE BUTTON
let createButton = document.getElementById("createListButton");

if (createButton) {
    createButton.addEventListener("click", function() {
        window.location.href = "checklist.html";
    });
}

// CHECKLIST PAGE - BACK BUTTON
let backButton = document.getElementById("backButton");

if (backButton) {
    backButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

// CHECKLIST PAGE - ADD ITEM BUTTON
let addButton = document.getElementById("addItemButton");

if (addButton) {
    addButton.addEventListener("click", function() {
        let inputBox = document.getElementById("newItemInput");
        let userText = inputBox.value;
        
        if (userText === "") {
            alert("Please type something first!");
            return;
        }
        
        createItem(userText);
        inputBox.value = "";
    });
}

// FUNCTION to create checklist items
function createItem(text) {
    let container = document.getElementById("checklistContainer");
    
    let itemBox = document.createElement("div");
    itemBox.style.padding = "12px";
    itemBox.style.margin = "10px 0";
    itemBox.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    itemBox.style.borderRadius = "5px";
    itemBox.style.border = "1px solid #ff69b4";
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";
    
    let label = document.createElement("span");
    label.innerText = text;
    label.style.color = "#ff69b4";
    label.style.fontSize = "16px";
    
    checkbox.addEventListener("click", function() {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
            label.style.color = "#888";
        } else {
            label.style.textDecoration = "none";
            label.style.color = "#ff69b4";
        }
    });
    
    itemBox.appendChild(checkbox);
    itemBox.appendChild(label);
    
    container.appendChild(itemBox);
}
