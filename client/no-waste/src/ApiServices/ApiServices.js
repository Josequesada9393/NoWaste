
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

const findFood = async (id) => {
  return fetch(`${url}/findFood/${id}`)
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

const addItem = (id, title, date, photo, address) => {
  return fetch(`${url}/addItem`, {
    method: 'PUT',
    body: JSON.stringify({id, title, date, photo, address }),
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

 export {loginIn, addItem, getItems, findFood, deleteItemById, addReview}