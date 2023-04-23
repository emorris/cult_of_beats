

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function BasicAlert() {
  const alerts = useSelector((state) => state.alerts.value)
  const dispatch = useDispatch()

  return (
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
      <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
          <div className="sticky top-0 p-4 w-full">
              <ul className="menu menu-compact flex flex-col p-0 px-4">
                <li>
                  <a href="/docs/install" id="" className="flex gap-4   ">
                    <span className="flex-none"></span>
                    <span className="flex-1">Install</span> 
                  </a> 
                </li>
              </ul>
          </div>
      </div>
      <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
        <h1>Hello</h1>
      </main>
    </div>
  )
}

