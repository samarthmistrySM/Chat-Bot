import React from 'react'
import ChatHeader from './ChatHeader'
import ChatCanvas from './ChatCanvas'
import MessageSender from './MessageSender'

export default function ChatApp() {
  return (
    <div className='flex h-screen w-1/3'>
        <ChatHeader/>
        <ChatCanvas/>
        <MessageSender/>
    </div>
  )
}
