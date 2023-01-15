import React from 'react'

const Animation = () => {
  return (
    <div className='flex items-center justify-center px-16'>
    <div className='relative w-full max-w-lg my-40'>
      <div className='absolute top-0 -left-4 w-72 h-72 bg-purple-300
      rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob'></div>
      <div className='absolute top-0 -right-4 w-72 h-72 bg-yellow-300
      rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob'></div>
      <div className='absolute top-0 -bottom-8 left-20 w-72 h-72 bg-pink-300
      rounded-full mix-blend-multiply filter blur-2xl opacity-70'></div>
    </div>
    </div>
  )
}

export default Animation