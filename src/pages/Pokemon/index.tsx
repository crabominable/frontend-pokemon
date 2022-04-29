import React, { useEffect, useContext } from 'react'

import Context from '../../context/AppContext'

import {
  Header,
  PokeBg,
  Footer} from '../../components'

import './style.css'

function Pokemon() {
  const { uniqueData, fetchApi2 } = useContext(Context)

  useEffect(() => {
    fetchApi2(window.location.pathname)
  }, [])

  return (
    <div>
      <Header />
      <PokeBg />
      <div className='pokemon-main-container'>
        <div className='pokemon-bar'>
          <div className='pokemon-sprite-number'>
            { !uniqueData ? 'loading' : <img src={ uniqueData.sprites.front_default } /> }
            { !uniqueData ? 'loading' : <p>Nº { uniqueData.order }</p> }
          </div>
          { !uniqueData ? 'loading' : <p style={ { marginRight: '1em' } }>{ uniqueData.name }</p> }
        </div>
        <div className='pokemon-details-container'>
          <div className='pokemon-details-content'>
            <p>Type</p>
            { !uniqueData ? 'loading' : <p>{ uniqueData.types[0].type.name }</p>}
          </div>
          <div className='pokemon-details-content'>
            <p>Weight</p>
            { !uniqueData ? 'loading' : <p>{ uniqueData.weight }</p>}
          </div>
          <div className='pokemon-details-content'>
            <p>Height</p>
            { !uniqueData ? 'loading' : <p>{ uniqueData.height }</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pokemon
