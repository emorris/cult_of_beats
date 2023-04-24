import React, {useState} from 'react'
import Password from './Password'
import UserInfo from './UserInfo'
export default function Account() {
  return (
    <div class="flex flex-col w-full gap-4 ">
        <UserInfo />
        <Password />
      </div>
    )
}