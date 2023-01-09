const createUser = user => {
    axios
      .post('https://reqres.in/api/users', user)
      .then(response => {
        const addedUser = response.data
        console.log(`POST: user is added`, addedUser)
        // append to DOM
      
      })
      .catch(error => console.error(error))
  }


const form = document.querySelector('form')

const formEvent = form.addEventListener('submit', event => {
  event.preventDefault()

  const first_name = document.querySelector('#first_name').value
  const last_name = document.querySelector('#last_name').value

  const user = { first_name, last_name }
  createUser(user)
})

const appendToDOM = users => {
    const ul = document.querySelector('ul')
    //iterate over all users
    users.map(user => {
      ul.appendChild(createLi(user))
    })
  }

  