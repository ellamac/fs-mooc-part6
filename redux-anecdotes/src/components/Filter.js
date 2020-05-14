import React from 'react';
import { useDispatch } from 'react-redux';
import { filterChange } from '../reducers/filterReducer';

const Filter = (props) => {
  const dispatch = useDispatch();

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter
      <input onChange={({ target }) => dispatch(filterChange(target.value))} />
    </div>
  );
};

export default Filter;
