import React from 'react'
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className='px-3 my-3'>
      <div className='w-full relative'>
        <input type='text' placeholder='Send a message...' className='text-sm rounded-full block w-full px-4  py-2 focus:outline-none bg-gray-700  text-white' />
        <button type="submit" className='absolute inset-y-0 end-0 flex items-center pe-3'><BsSend /></button>


      </div>

    </form>
  )
}

export default MessageInput
