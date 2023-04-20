import React from 'react'
import Nav from "../Nav/Index"
import Footer from "../Footer/Index"
import { useCurrentUserQuery } from '../../reducers/currentUserApi'
export default function AppLayout({children}) {
  console.log('render')
  const data = useCurrentUserQuery()
  console.log(data)
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}