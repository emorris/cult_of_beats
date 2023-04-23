import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useCurrentUserQuery } from '../../reducers/currentUserApi'


export default function AuthCheck({children}) {
  const currentUserQuery = useCurrentUserQuery()

  if(currentUserQuery.isFetching && !currentUserQuery.isSuccess){
    return ""
  }else if(!currentUserQuery.isSuccess && !currentUserQuery.isFetching){
    window.location.replace('/')
  }else{
    return <>{children}</>
  }
 
}