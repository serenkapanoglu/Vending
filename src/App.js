import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Soda from "./Soda";
import Fresh from "./Fresh";
import Chips from "./Chips";


function App() {
return(
  <div>
    
    <BrowserRouter>
   
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/soda" element={<Soda />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/fresh" element={<Fresh />} />
    </Routes>
    </BrowserRouter>

 
  </div>
)
}

export default App;