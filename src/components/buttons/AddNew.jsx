import React from 'react'

const AddNew = ({children, click}) => {
  return (
    <button onClick={click} className="px-4 py-2 rounded-full text-center md:text-[15px] font-bold text-white bg-darkPurple" >
      {children}
    </button>
  )
}

export default AddNew