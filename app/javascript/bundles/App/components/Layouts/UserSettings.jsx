

import React from 'react'
import Nav from "../UserSettings/Nav"

 

import { Outlet } from "react-router-dom";
export default function UserSettings() {
  return (
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
      <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
        <Nav />
      </div>
      <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

