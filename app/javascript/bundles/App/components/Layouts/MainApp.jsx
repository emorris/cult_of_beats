import React from 'react'
import Nav from "../Nav/Index"
import Alerts from "../Alerts/Index"
import Footer from "../Footer/Index"
export default function AppLayout({children}) {
  return (
    <>
      <Nav />
      <Alerts />
      {children}
      <Footer />
    </>
  )
}