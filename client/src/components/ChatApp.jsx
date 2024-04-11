import React from 'react'
import ChatHeader from './ChatHeader'
import ChatCanvas from './ChatCanvas'
import MessageSender from './MessageSender'
import bg from "../Images/dp.jpeg";
import { useState } from 'react';

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  
  return (
    <div className='flex flex-col h-[87vh] md:h-screen w-screen md:w-1/3 bg-cover bg-center bg-no-repeat z-10' 
    style={{
      backgroundImage: `url(${bg})`,
    }}
    >
        <ChatHeader/>
        <ChatCanvas messages={messages}/>
        <MessageSender setMessages={setMessages}/>
    </div>
  )
}
