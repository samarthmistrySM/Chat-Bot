import React from 'react'

export default function SentChat({sentChat}) {
  return (
    <div className="flex justify-end mb-2">
      <div className="bg-green-500 text-white rounded-tr-none rounded-lg p-3 max-w-md relative">
        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 transform translate-x-3 translate-y-3 rotate-45"></div>
        <p className="text-sm">
          {sentChat}
        </p>
      </div>
    </div>
  )
}
