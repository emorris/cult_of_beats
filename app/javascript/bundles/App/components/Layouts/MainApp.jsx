import React from 'react'
import Nav from "../Nav/Index"
import Alerts from "../Alerts/Index"
import Footer from "../Footer/Index"
export default function AppLayout({children}) {
  return (
    <div className="flex flex-col h-screen bg-base-200">
      <Nav />
      <Alerts />
      {children}
      <Footer />
    </div>
  )
}