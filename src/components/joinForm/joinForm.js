import React from 'react'
import './joinform.css';
export default function JoinForm({user_room,setUserRoom,getData,submitRoom}) {
  return (
    <form onSubmit={submitRoom} className='joinForm'>
        <h1>Join Chat!</h1>
        <input onChange={getData} name="user" className='name' type='text' placeholder='name' value={user_room.user} />
        <input onChange={getData} name="room" className='name' type='text' placeholder='room' value={user_room.room} />
        <input onChange={getData} className='join' type='submit' value="Join Room" />
    </form>
  )
}
