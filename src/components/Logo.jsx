import React from 'react'
import image from '../assets/image.png'

function Logo({ width = '100px' }) {
  return (
    <div>
      <img 
        src={image} 
        alt="Blog Logo"
        style={{ width }}
      />
    </div>
  )
}

export default Logo
