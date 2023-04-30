import React from 'react'
import { loadingSpinner } from '../../helpers/loading'

export default function CardLayout({title, isLoading, onClick, children, btnName}) {
  if(!!isLoading){
    isLoading = false
  }
  btnName = btnName ? btnName : "Update"
  return(
    <div className="grid flex-grow card ">
      <div className="card max-w-xl bg-neutral text-neutral-content">
        <div className="card-body ">
          <h2 className="card-title">{title}</h2> 
          {children}
          <div className="card-actions justify-end">
            <button
              onClick={() => onClick()} 
              className="btn btn-primary gap-2">
                {btnName} {loadingSpinner(isLoading)}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}