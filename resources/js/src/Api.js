
const api = "api"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (qa_Id) =>
  fetch(`${api}/qa_users/${qa_Id}`, { headers })
    .then(res => res.json())
    .then(data => data)



export const getAll = (query) =>
  fetch(`${api}/${query}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const update = (table, model) =>
  fetch(`${api}/${table}/${model.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ model })
  }).then(res => res.json())

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data)


    