import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { findFood } from "../ApiServices/ApiServices";


//auth0 logic, if user does not exist, reject, please register

//if user exists, then set the new userState

export const FoodItemsContext = createContext({
  foodItems: null,
  setFoodItems: () => null,
});

export const FoodItemsProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);


  useEffect(() => {
    const getItems = async () => {
    const items = await findFood();
    setFoodItems(items)
  }
  getItems()
  }, [foodItems])



  const value = { foodItems, setFoodItems};

  return <FoodItemsContext.Provider value={value}>{children}</FoodItemsContext.Provider>
}