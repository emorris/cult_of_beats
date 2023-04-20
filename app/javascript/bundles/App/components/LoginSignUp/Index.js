import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetCurrentUserQuery } from '../../reducers/currentUserApi'
import Login from "./Login"
import SignUp from "./SignUp"
export default function Index() {
  return (
    <div className="flex w-full p-5">
      <Login />
      <div className="divider divider-horizontal"></div>
      <SignUp />
    </div>
  )
}