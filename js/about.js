require('dotenv').config()

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
