import { elements } from '../base';

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.searchResults.innerHTML = '';
};

export const displayResults = (data) => {
  data.results.forEach((movie) => {
    const html = `
    <li>
      <img
        src="https://www.themoviedb.org/t/p/w185/${movie.poster_path}"
        alt="${movie.title}"
        onerror="this.src='https://placehold.co/185x277';"
      />
      <div>
         <h5><a href="#${movie.id}"> ${movie.title}</a> <span>${movie.vote_average}</span></h5>
        <span>Release Date: <p>${movie.release_date}</p></span>
        <p>${movie.overview}</p>
      </div>
    </li>
    `;
    elements.movieListHeader.innerHTML = `
    ${data.total_results} total results. 
    `;

    elements.searchResults.insertAdjacentHTML('beforeend', html);
  });
};
