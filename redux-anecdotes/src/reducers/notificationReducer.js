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
    message: message,
  };
};

export const hideNotification = () => {
  return {
    type: 'HIDE',
  };
};

export default notificationReducer;
