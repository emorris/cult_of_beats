
import React from 'react'
import CardLayout from '../CardLayout'

const basicProfileInfoInputs =[
  {
    name: "Artist Name",
    nameId: "name"
  },
  {
    name: "Url Path Name",
    nameId: "path_name"
  }
]


export default function Info({onChange, isLoading}) {
  
  const updateProfile = () => {
    
  }
  const inputFields = () => {
    return basicProfileInfoInputs.map((item) => {
      return (        
        <div className="form-control flex" key={`profileInfo-${item.nameId}`}>
          <label className="label">
            <span className="label-text  text-neutral-content">{item.name}</span>
          </label>
          <input 
            onChange={onChange}
            name={item.nameId}
            type="text" 
            placeholder="" 
            className="input input-bordered"
          />
        </div>
      )
    })
  }

  return (
    <CardLayout title={"Content Links"} isLoading={isLoading} onClick={updateProfile}>
     
     {inputFields()}

     <div className="form-control">
        <span className='w-16 place-content-center'>Bio</span>
          
          <textarea 
            placeholder="Bio" 
            className="textarea textarea-bordered textarea-sm w-full max-w-xs" >

        </textarea>
      </div>

    </CardLayout>
  )
  

  
}