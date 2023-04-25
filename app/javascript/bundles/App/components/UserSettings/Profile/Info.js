
import React from 'react'
import CardLayout from '../CardLayout'



export default function Info({onChange, isLoading, updateProfile}) {
  

  return (
    <CardLayout title={"Content Links"} isLoading={isLoading} onClick={updateProfile}>
     
     <div class="form-control">
        <span className='w-16 place-content-center'>Bio</span>
          <textarea 
            placeholder="Bio" 
            className="textarea textarea-bordered textarea-sm w-full max-w-xs" >

        </textarea>
      </div>

    </CardLayout>
  )
  

  
}