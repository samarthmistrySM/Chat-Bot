import React from "react";
import { FiCamera, FiSend } from "react-icons/fi";
import axios from 'axios';
import { useState } from "react";
import SentChat from "./MessagesType/SentChat";
import RecievedChat from "./MessagesType/RecievedChat";


export default function MessageSender({setMessages}) {

  const [prompt, setPrompt] = useState('');

  const handleSend = async() =>{
    setMessages(prev=>[...prev, <SentChat sentChat={prompt}/>]);
    const response =await axios.post('http://localhost:4000/text',{prompt})
    if(response) {
      console.log(response.data);
      (setMessages(prev=>[...prev, <RecievedChat recievedChat={response.data}/>]))
      setPrompt("")
    } else{

      setMessages(prev=>[...prev,<RecievedChat recievedChat={"error"}/>])
      setPrompt("")
    }
  }

  return (
    <div className="flex p-3 items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="p-4 rounded-full border-2 text-gray-400 border-gray-400 md:hover:text-white md:hover:border-white">
        <FiCamera />
      </div>
      <div className="inputTag w-full ml-3 flex rounded-full text-lg bg-transparent border-2 border-gray-400 text-white  ">
      <input
        className=" w-full p-3 bg-transparent focus:outline-none"
        placeholder="Type a message..."
        onChange={(e)=>setPrompt(e.target.value)}
        value={prompt}
      />
      <button className="p-3" onClick={handleSend}>
        <FiSend/>
      </button>
      </div>
    </div>
  );
}
