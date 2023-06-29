// API: c4f084d2dbb0332bfb44946ece9ef96f
// URL: https://api.themoviedb.org/3/movie/
// https://api.themoviedb.org/3/search/movie?api_key=c4f084d2dbb0332bfb44946ece9ef96f

// Model-View-Controller
import Search from './models/Search';
import { Movie } from './models/Movie';
import { elements, renderLoader, clearLoader } from './base';
import * as searchView from './views/searchView';
import * as movieView from './views/movieView';

const state = {};

// Search Controller
const searchController = async () => {
  const keyword = elements.searchInput.value;

  if (keyword) {
    state.search = new Search(keyword);
    searchView.clearInput();
    searchView.clearResults();

    await state.search.getResults();

    searchView.displayResults(state.search.data);
  } else {
    alert('Anahtar Kelime Girmelisiniz');
  }
};

elements.searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  searchController();
  console.log('Form Submit');
});

// Movie Controller (Details Movie)
const movieController = async () => {
  const id = window.location.hash.replace('#', '');
  if (id) {
    state.movie = new Movie(id);

    await state.movie.GetMovie();
    movieView.displayMovie(state.movie.data);
    movieView.backToTop();
  }
};
window.addEventListener('hashchange', movieController);

elements.movieDetailsClose.addEventListener('click', movieView.closeDetails);
