import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from './actionTypes';


const initialState = {
  items: [
    // { id: nanoid(), name: 'Замена стекла', price: 21000 },
    // { id: nanoid(), name: 'Замена дисплея', price: 25000 },
  ],
  loading: false,
  error: null,
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {...state, loading: true, error: null};

    case FETCH_SERVICES_SUCCESS:
      return {...state, loading: false, items: action.payload, error: null};

    case FETCH_SERVICES_FAILURE:
      return {...state, loading: false, error: action.payload};

    case ADD_SERVICE:
      return {...state, items: [...state.items, action.payload]};

    case REMOVE_SERVICE:
      //return {...state, loading: false, items: action.payload, error: null};
      return {...state, items: state.items.filter(service => service.id !== action.payload.id)};

    case CHANGE_SERVICE:
      return {
        ...state,
        items: state.items.map(service =>
        service.id === action.payload.id ? action.payload : service
      )};

    default:
      return state;
  }
}

export default servicesReducer;