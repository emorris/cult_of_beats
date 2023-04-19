import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {mainLinks, userLinks} from "./NavLinks"
import { Link } from "react-router-dom";


export default function Header() {
  const [userDropDownVisible, setUserDropDown] = useState(false);
  const currentUser = useSelector((state) => state.currentUser.data)
  const dispatch = useDispatch()
  const mainLinksElements = mainLinks.map((link) => {
    return(
        <li><Link to="..">{link.name}</Link></li>
    )
  })

  const userLinkElements = userLinks.map((link) => {
    return(
        <li><Link>{link.name}</Link></li>
    )
  })
  
  return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {mainLinksElements}
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">CultOfBeats</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {mainLinksElements}
            </ul>
        </div>
        <div className="navbar-end">
            { currentUser == null ?
                <a className="btn">Login/SignUp</a>
              :    
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {userLinkElements}
                </ul>
              </div>
                    
            }
                    

        </div>
    </div>

  )
}