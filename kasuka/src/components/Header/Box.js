import React from 'react'
import "./Box.css"

export default function Box({icon,title}) {
  return (
    <div className='box'>
        <i className={icon}></i>
        <h4 className='box-title'>{title}</h4>
    </div>
  )
}
