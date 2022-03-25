const search = document.getElementById('search')

let currentPage = 1;

async function getMovies(page, searchString) {
  console.log("Get movies");
  const url = `https://api.themoviedb.org/3/search/movie?api_key=a9191430922bcaa7ff4e051187c8c73d&language=en-US&page=${page}&include_adult=false&query='${searchString}'`

  const resp = await fetch(url)
  return await resp.json()
}

function createMovieEl(movie) {
  console.log(movie);
  const movieEl = document.createElement('div')
  movieEl.classList.add('movie')
  
  const posterEl = document.createElement('div')
  posterEl.classList.add('poster')
  // posterEl.style.backgroundImage = url(movie.poster_path)
  movieEl.appendChild(posterEl)

  const titleBarEl = document.createElement('div')
  titleBarEl.classList.add('title-bar')
  movieEl.appendChild(titleBarEl)

  const titleEl = document.createElement('div')
  titleEl.classList.add('title')
  titleEl.innerText = movie.title
  titleBarEl.appendChild(titleEl)

  const ratingEl = document.createElement('div')
  ratingEl.classList.add('rating')
  ratingEl.classList.add(getRatingClass(movie.vote_average))
  ratingEl.innerHTML = `<span>${movie.vote_average}</span>`
  titleBarEl.appendChild(ratingEl)

  const overviewEl = document.createElement('div')
  overviewEl.classList.add('overview')
  overviewEl.innerText = `${movie.overview}`
  movieEl.appendChild(overviewEl)

  return movieEl
}

function getRatingClass(rating) {
  if (rating >= 8) {
    return 'green'
  } else if (rating >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

function showMovies(page, searchString) {
  getMovies(page, searchString).then(resp => {
    const containerEl = document.querySelector('.container')
    containerEl.innerHTML = ''
    resp.results.forEach(movie => {
      containerEl.appendChild(createMovieEl(movie))
    });
  })
}

async function updateMovies(page, searchString) {
  console.log("Update movies");
  const resp = await getMovies(page, searchString)
  const containerEl = document.querySelector('.container')
  resp.results.forEach(movie => {
    console.log(movie);
    containerEl.appendChild(createMovieEl(movie))
  });
}



function isInViewPort(element) {
  const rect = element.getBoundingClientRect()
  return rect.top >= 0 && 
        rect.left >= 0 && 
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
}

document.addEventListener('scroll', (e) => {
  const containerEl = document.querySelector('.container')
  if (isInViewPort(containerEl.lastElementChild)) {
    console.log("Perform next network call...");
    currentPage += 1;
    updateMovies(currentPage, search.value)
  }
})

search.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    showMovies(currentPage, search.value)
  }
})

showMovies(currentPage, '')