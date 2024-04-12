import React from 'react'
import ChatHeader from './ChatHeader'
import ChatCanvas from './ChatCanvas'
import MessageSender from './MessageSender'
import bg from "../Images/phone-wallpaper.png";
import DesktopBg from "../Images/Desktop-Wallpaper.png"
import { useState } from 'react';

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  
  return (
    <div className='chatApp flex flex-col h-screen w-screen  bg-cover bg-center bg-no-repeat z-10' 
    // style={{
    //   backgroundImage: `url(${DesktopBg})`,
    //   // background: '#000000',
    // }}
    >
        <ChatHeader/>
        <ChatCanvas messages={messages}/>
        <MessageSender setMessages={setMessages}/>
    </div>
  )
}
