import { createContext, useEffect, useState, useContext } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();




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