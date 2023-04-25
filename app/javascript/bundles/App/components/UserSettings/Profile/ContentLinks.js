
import React, {useState} from 'react'
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

export default function ContentLinks({userProfile}) {
  const id = userProfile.id
  const savedData = userProfile.attributes
  const isLoading = false
  
  const default_params = inputs.reduce((map, obj) => {
    map[obj.nameId] = savedData.site_links[obj.nameId]
    return map
  }, {})
  
  const [params, setParamState] = useState(default_params)
  
  const updateProfile = () => {
    
  }
  
  const handleChange = ({target: { name, value }}) =>{
    const [params, setParamState] = useState({})
    setParamState((prev) => ({ ...prev, [name]: value }))
  }

  const links = () => {
    return inputs.map((item) => {
      return (        
        <div class="form-control flex" key={`content-link-${item.nameId}`}> 
          <label className="input-group">
            <span className='w-16 place-content-center'>
              <div className={`fa fa-brands fa-2x fa-${item.nameId}`}></div>
            </span>
            <input 
              onChange={handleChange} 
              defaultValue={params[item.nameId]}
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