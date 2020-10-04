require('dotenv').config()

// JS for the about.html page
const mattAvatar = document.querySelector('.matt-avatar')
const zacAvatar = document.querySelector('.zac-avatar')

const mattName = document.querySelector('.matt-name')
const zacName = document.querySelector('.zac-name')

const mattUserName = document.querySelector('.matt-user-name')
const zacUserName = document.querySelector('.zac-user-name')

const mattUrl = document.querySelector('.matt-url')
const zacUrl = document.querySelector('.zac-url')

// Import these codes and move to untracked file
// Once moved delete these keys and create new ones and secure
const api_codes = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
}
