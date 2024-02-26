import React from 'react'

import Messages from "./Messages"
import MessageInput from "./MessageInput"

const MessageContainer = () => {
  const noChatSelected = false;

  return (
    <div className='md:min-w-[650px] flex flex-col'>
      {noChatSelected ? <NoChatSelected /> : (
        <>
          <div className='bg-neutral-500 px-4 py-2 mb-2'>
            <span className='font-bold text-white '>John Doe</span>
          </div>

          <Messages />
          <MessageInput />

        </>
      )}
    </div>
  );
};



const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome Logged In user</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>

  )
}

export default MessageContainer
