import React from 'react'

const MainHeading = ({srNo,title,headline}) => {
  return (
    <div className='flex flex-col gap-3 mt-16'>
      <h1 className='text-black text-xl font-bold'>{srNo}. {title}</h1>
      <p className='text-gray-500 px-7'>{headline}</p>
    </div>
  )
}

export default MainHeading
