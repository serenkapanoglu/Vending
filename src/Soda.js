import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css"
function Soda() {
return(
    <div className="soda-container">
        
        <div className="left">
        <img
        src="https://media.giphy.com/media/3o72FhzTRUrcEZZh5u/giphy.gif"
        alt="soda"
        />
        </div>

        <div className="center">
        <h1>OMGGG SUGARRRR</h1>
        <div><Link className="link" to="/">GO BACK</Link></div>
        </div>
        <div className="right">
        <img
        src="https://media.giphy.com/media/3o72FhzTRUrcEZZh5u/giphy.gif"
        alt="soda2"
        />
        </div>
        <br />
        <br />
        
        
    </div>
)

}

export default Soda;