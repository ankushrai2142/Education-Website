import React from 'react'
import './Title.css'

const Title = ({subTitle,subTitle2}) => {
  return (
    <div className='title container '>
        <p> {subTitle} </p>
        <h2> {subTitle2} </h2>
    </div>
  )
}

export default Title