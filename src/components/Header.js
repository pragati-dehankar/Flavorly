import { CART_LOGO, LOGO_URL, SEARCH_BUTTON } from "../utils/constants";
import { useState } from "react";
//import { UseSelector, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import logo from "./assests/food-Photoroom.png"




const Header=()=>{
//let btnName="Login";

const [btnNameReact,setBtnNameReact]=useState("Login");

const onlineStatus=useOnlineStatus();


//console.log("header render");
const cartItems=useSelector((store)=>store.cart.items)

  return(
    <div className="flex justify-between  bg-yellow-200  shadow-lg m-2  sm:bg-pink-400">
       
      <div className="logo-container">
        <img
        className="w-32"
        src={logo}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5">
          <li className="px-4">
            online status:{onlineStatus ? "✅":"🔴"}
          </li>
      
          <li className="px-4">
           <Link to="/"> Home</Link>
            </li>
          <li className="px-4">
          <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4"><button className="btn"  onClick={()=>{
            btnNameReact === "Login" ? setBtnNameReact("Logout"):
             setBtnNameReact("Login");
          }}>{btnNameReact}</button></li>
          <li className="px-4 font-bold text-xl flex">
            <Link to="/cart" className="flex">
              <img className="w-12" src={CART_LOGO}/>({cartItems.length} items)
              </Link>
              </li>
          {/* <button className="login">Login</button> */}
        
        </ul>
      </div>
    </div>
  );
};

export default Header;