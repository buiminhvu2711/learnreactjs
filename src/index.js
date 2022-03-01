
import React from  "react"
import ReactDOM from "react-dom"


import Myinfo from "./components/Myinfo"

import './style.css'

function App()
{
    const first = "Lina"
    const last = "Yun"
    const date = new Date()
    const hours = date.getHours()

    let timeofday
    const style = {
        color:"#ff8c00",
        backgroundColor:"black",
        fontSize: "25px",

    }

    if(hours<12)
    {
        timeofday ="morning"
        style.color ="yellow"
        style.backgroundColor="green"
    }
    else if(hours >=12 && hours < 17)
    {
        timeofday ="afternoon"
        style.color ="red"
        style.backgroundColor="yellow"
    }
    else
    {
        timeofday ="night"
        style.color ="blue"
        style.backgroundColor="pink"
    }
    return (
        // <h1>Hello {frist+"  "+last}</h1>[]
        <h1 style={style}>Hello {first} {last} and now is {date.getHours()%12} o'clock, {timeofday}! </h1>
    )
}
ReactDOM.render(
<Myinfo/>,
document.getElementById("root")
)