import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_FAIL, REGISTER_SUCCESS } from './types';

// register user
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application-json'
    }
  };

  const body = { name, email, password };

  try {
    const res = await axios.post('/api/users', body, config);
    console.log('res : ', res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log('gone in catch');
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};
