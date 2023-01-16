


 const loginIn = (email, password) => {
    return fetch('http://localhost:4000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password})
    })
      .then(response => response.json())
      .then(user => {
        if (user.email) { //
          console.log('login successful')
          return user;
        }
      })
 }

const addItem = (id, title, date, photo, address) => {
  return fetch('http://localhost:4000/addItem', {
    method: 'PUT',
    body: JSON.stringify({id, title, date, photo, address }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
    .catch((error) => {console.log('error adding')
    });
}

const findFood = async (id) => {
  return fetch(`http://localhost:4000/findFood/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log("where is my food", data)
     return data
    })
    .catch((error) => console.log(error, "error fetching"))
}


const addReview = async (review, userThatPostsReviewName, id) => {
  console.log(review, "this is review")
  console.log(id, "this is id")
  return fetch('http://localhost:4000/addReview', {
    method: 'PUT',
    body: JSON.stringify({review, userThatPostsReviewName, id}),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response
    })
    .catch((error) => {console.log('error adding review')
    });
}

const getItems = () => {
    return fetch('http://localhost:4000/getItems')
      .then(response => response.json())
      .then(items => {return items})
        .catch((error) => {
            console.error('Error:', error);
        });
}

const deleteItemById = (userId, itemId) => {
  fetch(`http://localhost:4000/deleteItem/${userId}/${itemId}`, {
    method: 'DELETE'
  })
  .then(response => {
    return console.log('delete success')
  })
  .catch(error => {
     return console.log('delete error')
  });
}





 export {loginIn, addItem, getItems, findFood, deleteItemById, addReview}