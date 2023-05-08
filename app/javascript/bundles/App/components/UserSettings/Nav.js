import React, {useState} from 'react'

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="sticky top-0 p-4 w-full">
      <ul className="menu menu-compact flex flex-col p-0 px-4">
        <li>
          <NavLink to="/settings/account" id="" className="flex gap-4   ">
            <div className="fa fa-user-pen fa-1x"></div>
            <span className="flex-1">Account Settings</span>
          </NavLink> 
        </li>
        <li>
          <NavLink to="/settings/profile" id="" className="flex gap-4   ">
            <div className="fa fa-globe fa-1x"></div>
            <span className="flex-1">Profile</span>
          </NavLink> 
        </li>
        <li>
          <NavLink to="/settings/content" id="" className="flex gap-4   ">
            <i className="fa fa-regular fa-circle-play fa-1x"></i>
            <span className="flex-1">Content</span>
          </NavLink> 
        </li>
      </ul>
    </div>
  )
}