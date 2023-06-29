import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import io  from 'socket.io-client';
import Chat from '../../components/chat/chat';
export default function Room({socket}) {
    const params = useParams();
    const [messagesData,setMessagesData] = useState([]);
    const [message,setMessage] = useState({
        room:params.id,
        owner:params.name,
        msg:""
    })
    const getMessage = (e) => {
        setMessage({...message,msg:e.target.value})
    }
    const submitMessage = async (e) => {
        e.preventDefault();
        // console.log(message)
        await socket.emit("send-message",message);
        setMessagesData((prev)=>[...prev,message]);

    }
    useEffect(()=>{
        socket.on("receive-message",data=>{
            // console.log(data)
            setMessagesData((prev)=>[...prev,data]);
        })
    },[socket])
    console.log(messagesData)
  return (
    <div>Room: {params.id}:<strong>{params.name}</strong>
    <Chat owner={params.name} messagesData={messagesData} submitMessage={submitMessage} getMessage={getMessage} message={message.msg} />
    {/* <form onSubmit={submitMessage}>
        <input onChange={getMessage} value={message.msg} type="text" placeholder='message' />
        <input type='submit' value="send" />
    </form> */}
    </div>
  )
}
