// Function to set the language based on the browser's language setting
function setLanguageFromBrowser() {
    var browserLanguage = navigator.language || navigator.userLanguage;
    var languageDropdown = document.getElementById("language-dropdown");

    // Set the default language in the dropdown to match the browser language
    if (browserLanguage.startsWith("tr")) {
        languageDropdown.value = "tr";
    } else {
        languageDropdown.value = "en";
    }

    // Call function to set language based on dropdown value
    setLanguage();
}

// Function to set the language based on the selected option in the dropdown
function setLanguage() {
    var languageDropdown = document.getElementById("language-dropdown");
    var selectedLanguage = languageDropdown.value;

    // Change the HTML lang attribute to the selected language
    document.documentElement.lang = selectedLanguage;

    // Update content based on the selected language
    updateContent(selectedLanguage);
}

// Function to update content based on the selected language
function updateContent(selectedLanguage) {
    // Update elements based on the selected language
    if (selectedLanguage === "tr") {
        document.getElementById("searchMovie").setAttribute("placeholder", "arama");
        document.getElementById("watchlist").textContent = "İzleme Listesi";
        
        document.getElementById("prev-page").textContent = "Önceki";
        document.getElementById("next-page").textContent = "Sonraki";
    } else {
        document.getElementById("searchMovie").setAttribute("placeholder", "search");
        document.getElementById("watchlist").textContent = "Watchlist";
       
        document.getElementById("prev-page").textContent = "Prev";
        document.getElementById("next-page").textContent = "Next";
    }
}

// Function to show user's name instead of login button when logged in
function showUserName() {
    var isLoggedIn = false; // Replace this with your logic to check if user is logged in
    var loginButton = document.getElementById("login");
    var userName = "Asil"; // Replace this with the user's name obtained from the server

    if (isLoggedIn) {
        loginButton.textContent = userName;
    }
}

// Event listener to detect changes in the language dropdown
document.getElementById("language-dropdown").addEventListener("change", setLanguage);

// Call function to set language based on browser's language setting
setLanguageFromBrowser();

// Call function to show user's name instead of login button when logged in
showUserName();
