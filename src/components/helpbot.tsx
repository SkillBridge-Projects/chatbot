"use client";
import React, { useState } from "react";
interface HelpbotProps {
  iframeUrl: string;
}
const Helpbot: React.FC<HelpbotProps> = ({ iframeUrl }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      {/* Chat Icon */}
      {!isChatOpen && (
        <div
          id="chatIcon"
          onClick={toggleChat}
          className="fixed bottom-[3vh] right-[1%] w-[60px] h-[60px] bg-[#7471FF] rounded-full flex justify-center items-center cursor-pointer z-[1001] shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
        >
          <img src="/chatbot-pic.svg" alt="Chatbot Icon" />
        </div>
      )}
      {/* Chat Window */}
      <div
        id="chatWindow"
        style={{ display: isChatOpen ? "block" : "none" }}
        className="fixed bottom-[1vh] right-[1%] w-[360px] h-[545px] border border-transparent rounded-[24px] bg-white z-[10000] shadow-md animate-fadeIn max-w-[calc(100%-20px)] max-h-[calc(100vh-20px)] overflow-hidden"
      >
        {/* <header className="bg-white shadow-[rgba(0,0,0,0.05)_0px_0.48px_2.41px_-0.38px,rgba(0,0,0,0.17)_0px_4px_20px_-0.75px] border-b-2 border-blue-500 p-2 text-[16px] font-bold text-center rounded-t-[24px] relative">
            <img src="/chatbot-header_logo.svg" alt="Chatbot Header Logo" className="mx-auto" />
          </header> */}
        <button
          onClick={toggleChat}
          aria-label="Close"
          className="absolute top-[1rem] right-4 text-blue-500 text-[24px] hover:text-[#ff4b5c] block"
        >
          {/* <X size={24} /> */}-
        </button>
        <iframe
          src={iframeUrl}
          className="w-full h-full border-0 scrollbar-thin overflow-y-auto overflow-x-hidden"
          frameBorder="0"
          title="Embedded Content"
        ></iframe>
      </div>
    </div>
  );
};
export default Helpbot;
