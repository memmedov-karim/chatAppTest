import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import JoinForm from '../../components/joinForm/joinForm';
import { useNavigate } from 'react-router-dom';
import './home.css';

export default function Home({socket}) {
    
    const naviqate = useNavigate();
    const [user_room,setUserRoom] = useState({
        user:"",
        room:""
    })
    const getData = (e) => {
        setUserRoom(prev=>{
            return {
            ...prev,
            [e.target.name]:e.target.value
    }})
    }
    const submitRoom = (e) => {
        e.preventDefault();
        // console.log(user_room);
        socket.emit("join-room",user_room.room);
        naviqate(`/room/${user_room.user}/${user_room.room}`)

    }
  return (
    <div className='home'>
        <JoinForm submitRoom={submitRoom} user_room={user_room} setUserRoom = {setUserRoom} getData = {getData} />
    </div>
  )
}
