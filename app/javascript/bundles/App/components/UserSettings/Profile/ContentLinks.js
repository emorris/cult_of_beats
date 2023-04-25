
import React from 'react'
import CardLayout from '../CardLayout'
const inputs =[
  {
    name: "Instagram",
    nameId: "instagram"
  },
  {
    name: "Soundcloud",
    nameId: "soundcloud"
  },
  {
    name: "Youtube",
    nameId: "youtube"
  },
  {
    name: "Spotify",
    nameId: "spotify"
  },
  {
    name: "TikTok",
    nameId: "tiktok"
  },

]

export default function ContentLinks({onChange, isLoading, updateProfile}) {
  
  const links = () => {
    return inputs.map((item) => {
      return (        
        <div class="form-control flex">
          <label className="input-group">
            <span className='w-16 place-content-center'>
              <div className={`fa fa-brands fa-2x fa-${item.nameId}`}></div>
            </span>
            <input 
              onChange={onChange} 
              name={item.name}
              placeholder={item.name}
              type="text" 
              className="input input-border w-full" />
          </label>
        </div>
      )
    })
  }

  return (
    <CardLayout title={"Content Links"} isLoading={isLoading} onClick={updateProfile}>
      {links()}
    </CardLayout>
  )
  

  
}