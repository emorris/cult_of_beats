import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {mainLinks} from "./NavLinks"
import { Link } from "react-router-dom";
import { useCurrentUserQuery } from '../../reducers/currentUserApi'

import LoginSignUpBtn from './LoginSignUpBtn';
import UserMenu from './UserMenu'


export default function Header() {
  const [userDropDownVisible, setUserDropDown] = useState(false);
  const currentUserQuery = useCurrentUserQuery()
  let currentUser = null
  
  if(currentUserQuery.status == "fulfilled"){
    currentUser = currentUserQuery.data.data
  }
  const mainLinksElements = mainLinks.map((link) => {
    return(
      <li key={link.url}><Link to={link.url}>{link.name}</Link></li>
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
          
          { currentUser == null ? <LoginSignUpBtn /> : <UserMenu user={currentUser} /> }        
        </div>
    </div>

  )
}