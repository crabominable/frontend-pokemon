import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { fetchPokemon } from '../../actions'

import Header from '../../components/Header'

import Pokeball from '../../images/pokeball.png'

import './style.css'

interface RootState {
  pokemonArray: any[]
  isFetching: boolean
}

const mapStateToProps = (state: RootState) => ({
  pokemonArray: state.pokemonArray,
  isFetching: state.isFetching
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchPokemon: () => dispatch(fetchPokemon())
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

/* type Props = PropsFromRedux & {
  backgroundColor: string
} */

const Home = (props: PropsFromRedux) => {
  useEffect(() => {
    props.fetchPokemon()
  }, [])
  return (
    <div className='home-main-container'>
      <img className='background-pokeball' src={ Pokeball } />
      <Header />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
