const APIKEY = 'api_key=90df416ebd261e61e67bd61da779a9d6';
let HOMEURL = `https://api.themoviedb.org/3/discover/movie?${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const IMAGEURL = 'https://image.tmdb.org/t/p/w500';

var container = document.getElementById('movie-container');
var search = document.getElementById('searchMovie');
var wrapperDiv = document.querySelector('.search-conten');
var resultsDiv = document.querySelector('.results');

var pBtn = document.getElementById('prev-page');
var nBtn = document.getElementById('next-page');
pBtn.disabled = true;

let pageNumber = 1;

function apiCall(url){
    const x = new XMLHttpRequest();
    x.open('get', url);
    x.send();
    x.onload = function(){
        container.innerHTML = "";
        var res = x.response;
        var conJson = JSON.parse(res);
        var moviesArray = conJson.results;
        moviesArray.forEach(movie => moviesElement(movie));
        addMovieToListButtonArray = document.getElementsByClassName('.add-movie-to-list');
    }
}

apiCall(HOMEURL);

function moviesElement(movie){
    var movieElement = document.createElement('div');
    movieElement.classList.add('movie-element');
    movieElement.innerHTML = `
        <div class="movie-poster">
            <a href="moviePage.html?id=${movie.id}"><img src= ${IMAGEURL+movie.poster_path} alt="Movie Poster"></a>
        </div>
        <div class="movie-title">${movie.title}</div>
        <div class="movie-element-tags">
            <div class="movie-rating">
            <i class="fas fa-star"></i> ${movie.vote_average} 
            </div>
            <div class="add-movie-to-list"  id="${movie.id}" onclick="addMovie(${movie.id})">
                <i class="fas fa-plus"></i>
            </div>
        </div>
    `;
    container.appendChild(movieElement);
}

var favMovies=[];
var oldMovies=[];

function addMovie(btnId){
    document.getElementById(btnId).innerHTML = '<i class="fas fa-check"></i>';
    if(!favMovies.includes(btnId.toString())){
        favMovies.push(btnId.toString());
    }
    oldMovies = JSON.parse(localStorage.getItem('MovieArray'));
    if(oldMovies == null){
        localStorage.setItem('MovieArray', JSON.stringify(favMovies));
    } else {
        favMovies.forEach(item => {
            if(!oldMovies.includes(item)){
                oldMovies.push(item);
            }
        });
        localStorage.setItem('MovieArray', JSON.stringify(oldMovies));
    }
}

search.addEventListener('keyup', function(){
    var input = search.value;
    var selectedType = document.getElementById('searchType').value;
    let inputUrl = `https://api.themoviedb.org/3/search/${selectedType}?query=${input}&${APIKEY}`;
    if(input.length != 0){
        apiCall(inputUrl);
    } else {
        window.location.reload();
    }
});

function disablePBtn(){
    if(pageNumber == 1) pBtn.disabled = true;
    else pBtn.disabled = false;
}

nBtn.addEventListener('click', () => {
    pageNumber++;
    let tempURL = `https://api.themoviedb.org/3/discover/movie?${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`;
    apiCall(tempURL);
    disablePBtn();
});

pBtn.addEventListener('click', () => {
    if(pageNumber == 1) return;
    pageNumber--;
    let tempURL = `https://api.themoviedb.org/3/discover/movie?${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`;
    apiCall(tempURL);
    disablePBtn();
});
