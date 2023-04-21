import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetCurrentUserQuery } from '../../reducers/currentUserApi'
import Login from "./Login"
import SignUp from "./SignUp"
import { useCurrentUserQuery } from '../../reducers/currentUserApi'
import {loadingSpinner} from '../../helpers/loading'
export default function Index() {
  const currentUserQuery = useCurrentUserQuery()
  if(currentUserQuery.status =="rejected"){
    return (
      <div className="flex w-full p-5">
        <Login />
        <div className="divider divider-horizontal"></div>
        <SignUp />
      </div>
    )
  }else{
    return loadingSpinner()
  }
  
}