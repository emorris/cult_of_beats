import React, {useState} from 'react'
import Password from './AccountSettings/Password'
import UserInfo from './AccountSettings/UserInfo'
export default function Index() {
  return (
    <div className="flex flex-col w-full gap-4 ">
        <UserInfo />
        <Password />
      </div>
    )
}