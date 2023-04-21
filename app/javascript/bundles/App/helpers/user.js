import React from 'react'

export const getUserIcon = (user, default_size=2) => {
  if(user.attributes.avatar){
    return  <img src={user.attributes.avatar} />
  }else{
    return  <div className={`fa fa-ghost fa-${default_size}x`}></div>
  }
}