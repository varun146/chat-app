import React from 'react'

const Conversation = () => {
  return (
    <div className='flex gap-2 items-center my-2 hover:bg-purple-300  rounded p-2 py-1 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img src='/male-avatar.png' alt='user avatar' />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='px-2 flex gap-3 justify-between'>
          <p className='font-bold text-gray-600'>Varun Garg</p>
          <span className='text-xl'>🐱</span>
        </div>
      </div>
      <div className='divider px-3'></div>
    </div>
  )
}

export default Conversation
