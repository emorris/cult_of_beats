import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from '../../reducers/currentUserApi'
export default function Logout() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [
    noMoreUser, // This is the mutation trigger
    data, // This is the destructured mutation result
  ] = useLogoutMutation()

  useEffect(()=> {
    const logoutUser = noMoreUser()
  },[])


  if(!data.isUninitialized && !data.isLoading){
    window.location.replace('/');
  }

  return (<></>)
};