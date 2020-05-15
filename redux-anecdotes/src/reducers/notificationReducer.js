const initialState = '';

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.message;
    case 'HIDE':
      return '';
    default:
      return state;
  }
};

export const showNotification = (message) => {
  return {
    type: 'SHOW',
    message,
  };
};

export const hideNotification = () => {
  return {
    type: 'HIDE',
  };
};

let timer;
export const setNotification = (message, time) => {
  return (dispatch) => {
    dispatch(showNotification(message));
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(hideNotification());
    }, time * 1000);
  };
};

export default notificationReducer;
