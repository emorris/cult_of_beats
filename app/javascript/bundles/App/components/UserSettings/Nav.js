import React, {useState} from 'react'

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="sticky top-0 p-4 w-full">
      <ul className="menu menu-compact flex flex-col p-0 px-4">
        <li>
          <NavLink to="/settings/account" id="" className="flex gap-4   ">
            <span className="flex-none"></span>
            <span className="flex-1">Account Settings</span> 
          </NavLink> 
        </li>
      </ul>
    </div>
  )
}