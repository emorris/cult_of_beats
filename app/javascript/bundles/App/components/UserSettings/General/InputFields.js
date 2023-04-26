import React from 'react'

function BasicInput({inputTypes, onChange, defaultValues, inputGroup, item}){
  return(
    <div className="form-control flex">
      <label className="label">
        <span className="label-text  text-neutral-content">{item.name}</span>
      </label>
      <input 
        onChange={onChange}
        name={item.nameId}
        defaultValue={defaultValues[item.nameId]}
        type="text" 
        placeholder="" 
        className="input input-bordered"
      />
    </div>  
  )
}


function GroupInput({inputTypes, onChange, defaultValues, inputGroup, item}){
  return(
    <div className="form-control flex"> 
      <label className="input-group">
        <span className='w-16 place-content-center'>
          <div className={`fa fa-brands fa-2x fa-${item.nameId}`}></div>
        </span>
        <input 
          onChange={onChange} 
          defaultValue={defaultValues[item.nameId]}
          name={item.nameId}
          placeholder={item.name}
          type="text" 
          className="input input-border w-full" />
      </label>
    </div>
  )
}


export default function InputFields(props) {

  return props.inputTypes.map((item) => {
    let key = `input-link-${item.nameId}`
    if(item.inputType =="group"){
      return <GroupInput {...props} item={item} key={key} />
    }else{
      return <BasicInput {...props} item={item} key={key} />
    }
  })

}