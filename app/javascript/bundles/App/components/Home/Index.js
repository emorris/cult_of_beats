import React from 'react'

export default function AppLayout({children}) {
  return (
  <div className="flex space-x-4">
    <div className="w-3/4"><img src="https://cdn.shopify.com/s/files/1/0093/4956/2468/products/square3_1024x1024@2x.jpg"/></div>
    <div className="w-1/4"><img src="https://cdn.shopify.com/s/files/1/0093/4956/2468/products/square3_1024x1024@2x.jpg"/></div>
  </div>
  )
}