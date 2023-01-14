// import React from 'react'
// import { useState, useContext } from 'react'
// import './AddFoodItem.css'
// import { addItem } from '../../ApiServices/ApiServices';
// import { LoginContext } from '../../LoginContext/LoginContext'

// function AddFoodItem() {
//  const {setUser, user} = useContext(LoginContext)

//   const onSubmit = (e) => {
//     e.preventDefault();
//     addItem(title, date, photo, address)
//     .then(data => {console.log(data)})
//   }

//   return (
//     <div className='AddItemForm br4 '>

//         <input className="formInput ma2 pa2 br2 hover-bg-dark-blue " type="text" placeholder='Insert' name='title' value={title}
//         onChange={(e) => setTitle(e.target.value)} />
//       onChange={(e) => setUser({...user, ...{posts: e.target.value}})}
//         <input className='formInput ma2 pa2 br2 hover-bg-dark-blue' type="datetime-local" placeholder="date" name="date" value={date}
//         onChange={(e) => setDate(e.target.value)} />
//         <input className='formInput ma2 pa2 br2 hover-bg-dark-blue' type="text" placeholder="photo" name="photo" value={photo}
//         onChange={(e) => setPhoto(e.target.value)} />
//         <input className='formInput ma2 pa2 br2 hover-bg-dark-blue' type="text" placeholder="address" name="address" value={address}
//         onChange={(e) => setaddress(e.target.value)} />
//       <button onClick={onSubmit} className="formButton ma2 bg-light-yellow f5 grow pv2 br2" type='submit'>Add a new food item!</button>

//     </div>
//   )
// }

// export default AddFoodItem