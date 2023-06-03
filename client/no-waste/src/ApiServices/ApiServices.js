
// const url = "http://localhost:4000"
const url = "https://nowasteserver.vercel.app"

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

const findFood = async (userId) => {
  return fetch(`${url}/findFood/${userId}`)
    .then(response => response.json())
    .then(data => data)
    .catch((error) => console.log(error, "error fetching"))
}


const addReview = async (itemOwnerId, itemName, reviewerId, reviewerName, itemId, itemOwnerName, review, photo) => {
  return fetch(`${url}/addReview`, {
    method: 'post',
    body: JSON.stringify({itemOwnerId, itemName, reviewerId, reviewerName, itemId, itemOwnerName, review, photo}),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(response => {
      return response
    })
    .catch((error) => { console.log(error, 'error adding review')
    });
}

const findReviews = async (id) => {
    return await fetch(`${url}/findReview/${id}`)
      .then(response => response.json())
      .then(items => items)
        .catch((error) => {
            console.error('Error:', error);
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

const addItem = async (id, title, date, ownerName, photo, address, coordinates) => {
  try {
     return await fetch(`${url}/addItem`, {
      method: 'POST',
      body: JSON.stringify({ id, title, date, ownerName, photo, address, coordinates }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
    .then(data => data)

  } catch (error) {
    console.log(error, 'error adding');
  }
}

const deleteItemById = async (userId, itemId) => {
  return await fetch(`${url}/deleteItem/${userId}/${itemId}`, {
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
  console.log(currentUser)
  return await fetch(`${url}/userRegister`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    body: JSON.stringify({...currentUser})
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
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(email, password)
  })
    .then(response => response.json())
    .then(response => response)
    .catch(error => console.log(error, 'user not logged in'))
}

 export {loginIn, addItem, getItems, findFood, findReviews, deleteItemById, addReview, registerUser, loginUser}