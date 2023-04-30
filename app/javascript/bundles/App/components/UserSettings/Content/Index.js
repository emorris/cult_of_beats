import React, {useState} from 'react'
import Youtube from "./Youtube"
import SharedContent from "./SharedContent"
export default function Content() {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow card place-items-center gap-y-4">
            <SharedContent />
        </div>
        <div className="grid flex-grow card place-items-start">
          <Youtube />
        </div>
    </div>
  )
}