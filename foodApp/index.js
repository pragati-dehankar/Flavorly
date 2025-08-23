import React from "react";
import ReactDOM from"react-dom";

const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.freepik.com/free-photos-vectors/food-logo-png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout=()=>{
   return <div className="app">

   </div>
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);