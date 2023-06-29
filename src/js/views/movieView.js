import { elements } from '../base';

export const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const closeDetails = () => {
  elements.movieDetailsContainer.classList.remove('d-block');
};

export const displayMovie = (movie) => {
  var html = '<div class="row"';

  var genres = '';
  movie.genres.forEach((genre) => {
    genres += `<span class "badge">${genre.name}</span>`;
  });

  html += `
        <div class="col-md-4">
            <img
                src="https://www.themoviedb.org/t/p/w342/${movie.poster_path}"
                alt="${movie.title}"
                onerror="this.src='https://placehold.co/185x277';"
            />
        </div>
        <div class="col-md-8">
            <div>
            <h5>${movie.title}<span>${movie.vote_average}</span></h5>
                
                <p>${movie.overview}</p>
                                
                <p class="category">${genres}</p>
        </div>
    `;
  html += '</div>';
  elements.movieDetailsContainer.classList.add('d-block');
  elements.movieDetails.innerHTML = html;
};
