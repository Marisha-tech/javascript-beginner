//Async, await

const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms))
}

// delay(2000).then(() => console.log('2 sec'))

/* // Асинхронный запрос на сервер и получить данные
const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos() {
  console.log('Fetch todo started...')
  return delay(2000)
    .then(() => fetch(url))
    .then((response) => response.json())
}

fetchTodos()
  .then((data) => {
    console.log('Data:', data)
  })
  .catch((e) => console.error(e)) */

// Асинхронный запрос на сервер и получить данные
const url = 'https://jsonplaceholder.typicode.com/todos'

async function fetchAsyncTodos() {
  console.log('Fetch todo started...')
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('Data:', data)
  } catch (e) {
    console.error(e)
  } finally {
    //выполнится в любом случае, даже если произошла ошибка
  }
}

fetchAsyncTodos()
