import React from 'react'
import {Link} from "react-router-dom";
export default function Main() {
  return (
    <>
    <ul>
        <li>
            <Link to='/login'>Login</Link>
        </li>
        <li>
            <Link to='/registration'>Registration</Link>
        </li>
    </ul>
    </>
  )
}
