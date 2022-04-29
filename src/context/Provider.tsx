import React, { useEffect, useRef, useState } from "react"

import Context from "./AppContext"

export default function Provider({ children }: any) {
  const [data, setData] = useState([])
  const [pokemonName, setPokemonName] = useState('')
  const [uniqueData, setUniqueData] = useState('')
  const [offsetReqNum, setOffsetRedNum] = useState(1)
  const [count, setCount] = useState(0)

  const fetchApi = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10')
      .then((res) => res.json())
      .then((resData) => resData.results)
    setData(response);
  };

  const fetchApi2 = async (name: any) => {
    const response = await fetch(`https://pokeapi.co/api/v2${name}/`)
      .then((res) => res.json())
      .then((resData) => resData)
    setUniqueData(response)
  }

  const fetchApi3 = async (num: any) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${num}0&limit=10`)
      .then((res) => res.json())
      .then((resData) => resData.results)
    const newArray = data.concat(response)
    setData(newArray)
  }

  useEffect(() => {
    if (data.length === 0) {
      fetchApi()
    }
  }, [data])

  return (
    <Context.Provider value={ {
      data,
      setData,
      uniqueData,
      setUniqueData,
      fetchApi3,
      fetchApi2,
      pokemonName,
      setPokemonName,
      offsetReqNum,
      setOffsetRedNum
      } }
    >
      {children}
    </Context.Provider>
  )
}
