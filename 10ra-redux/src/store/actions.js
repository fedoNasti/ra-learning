import { INCREMENT, DECREMENT, ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE } from './actionTypes';
import { nanoid } from 'nanoid';
import { thunk } from 'redux-thunk';
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from './actionTypes';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const addService = (name, price) => {
  return async (dispatch) => {

    try {
      const newService = {name, price: Number(price)};
      const response = await fetch('http://localhost:3000/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newService),
      });

      if (!response.ok) throw new Error('Ошибка добавления');
      const createdService = await response.json();
      dispatch({ type: ADD_SERVICE, payload: createdService });

    } catch (error) {
      console.error('Add error:', error);
    }
  }
}


export const removeService = (id) => {
  return async (dispatch) => {

    try {
      const response = await fetch(`http://localhost:3000/services/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json"}
      });

      if (!response.ok) {
        throw new Error(`Ошибка удаления: ${response.status}`);
      }

      dispatch({ type: REMOVE_SERVICE, payload: { id } });
    } catch (error) {
      dispatch({ type: FETCH_SERVICES_FAILURE, payload: error.message });
    }
  }
}

export const changeService = (id, name, price) => {
  return async (dispatch) => {

    try {
      const updateService = { name, price: Number(price) };
      const response = await fetch(`http://localhost:3000/services/${id}`, {
        method: 'PUT',
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(updateService),
      });

      if(!response.ok) throw new Error('Ошибка обновления');

      const updated = await response.json();
      dispatch({ type: CHANGE_SERVICE, payload: updated });

    } catch (error) {
      console.error('Change error:', error);
    }
  }
};

export const fetchServices = () => {
  return async (dispatch) => {
    // 1. Диспатчим REQUEST
    dispatch({ type: FETCH_SERVICES_REQUEST });

    try {
      // Имитация запроса к API (json-server)
      const response = await fetch('http://localhost:3000/services');
      const data = await response.json();

      // 2. Диспатчим SUCCESS с данными
      dispatch({ type: FETCH_SERVICES_SUCCESS, payload: data });

    } catch (error) {

      // 3. Диспатчим FAILURE с ошибкой
      dispatch({ type: FETCH_SERVICES_FAILURE, payload: error.message });
    }
  }
}

