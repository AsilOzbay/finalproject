# IMBD Clone

??NO DB FOR MOVIES, USING THE MOVIE DATABASE API 

??NO GOOGLE LOGIN

This project is a web-based application that allows users to browse and search for movies, TV shows, and people using The Movie Database (TMDb) API. Users can also add their favorite movies to a watchlist. The application includes user registration and login functionality, with user data stored in a MySQL database.

Features
Movie Discovery: Browse popular movies, TV shows, and people.
Search Functionality: Search for movies, TV shows, and people based on the first three letters of the search text, displaying a maximum of 3 top items that satisfy the search criteria.
User Registration and Login: Users can create an account and log in to access additional features.
Watchlist: Logged-in users can add movies to their watchlist, which is saved locally using localStorage.
Pagination: Navigate through different pages of popular movies.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: PHP (for handling user registration and login)
Database: MySQL
API: The Movie Database (TMDb) API
Getting Started
Prerequisites
Web server (e.g., Apache)
PHP
MySQL
Web browser
Installation
Clone the Repository:


git clone https://github.com/AsilOzbay/finalproject/
cd movie-database-app
Set Up Database:

Create a MySQL database named final.
Create a users table using the following SQL script:

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Configure Database Connection:

Open the login.php file and replace the placeholders with your actual database connection details:

$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "final";
API Key:

Replace the placeholder API key in your JavaScript file with your actual TMDb API key:

const APIKEY = 'api_key=YOUR_TMDB_API_KEY';
Run the Application:

Start your web server and navigate to the project directory.
Open your browser and go to http://localhost/movie-database-app/index.html.
Usage
Browse Popular Movies: Open the application to see a list of popular movies.
Search: Use the search bar to find movies, TV shows, or people by typing at least three letters.
Register: Go to the registration page to create a new account.
Login: Log in with your credentials to add movies to your watchlist.
Add to Watchlist: Click the add button next to a movie to add it to your watchlist.
Files and Directories
index.html: The main page of the application.
login.html: The login page.
register.html: The registration page.
login.php: The PHP script for handling user login.
register.php: The PHP script for handling user registration.
script.js: JavaScript file containing the API calls and other functionality.
style.css: CSS file for styling the application.

