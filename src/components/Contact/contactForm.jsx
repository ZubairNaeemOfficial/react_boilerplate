import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/context'

const ContactForm = () => {
    const {setUser,inputdepended,user}=useContext(UserContext)
    // json placeholder fake users api 
    let  fetchdata=async()=>{
        let {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data)
        setUser(data[0].name)
    }
    useEffect(()=>{
        fetchdata()
    },[inputdepended])
  return (
    <div>{user}</div>
  )
}

export default React.memo(ContactForm)