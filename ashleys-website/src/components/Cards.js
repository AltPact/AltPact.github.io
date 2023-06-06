import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>
        Check out this
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__item'>
            <CardItem></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards