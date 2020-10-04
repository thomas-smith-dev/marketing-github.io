require('dotenv').config()

const userInput = document.querySelector('input')
const searchBtn = document.querySelector('.search-github')
const name = document.querySelector('.name')
const avatar = document.querySelector('.avatar')
const user = document.querySelector('.user-name')
const company = document.querySelector('.company')
const repos = document.querySelector('.repos')
const url = document.querySelector('.url')

const videoContainer = document.querySelector('.video-container')
const searchResults = document.querySelector('.search-results')
const searchAgain = document.querySelector('.search-again')
const footerContent = document.querySelector('.footer-content')

// Keys have been replaced
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET

const getUsers = async (user) => {
  const api_call = await fetch(
    `https://api.github.com/users/${user}?client_id=${client_id}&client_secret${client_secret}`
  )

  const data = await api_call.json()

  return { data: data }
}

const showResults = () => {
  getUsers(userInput.value).then((results) => {
    videoContainer.classList.add('hide')
    videoContainer.classList.remove('show')
    searchResults.classList.add('show')
    searchResults.classList.remove('hide')
    searchAgain.classList.add('show')
    searchAgain.classList.remove('hide')
    footerContent.classList.add('show')
    footerContent.classList.remove('hide')

    avatar.innerHTML = `<img src="${results.data.avatar_url}" alt="Github User Avatar">`
    name.innerHTML = `Name: <span>${results.data.name}</span>`
    user.innerHTML = `User: <span>${results.data.login}</span>`
    company.innerHTML = `Company: <span>${results.data.company}</span>`
    repos.innerHTML = `Repos: <span>${results.data.public_repos}</span>`
    url.innerHTML = `URL: <a class="url" href="${results.data.html_url}" target="_blank"><span>${results.data.html_url}</span></a>`
  })
}

searchBtn.addEventListener('click', () => {
  showResults()
})
