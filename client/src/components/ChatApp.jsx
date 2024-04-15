import React from "react";
import ChatHeader from "./ChatHeader";
import ChatCanvas from "./ChatCanvas";
import MessageSender from "./MessageSender";
import bg from "../Images/bg2.jpg";
import { useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);

  return (

      <div
        className="chatApp flex flex-col h-screen w-screen md:w-1/3 bg-cover bg-center bg-no-repeat z-10"
        style={{
          backgroundImage: `url(${bg})`,

        }}
      >
        <ChatHeader name={"Gemini Chat"} />
        <ChatCanvas messages={messages} />
        <MessageSender setMessages={setMessages} type={"text"}/>
      </div>
      
  );
}
