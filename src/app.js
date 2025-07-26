import React from "react";
import ReactDom from "react-dom/client"
import Home from "./components/Home"
import Restaurant from "./components/Restaurant";
function App(){

return(
    <>
    <Home></Home>
    <Restaurant></Restaurant>
    </>
)

}

ReactDom.createRoot(document.getElementById('root')).render(<App></App>)