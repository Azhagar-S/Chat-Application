import { useEffect, useState } from 'react'
import axios from 'axios'

const Chats = () => {
    const [chat , setChat] = useState([])
    const fetchdata = async()=>{
        const response = await axios.get("http://localhost:8000/api/chat")
        setChat(response.data)
    }

    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>{chat.map((data)=>
        <div key={data._id}>{data.chatName}</div>
    )}</div>
  )
}

export default Chats