import React, { useState } from "react";
import ChatApp from "./components/ChatApp.jsx";
import ImageGen from "./components/ImageGen.jsx";

export default function App() {
  const [state, setState] = useState("Text");

  const handleTextMode = () => {
    setState("Text");
  };

  const handleImageMode = () => {
    setState("Image");
  };

  return (
    <div className="flex h-screen w-screen justify-center md:items-center relative">
      <div className="w-1/3">
        <button className="w-full h-screen" onClick={handleTextMode}>
          Text
        </button>
      </div>

        {state === "Text" ? <ChatApp /> : <ImageGen />}

      <div className="w-1/3">
        <button className="w-full h-screen" onClick={handleImageMode}>
          Image
        </button>
      </div>
    </div>
  );
}
