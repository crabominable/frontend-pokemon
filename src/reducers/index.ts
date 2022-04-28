import { FAILED_REQUEST, GET_POKEMON, REQUEST_POKEMON } from "../actions/actionTypes";

const initialState = {
  isFetching: false,
  pokemonArray: []
}

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_POKEMON:
      return {
        ...state,
        isFetching: true,
      };
    case GET_POKEMON:
      return {
        ...state,
        imagePath: action.payload,
        isFetching: false,
      };
    case FAILED_REQUEST:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
