import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/dataSlice';
const Postdata = () => {
    const dispatch = useDispatch()
    const posts=useSelector(state=>state.posts)
    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])
    console.log(posts)
  return (
    <div>
        {
            posts.posts.map((post,index)=>{
                return(
                    <div key={index}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Postdata
