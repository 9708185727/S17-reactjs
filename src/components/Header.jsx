import React, { useState } from "react";
import navMenu from "../constants/navMenu";
import { NavLink } from "react-router-dom";
import { FaShopware } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/auth/authSlice";
import CartProductDrop from "./cart/CartProductDrop";
import { GrCart } from "react-icons/gr";
const Header = () => {
  const [isOpen,setOpen]=useState(false)
  const [isMobileMenu, setMobileMenu] = useState(false);
  const {user}=useSelector((state)=>state.auth)
  const isActive = ({ isActive }) =>isActive ? "px-2 py-1 text-white bg-blue-700 rounded " : null;
const isAuthenicated=user?true:false
 const dispatch=useDispatch();
  function logout() {
    dispatch(userLogout());
  }
  return (
    <>
      <nav className="  bg-white sticky top-0 w-full z-20 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl mx-12 flex flex-wrap items-center justify-between  p-4">
          <div
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <FaShopware className="text-teal-400 text-3xl" />
            <span className="self-center text-2xl font-semibold text-cyan-500 whitespace-nowrap dark:text-white">
              Shop
            </span>
           {isAuthenicated? <div className="relative">
              <button onClick={()=>setOpen(!isOpen)}>
              <GrCart  className="text-teal-900"/>
              </button>
            <div className="absolute top-10 left-80">
            <CartProductDrop isOpen={isOpen} setOpen={setOpen}/>
            </div>
            </div>:null}
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
           {user? <button
              onClick={logout}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
          Logout
            </button>:null}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setMobileMenu(!isMobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between   w-full md:flex md:w-auto md:order-1 ${
              isMobileMenu ? "hidden" : null
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navMenu.filter((menu)=>menu.auth===isAuthenicated).map((menu) => (
                <li key={menu.route} className="py-2">
                  <NavLink to={menu.route} className={isActive}>
                    {menu.label}
                  </NavLink>
                </li>
              ))}
              {/* <li>
          <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
