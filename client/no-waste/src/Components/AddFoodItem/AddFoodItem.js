import React from 'react'
import { useState, useContext, useEffect } from 'react'
import './AddFoodItem.css'
import { addItem, fetchUser } from '../../ApiServices/ApiServices';
import { LoginContext } from '../../LoginContext/LoginContext'

function AddFoodItem() {

  const { setUser, user } = useContext(LoginContext)

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [photo, setPhoto] = useState('')
  const [address, setAddress] = useState('')
  const id = user._id;

  const onSubmit = async (e) => {
  const dateNow = new Date(Date.now())

  const dateEntered = new Date(date)
    if (dateNow >= dateEntered) {
       alert("you can't go back in time");
   } else {
    e.preventDefault();
    const response = await addItem(id, title, date, photo, address)
    console.log(response)
    setUser(response)
      }
  }
  return (
    <div className='AddItemForm br4 '>
        <input className="formInput ma1 pa2 br2 hover-bg-dark-blue " type="text" placeholder='Insert' name='title' value={title}
        onChange={(e) => setTitle(e.target.value)} required/>
        <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="datetime-local" placeholder="date" name="date" value={date}
        onChange={(e) => setDate(e.target.value)} required/>
        <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="text" placeholder="photo" name="photo" value={photo}
        onChange={(e) => setPhoto(e.target.value)} required/>
        <input className='formInput ma1 pa2 br2 hover-bg-dark-blue' type="text" placeholder="address" name="address" value={address}
        onChange={(e) => setAddress(e.target.value)} required/>
      <button onClick={onSubmit} className="formButton ma2 bg-light-yellow f5 grow pv2 br2" type='submit'>Add a new food item!</button>
    </div>
  )
}

export default AddFoodItem