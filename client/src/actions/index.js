import axios from 'axios';

export const save_house_to_store = id => {
  return {
    type: 'SAVE_HOUSE',
    houseID: id
  };
};

export const save_house = id => {
  return dispatch => {
    axios.post('/saved_houses/add', { id: id });
    dispatch(save_house_to_store(id));
  };
};

export const remove_house_from_store = id => {
  return {
    type: 'REMOVE_HOUSE',
    houseID: id
  };
};

export const remove_house = id => {
  return dispatch => {
    axios.post('/saved_houses/delete', { id: id });
    dispatch(remove_house_from_store(id));
  };
};

export const save_username = username => ({
  type: 'SAVE_USERNAME',
  username
});
