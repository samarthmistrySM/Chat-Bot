import React from 'react'
import ChatHeader from './ChatHeader'
import ChatCanvas from './ChatCanvas'
import MessageSender from './MessageSender'
import bg from "../Images/bg.jpeg";
import { useState } from 'react';

export default function ImageGen() {
  const [messages, setMessages] = useState([]);
  
  return (
    <div className='chatApp flex flex-col h-screen w-screen md:w-1/3 bg-cover bg-center bg-no-repeat z-10' 
    style={{
      backgroundImage: `url(${bg})`,
      // background: '#000000',
    }}
    >
        <ChatHeader name ={"Gemini Image"}/>
        <ChatCanvas messages={messages}/>
        <MessageSender setMessages={setMessages} type={"image"}/>
    </div>
  )
}
