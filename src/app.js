import React from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header"
import FoodOption from "./components/FoodOption";
import GroceryOption from "./components/GroceryOption";
function App(){

return(
    <>
    <Header></Header>
    <FoodOption></FoodOption>
    <GroceryOption></GroceryOption>
    </>
)

}

ReactDom.createRoot(document.getElementById('root')).render(<App></App>)