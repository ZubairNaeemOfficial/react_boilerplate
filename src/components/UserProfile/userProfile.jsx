import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const {userId}=useParams()
    let [user,setUser]=React.useState("")
    const fetchuserData=async ()=>{
        let response =await axios.get(`https://jsonplaceholder.typicode.com/todos/${userId}`)
        setUser(response.data)
        console.log(response.data)
    }
    useEffect(()=>{
        fetchuserData()
        },[userId])
        console.log(user,"user data console before return ")
  return (
    <div>
      <h1>User Profile</h1>
      <h1>user id : {userId} {user.title}</h1>
    </div>
  )
}

export default UserProfile
