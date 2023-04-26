import React from 'react'
import { loadingSpinner } from '../../helpers/loading'

export default function CardLayout({title, isLoading, onClick, children}) {
  if(!!isLoading){
    isLoading = false
  }
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
                Update {loadingSpinner(isLoading)}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}