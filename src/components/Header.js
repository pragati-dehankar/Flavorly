import { CART_LOGO } from "../utils/constants"; 
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import logo from "../assests/food-Photoroom.png"; // keep your original import

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const [logoError, setLogoError] = useState(false); // state to check if image fails

  return (
    <div className="flex justify-between bg-yellow-200 shadow-lg m-2 sm:bg-pink-400">
      
      {/* Logo */}
      <div className="logo-container flex flex-col items-center justify-center">
        {!logoError ? (
          <img
            className="w-32"
            src=""
            alt="Flavourly Logo"
            onError={() => setLogoError(true)} // show text if image fails
          />
        ) : (
          <div className="text-center">
     <h1 className="text-4xl md:text-5xl font-extrabold 
  bg-gradient-to-r from-yellow-600 via-orange-700 to-red-700 
  text-transparent bg-clip-text tracking-wider">
  Flavourly
</h1>
<p className="text-gray-900 italic mt-1">Delicious food delivered fast!</p>

    </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center">
        <ul className="flex p-5 m-5">
          <li className="px-4">Online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">
            <button
              className="btn"
              onClick={() =>
                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
              }
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 font-bold text-xl flex">
            <Link to="/cart" className="flex items-center">
              <img className="w-12" src={CART_LOGO} alt="Cart" />
              ({cartItems.length} items)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
