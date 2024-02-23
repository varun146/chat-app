import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96'>
      <div className='w-full p-8 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-center text-3xl text-gray-800 font-semibold'>Sign Up</h1>
        <form className='flex flex-col gap-4 mt-8'>
          <div>
            <input type='text' placeholder='Full Name' className='w-full text-sm input input-bordered focus:outline-none' />
          </div>
          <div>
            <input type='email' placeholder='Email' className='w-full text-sm input input-bordered focus:outline-none' />
          </div>
          <div>
            <input type='password' placeholder='Password' className='w-full text-sm input input-bordered focus:outline-none' />
          </div>
          <div>
            <input type='password' placeholder='Confirm Password' className='w-full text-sm input input-bordered focus:outline-none' />
          </div>


          <GenderCheckbox />
          <a href='/'>Already have an account?</a>
          <div>
            <button className='btn btn-block btn-bordered'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
// STARTED CODE 
// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96'>
//       <div className='w-full p-8 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-center text-3xl text-gray-800 font-semibold'>Sign Up</h1>
//         <form className='flex flex-col gap-4 mt-8'>
//           <div>
//             <input type='text' placeholder='Full Name' className='w-full text-sm input input-bordered focus:outline-none' />
//           </div>
//           <div>
//             <input type='email' placeholder='Email' className='w-full text-sm input input-bordered focus:outline-none' />
//           </div>
//           <div>
//             <input type='password' placeholder='Password' className='w-full text-sm input input-bordered focus:outline-none' />
//           </div>
//           <div>
//             <input type='password' placeholder='Confirm Password' className='w-full text-sm input input-bordered focus:outline-none' />
//           </div>
//
//
//           <GenderCheckbox />
//           <a href='/'>Already have an account?</a>
//           <div>
//             <button className='btn btn-block btn-bordered'>Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
//
