import React from "react";
import { Link } from "react-router-dom";
function Home() {
return(
    <div>

    <h2>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h2>
 <ul>
                
                <li><Link to="/soda">SODA</Link></li>
                <li><Link to="/chips">CHIPS</Link></li>
                <li><Link to="/fresh">FRESH SARDINES</Link></li>

            </ul>
    </div>
)

}

export default Home;