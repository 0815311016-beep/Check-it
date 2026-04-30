function loadChecklistPage() {
    // Navigate to the checklist page
    window.location.href = "checklist.html";
}

// Add event listener to the button
let createButton = document.getElementById("createListButton");
createButton.addEventListener("click", loadChecklistPage);
