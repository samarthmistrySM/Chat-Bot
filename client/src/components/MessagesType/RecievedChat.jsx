import React from 'react'

export default function RecievedChat({recievedChat}) {
  return (
    <div className="flex justify-start mb-2">
      <div className="bg-gray-200 text-black rounded-tl-none rounded-lg p-3 max-w-md relative">
        <div className="absolute top-0 left-0 w-3 h-3 bg-gray-200 transform -translate-x-3 translate-y-3 rotate-45"></div>
        <p className="text-sm">
        {recievedChat}
        </p>
      </div>
    </div>
  )
}
