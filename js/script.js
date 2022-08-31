let elMoviesList = $(".js-movies-list");
let elMovieTemplate = $("#template-movies-element").content;

let infos_full = movies.map(function(movie) {
  return {
    title: movie.Title,
    fullTitle: movie.fulltitle,
    movieYear: movie.movie_year,
    catigories: movie.Categories.split("|"),
    summary: movie.summary,
    // imgHD: `https://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`,
    movieRaiting: movie.imdb_rating,
    runtime: movie.runtime,
    language: movie.language,
    youtube: `https://www.youtube.com/watch?v=${movie.ytid}`,
  }
})

let searchForm = document.querySelector(".search-form-js");
let searchInput = searchForm.querySelector(".search-input-js");

searchForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let findMovies = infos_full.filter((movie) => (movie.movieYear == searchInput.value));
  console.log(findMovies);

  let renderMovies = (infos_full) => {
    let elMoviesWrapperFragment = document.createDocumentFragment();
  
    infos_full.forEach( movie => {
      let elNewMovie = elMovieTemplate.cloneNode(true);
  
      // elNewMovie.querySelector(".card-img-top").src = movie.imgHD;
      elNewMovie.querySelector(".card-title").textContent = `Movie Title: ${movie.title}`;
      elNewMovie.querySelector(".full-title").textContent = `Full Title: ${movie.fullTitle}`;
      elNewMovie.querySelector(".movie-year").textContent = `Year: ${movie.movieYear}`;
      elNewMovie.querySelector(".categories").textContent = `Categories: ${movie.catigories.join(", ")}`;
      elNewMovie.querySelector(".card-text-summary").textContent = `Information about movie: ${movie.summary}`;
      elNewMovie.querySelector(".rating").textContent = `Movie Raiting: ${movie.movieRaiting}`;
      elNewMovie.querySelector(".runtime").textContent = `RunTime: ${movie.runtime}`;
      elNewMovie.querySelector(".language").textContent = `Movie Language: ${movie.language}`;
      elNewMovie.querySelector(".youtube-link").textContent = `YouTube link: `;
      elNewMovie.querySelector(".youtube-link").href = `${movie.youtube}`;
  
      elMoviesWrapperFragment.appendChild(elNewMovie);
  
      return elNewMovie;
    })
  
    elMoviesList.appendChild(elMoviesWrapperFragment);
  }
  renderMovies(findMovies);
})
