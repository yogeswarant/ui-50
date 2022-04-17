const mainEl = document.getElementById('main')
const formEl = document.getElementById('form')
const userEl = document.getElementById('user')


async function getUser(username) {
  try {
    const user = await axios(`https://api.github.com/users/${username}`)
    showProfile(user.data)
  } catch (e) {
    showError("No such user")
  }
}

async function getRepos(username) {
  console.log("getRepos of user");
  try {
    const repos = await axios(`https://api.github.com/users/${username}/repos?sort=created`)
    showRepos(repos.data)
    console.log(repos.data);
  } catch (e) {
    console.log(e);
    showError("No repos found")
  }
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  getUser(userEl.value)
  getRepos(userEl.value)
})

function showError(msg) {
  const profileHTML = `
  <div class="profile">
    <div class="text">
      <h1>${msg}</h1>
    </div>
  </div>`
  mainEl.innerHTML = profileHTML
}

function showProfile(profile) {
  const profileHTML = `
  <div class="profile">
    <div class="photo">
        <img src="${profile.avatar_url}" alt="${profile.name}">
      </div>
      <div class="text">
      <h1>${profile.name}</h1>
      <p>${profile.bio || profile.location}</p>
      <div class="social">
        <p>${profile.followers}<span> Followers</span></p>
        <p>${profile.following}<span> Following</span></p>
        <p>${profile.public_repos}<span> Repos</span></p>
      </div>
      <div class="repos">
      </div>
    </div>
  </div>`
  mainEl.innerHTML = profileHTML

}

function showRepos(repos) {
  const reposEl = document.querySelector('.repos')
  repos
  .splice(0, 5)
  .forEach(repo => {
    const repoEl = document.createElement('div')
    repoEl.classList.add('repo')
    const aEl = document.createElement('a')
    aEl.setAttribute('href', repo.html_url)
    aEl.setAttribute('target', '_blank')
    repoEl.appendChild(aEl)
    aEl.innerHTML = repo.name
    reposEl.appendChild(repoEl)
  })
}