import {
  FAILED_REQUEST,
  GET_POKEMON,
  REQUEST_POKEMON } from "./actionTypes";

export const getPokemon = (json: any) => {
  return {
    type: GET_POKEMON,
    payload: json,
  };
}

export const requestPokemon = () => {
  return {
    type: REQUEST_POKEMON,
  };
}

export const failedRequest = (error: any) => {
  return {
    type: FAILED_REQUEST,
    payload: error,
  };
}

export function fetchPokemon() {
  return (dispatch: any) => {
    dispatch(requestPokemon());
    return fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(json => dispatch(getPokemon(json)))
      .catch(error => dispatch(failedRequest(error)))
  };
}
