



 const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=9a4177a54a99d710c703aed46bcf9823";
 const IMGPATH = "https://image.tmdb.org/t/p/w1280";
 const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=9a4177a54a99d710c703aed46bcf9823&query=";












 const main= document.getElementById("content"); 
const form = document.getElementById("form");
const search = document.getElementById("search");


getMovies(APIURL);
async function getMovies(url){
 const response =await fetch(url);
const data = await response.json();
console.log(data); 
 showMovies(data.results);
}


function showMovies(movies){

main.innerHTML="";
movies.forEach(movies => {
const{ poster_path, title,overview,vote_average}=movies;
const movieEL=document.createElement("div");
movieEL.classList.add("movie");
movieEL.innerHTML= `
<img src="${IMGPATH}${poster_path}"alt="${title}">
<div class="movie-info">
<h3>${title}</h3>
<span class="${ getClassByRate(vote_average)} ">${vote_average}</span>
</div>
<div class="overview">
<h3>Overview:</h3>
${overview}
</div>
`;
main.appendChild(movieEL);
});



}



function getClassByRate(vote) {

    if(vote >= 8){
        return "green";
        }else if(vote >= 5){
        return "orange";
        }else{
        return "red";
        }
    }

    form.addEventListener("submit", e=>{
        e.preventDefault();
        const searchTerm = search.value;
        if(searchTerm){
        getMovies(SEARCHAPI + searchTerm); 
        search.value = "";

        
    }
    });


