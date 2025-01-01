import React from 'react'
import {Link} from "react-router-dom";
export default function Main() {
  return (
    <div className='bg-gray-900 opacity-30 w-[50%] ml-[25%] h-[60vh] mt-[20vh] rounded-[10px] border border-gray-900'>
    <ul className='flex justify-around'>
        <li>
            <Link to='/login'>Login</Link>
        </li>
        <li>
            <Link to='/registration'>Registration</Link>
        </li>
    </ul>
    </div>
  )
}
