import React from 'react';
import ChatApp from './components/ChatApp.jsx';
import videoSrc from './Images/mylivewallpapers-com-Satoru-Gojo-Glass-4K.mp4';

export default function App() {
  return (
    <div className='flex h-screen w-screen justify-center md:items-center relative'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className='absolute md:block hidden w-full h-full object-cover z-1'
        src={videoSrc}
      />
      
      {/* ChatApp */}
      <ChatApp />
    </div>
  );
}
