import React from "react";
import { FiCamera, FiSend } from "react-icons/fi";
import axios from "axios";
import { useState } from "react";
import SentChat from "./MessagesType/SentChat";
import ReceivedChat from "./MessagesType/ReceivedChat";
import ErrorResponse from "./MessagesType/ErrorResponse";
import ImageResponse from "./MessagesType/ImageResponse";

export default function MessageSender({ setMessages,type }) {
  const [prompt, setPrompt] = useState("");

  const handleSend = async (e) => {
    // Prevent default form submission
    e.preventDefault();

    setMessages((prev) => [...prev, <SentChat sentChat={prompt} />]);
    setPrompt("");

    try {
      const response = await axios.post(`http://localhost:4000/${type}`, {
        prompt,
      });
      
      const contentType = response.headers.get("Content-Type");
      if (contentType.includes("application/json"))
        throw new Error("Invalid Response Occured!");

      else if (response) {
        const data = (response.data);

        if(type === "image"){
          setMessages((prev) => [
            ...prev,
            <ImageResponse imgUrl={data} />,
          ]);
        }else{
          setMessages((prev) => [
            ...prev,
            <ReceivedChat receivedChat={data} />,
          ]);
        }

        
      }
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        <ErrorResponse errorMessage={error.message} />,
      ]);
    }
  };

  return (
    <div
      className="flex w-full p-3 items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <div className="p-4 rounded-full border-2 text-gray-400 border-gray-400 md:hover:text-white md:hover:border-white">
        <FiCamera />
      </div>
      <form
        onSubmit={handleSend}
        className="inputTag w-full ml-3 flex rounded-full text-lg bg-transparent border-2 border-gray-400 text-white"
      >
        <input
          type="text"
          className="w-full p-3 bg-transparent focus:outline-none"
          placeholder="Type a message..."
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
        <button className="p-3" type="submit">
          <FiSend />
        </button>
      </form>
    </div>
  );
}
