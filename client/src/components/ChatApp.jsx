import React from 'react'
import ChatHeader from './ChatHeader'
import ChatCanvas from './ChatCanvas'
import MessageSender from './MessageSender'
import bg from "./Images/phone-wallpaper.png";

export default function ChatApp() {
  return (
    <div className='flex flex-col h-screen w-1/3 bg-cover bg-center bg-no-repeat' 
    style={{
      backgroundImage: `url(${bg})`,
    }}
    >
        <ChatHeader/>
        <ChatCanvas/>
        <MessageSender/>
    </div>
  )
}
