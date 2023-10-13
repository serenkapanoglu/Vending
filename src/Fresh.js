import React from "react";
import { Link } from "react-router-dom";
import "./Fresh.css"

function Fresh() {
return(
    <div className="fresh-container">
        <div className="background-image"></div>
        <h1>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU! 
            <br /> <br />
        <Link to="/">GO BACK</Link></h1>
       
        
    </div>
)

}

export default Fresh;