import React from "react";

export default function ChatCanvas({ messages }) {
  return (
    <div id="chatcanvas" className="relative w-full h-full p-3 overflow-x-hidden overflow-y-auto">

      {messages.map((messageComponent, index) => (
        <div key={index}>{messageComponent}</div>
      ))}
    </div>
  );
}
