

import React from 'react'

export default function BasicAlert() {
  return (
    <div className="alert shadow-lg alert-info">
        <div className="">
          <button className="fa-regular fa-circle-xmark"></button>
          <span className="animate-pulse">New software update available.</span>
        </div>
    </div>
  )
}

