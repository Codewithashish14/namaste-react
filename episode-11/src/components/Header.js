import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Header = () => {


    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

// if no dependency array => useEffect is called on every render

// if empty dependency array [] => useEffect is called only on initial render

//if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
useEffect(() => {
    console.log("useEffect called");
}, [btnNameReact]);



   const {loggedInUser} = useContext(UserContext);
   console.log(loggedInUser);

    return (
        <div className="flex justify-between p-4 m-2 bg-green-100 shadow-lg sm:bg-yellow-100 lg:bg-pink-100">
            <div className="logo-container">
                <img className="w-24 h-24" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery </Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login bg-amber-50 px-4 py-2 rounded-lg justify-center -mt-2 cursor-pointer"
                        onClick={() => {
                          btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>

                     <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;