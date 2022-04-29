import React, { useContext, useEffect } from 'react'

import Context from '../../context/AppContext'

import {
  Header,
  PokeBg,
  PokeBar,
  Footer } from '../../components'

import './style.css'

const Home = () => {
  const {
    data,
    offsetReqNum,
    fetchApi3 } = useContext(Context)

  useEffect(() => {
    if (offsetReqNum > 1) {
      fetchApi3(offsetReqNum)
    }
  }, [offsetReqNum])

  return (
    <div className='home-main-container'>
      <PokeBg />
      <Header />
      <div className='home-list-pokemon-container'>
        {
          !data ? 'loading' : data.map(
            (pokemon: any, index: any) => <PokeBar data={ pokemon } key={ index } />
          )
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home
