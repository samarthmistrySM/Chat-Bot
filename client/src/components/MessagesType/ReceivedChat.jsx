import React from 'react'

export default function RecievedChat({receivedChat}) {
  return (
    <div className="flex justify-start mb-2">
      <div className="bg-blue-500 text-white rounded-tl-none rounded-lg p-3 md:max-w-screen-lg max-w-md relative">
        <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 transform -translate-x-3 translate-y-3 rotate-45"></div>
        <p className="text-sm">
        {receivedChat}
        </p>
      </div>
    </div>
  )
}
