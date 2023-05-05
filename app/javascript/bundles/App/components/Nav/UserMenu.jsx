import React from 'react'
import {userLinks} from "./NavLinks"
import { NavLink } from "react-router-dom";

import {getUserIcon} from "../../helpers/user"
export default function UserMenu({user}) {
  const userLinkElements = userLinks(user.attributes).map((link) => {
    if(link.react){
      return(
        <li key={link.url}><NavLink to={link.url}>{link.name}</NavLink></li>
      )
    }else{
      return ( <li key={link.url}><a href={link.url} target="_blank">{link.name}</a></li>)
    }
   
  })
  return (
      <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder text-primary">
            <div className="w-10 rounded-full">{getUserIcon(user)}</div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {userLinkElements}
          </ul>
      </div>
    )
}