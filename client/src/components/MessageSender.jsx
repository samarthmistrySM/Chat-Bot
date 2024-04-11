import React from "react";
import { FiCamera, FiSend } from "react-icons/fi";

export default function MessageSender() {
  return (
    <div className="flex p-3 items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="p-4 rounded-full border-2 text-gray-400 border-gray-400 md:hover:text-white md:hover:border-white">
        <FiCamera />
      </div>
      <div className="inputTag w-full ml-3 flex rounded-full text-lg bg-transparent border-2 border-gray-400 text-white  ">
      <input
        className=" w-full p-3 bg-transparent focus:outline-none"
        placeholder="Type a message..."
      />
      <button className="p-3">
        <FiSend/>
      </button>
      </div>
    </div>
  );
}
