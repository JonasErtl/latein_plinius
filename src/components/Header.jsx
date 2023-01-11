import React from 'react'

const Header = () => {
  return (
  <div className='fixed top-3 left-2 right-2 h-15 w-fit m-0 flex flex-row bg-gray-900 text-white shadow-lg'>
        <HeaderIcon icon={<FaFire size='28'/>}/>
    </div>
  )
}

const HeaderIcon = ({icon}) => (
  <div className='header-icon'>
    {icon}
  </div>
);

export default Header