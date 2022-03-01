import React from "react"

import Footer from "./Footer.js"
import Header from "./Header.js"
import Maincontent from "./MainContent.js"
import Todoitem from "./Todoitem"

//import name nao thi tra ve name do, name phai giong nhau
function Myinfo()
{
  return(
    <div>
      <Header />
      <Maincontent /> 
      <Footer />
        <div className="todo-list">
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        </div>
    </div>
  )
}

export default Myinfo