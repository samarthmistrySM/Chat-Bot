import React from "react";
import bg from "./Images/phone-wallpaper.png";

export default function ChatCanvas() {
  return (
    <div
      id="chatcanvas"
      className="relative h-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        // backgroundImage: `url(${bg})`,

      }}
    >
      <div className="content p-3 overflow-y-auto h-full z-10">
        {/* Add your content here */}
      </div>
    </div>
  );
}
