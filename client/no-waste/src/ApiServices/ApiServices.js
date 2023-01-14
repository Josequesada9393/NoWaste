

 const loginIn = (email, password) => {
    return fetch('http://localhost:4000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password })
    })
      .then(response => response.json())
      .then(user => {
        if (user.email) { //
          console.log(user, 'the whole user')
          return user;
        }
      })
 }

const addItem = (name, date, photo, address) => {
   return fetch('http://localhost:4000/addItem', {
        method: 'POST',
        body: JSON.stringify({ name, date, photo, address }),
        headers: { 'Content-Type': 'application/json' },
    })
     .then(response => response.json())
     .then(item => {return item})
     .catch((error) => {
        console.error('Error:', error);
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




 export {loginIn, addItem, getItems}