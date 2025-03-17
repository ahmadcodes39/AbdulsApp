import React from 'react'

const ModelPageHeading = ({srNo,title,headline,description}) => {
    return (
        <div className='flex flex-col gap-3 mt-16'>
          <h1 className='text-black text-xl font-bold'>{srNo}. {title}</h1>
          <p className='text-gray-500 px-7'>Dataset:{headline}</p>
          <p className='px-7 py-5 text-gray-500 w-[95%]'>{description}</p>
        </div>
      )
}

export default ModelPageHeading
