import React from 'react'
import dp from './Images/dp2.jpeg'
import { FiInfo } from 'react-icons/fi'

export default function ChatHeader() {
  return (
    <div className='w-full p-3 flex items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <img className="w-14 h-14 rounded-full object-cover" src={dp} alt="dp" />
      <div className='w-full flex justify-between items-center px-3'>
        <h2 className='text-white text-xl font-semibold'>Alice</h2>
        <button><FiInfo className='text-xl font-semibold text-white'/></button>
      </div>
    </div>
  )
}
