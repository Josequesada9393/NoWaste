import { createContext, useEffect, useState, useContext } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { findFood, findReviews } from "../ApiServices/ApiServices";






//auth0 logic, if user does not exist, reject, please register

//if user exists, then set the new userState

export const FoodItemsContext = createContext({
  foodItems: null,
  setFoodItems: () => null,
  reviews: null,
  setReviews: () => null
});

export const FoodItemsProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [reviews, setReviews] = useState([])

  useEffect(() => {
  }, [foodItems])

  const value = { foodItems, setFoodItems, reviews, setReviews};

  return <FoodItemsContext.Provider value={value}>{children}</FoodItemsContext.Provider>
}