import React from "react";


export default function ChatCanvas({ messages }) {
  return (
    <div id="chatcanvas" className="relative h-full p-3 overflow-y-auto">
      {messages.map((messageComponent, index) => (

        <div key={index}>{messageComponent}</div>
      ))}
    </div>
  );
}
