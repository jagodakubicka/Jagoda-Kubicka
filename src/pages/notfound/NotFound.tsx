import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'


export default function NotFound() {
  return (
    <div className='notFound-ctn'>
     <h2>Page not found!</h2>
     <p>Go to the <Link to ="/">Homepage</Link></p>
    </div>
  )
}
