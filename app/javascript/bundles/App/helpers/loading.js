import React from 'react'

export const loadingSpinner = (isLoading) => {
  if(isLoading){
    return <div 
      className="radial-progress animate-spin text-primary" 
      style={{'--value': 20,"--size": "1.25rem"}}></div>
  }else{
    return <></>
  }
}