import React, { useContext } from 'react'
import { UserContext } from '../../context/context'

const about = () => {
    const {inputdepended,setInputdepended}=useContext(UserContext)
  return (
    <div>
        <input type="text" value={inputdepended} placeholder="enter text" onChange={(e)=>setInputdepended(e.target.value)}/>
        {/* <div>{user}</div> */}
    </div>
  )
}

export default about