import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD',
    });
  };
  const ok = () => {
    store.dispatch({
      type: 'OK',
    });
  };

  const bad = () => {
    store.dispatch({
      type: 'BAD',
    });
  };
  const reset = () => {
    store.dispatch({
      type: 'ZERO',
    });
  };

  const all = () => {
    return store.getState().good + store.getState().ok + store.getState().bad;
  };

  const average = () => {
    return (store.getState().good - store.getState().bad) / all();
  };

  const positive = () => {
    return (store.getState().good / all()) * 100;
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={good}>good</button>
      <button onClick={ok}>neutral </button>
      <button onClick={bad}>bad </button>
      <button onClick={reset}>reset stats </button>
      <h2>Statistics</h2>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
      <div>all {all()}</div>
      <div>average {average() ? average() : ''}</div>
      <div>positive {positive() ? `${positive()}%` : ''}</div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);
