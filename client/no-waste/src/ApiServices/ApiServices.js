
const url = "http://localhost:4000"

 const loginIn = (email, password) => {
    return fetch(`${url}/login`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password})
    })
      .then(response => response.json())
      .then(user => {
        if (user.email) { //
          return user;
        }
      })
 }

const findFood = async () => {
  return fetch(`${url}/findFood`)
    .then(response => response.json())
    .then(data => {
     return data
    })
    .catch((error) => console.log(error, "error fetching"))
}


const addReview = async (review, userThatPostsReviewName, photo, name, id) => {
  return fetch(`${url}/addReview`, {
    method: 'PUT',
    body: JSON.stringify({review, userThatPostsReviewName, photo, name, id}),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(response => {
      return response
    })
    .catch((error) => { console.log(error, 'error adding review')
    });
}

const getItems = async () => {
    return await fetch(`${url}/getItems`)
      .then(response => response.json())
      .then(items => {return items})
        .catch((error) => {
            console.error('Error:', error);
        });
}

const addItem = (id, title, date, ownerName, photo, address, coordinates) => {
  return fetch(`${url}/addItem`, {
    method: 'PUT',
    body: JSON.stringify({id, title, date, ownerName, photo, address, coordinates }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(response => {
      return response
    })
    .catch((error) => {console.log(error, 'error adding')
    });
}

const deleteItemById = (userId, itemId) => {
  return fetch(`${url}/deleteItem/${userId}/${itemId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(response => response)
  .catch(error => {
     return console.log(error, 'delete error')
  });
}



// new register system

const registerUser = async (currentUser) => {

  return await fetch(`${url}/userRegister`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(currentUser)
  })
    .then(response => response.json())
    .then(response => {
      alert('Registration successful')
      return response
    })
  .catch(error => console.log(error, 'user not registered'))
}

const loginUser = async (email, password) => {

  return await fetch(`${url}/userLogin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(email, password)
  })
    .then(response => response.json())
    .then(response => response)
    .catch(error => console.log(error, 'user not logged in'))
}

 export {loginIn, addItem, getItems, findFood, deleteItemById, addReview, registerUser, loginUser}