import React from 'react'

const Conversation = () => {
  return (
    <div className='flex my-2 gap-2 items-center  hover:bg-purple-300  rounded p-2 py-1 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img src='/male-avatar.png' alt='user avatar' />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='px-2 flex gap-3 justify-between'>
          <p className="font-bold text-white">Varun Garg</p>
          <span className='text-xl'>🐱</span>
        </div>
      </div>
    </div >
  )
}

export default Conversation
