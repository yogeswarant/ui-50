function getJoke() {
  fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}})
  .then(resp => {
    let jresp = resp.json().then(j => {
      displayJoke(j.joke)
    })   
  })
  .catch(err => console.error(err))
}

function displayJoke(joke) {
  const jokeEl = document.getElementById('joke')
  jokeEl.innerText = joke
}

document.getElementById("jokeBtn").addEventListener('click', getJoke)
getJoke()