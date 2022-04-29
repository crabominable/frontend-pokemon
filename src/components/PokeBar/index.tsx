import React from 'react'

import { Link } from 'react-router-dom'

import './style.css'

const PokeBar = (props: any) => {
  return (
    <Link to={`/pokemon/${props.data.name}`} className='pokebar-main-container'>
      <p className='pokebar-poke-name'>{ props.data.name }</p>
    </Link>
  )
}

export default PokeBar
