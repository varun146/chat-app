import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-w-96 mx-auto ">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-ip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-gray-700 text-center'>Login
        </h1>
        <form className='flex flex-col gap-4 mt-6'>
          <div>
            <input type='text' placeholder='Username' className='w-full input input-bordered  focus:outline-none h-10' />
          </div>
          <div>
            <input type='password' placeholder='Password' className='w-full input input-bordered  focus:outline-none h-10' />
          </div>
          <a href='/'>{"Don't"} have an account?</a>
          <div>
            <button className='btn btn-block btn-active btn-bordered'>Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login

// STARTER CODE
// const Login = () => {
//   return (
//     <div className="flex flex-col gap-4 items-center justify-center min-w-96 mx-auto ">
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-ip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-gray-700 text-center'>Login
//         </h1>
//         <form className='flex flex-col gap-4 mt-6'>
//           <div>
//             <input type='text' placeholder='Username' className='w-full input input-bordered  focus:outline-none h-10' />
//           </div>
//           <div>
//             <input type='password' placeholder='Password' className='w-full input input-bordered  focus:outline-none h-10' />
//           </div>
//           <a href='/'>{"Don't"} have an account?</a>
//           <div>
//             <button className='btn btn-block btn-active btn-bordered'>Login</button>
//           </div>
//         </form>
//       </div>
//
//     </div>
//   )
// }
//
// export default Login
