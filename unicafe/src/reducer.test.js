import deepFreeze from 'deep-freeze';
import counterReducer from './reducer';

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  };

  test('should return a proper initial state when called with undefined state', () => {
    const state = {};
    const action = {
      type: 'DO_NOTHING',
    };

    deepFreeze(state);
    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('GOOD is incremented', () => {
    const action = {
      type: 'GOOD',
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });
  });

  test('OK is incremented', () => {
    const action = {
      type: 'OK',
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0,
    });
  });

  test('bad is incremented', () => {
    const action = {
      type: 'BAD',
    };
    const state = initialState;

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1,
    });
  });

  test('zero resets to initial state', () => {
    const action = {
      type: 'ZERO',
    };
    const state = {
      good: 1,
      ok: 1,
      bad: 1,
    };

    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual(initialState);
  });

  test('all is incremented', () => {
    const good = {
      type: 'GOOD',
    };
    const bad = {
      type: 'BAD',
    };
    const ok = {
      type: 'OK',
    };
    const state = initialState;

    deepFreeze(state);
    const newState1 = counterReducer(state, good);
    const newState2 = counterReducer(newState1, bad);
    const newState3 = counterReducer(newState2, ok);
    expect(newState3).toEqual({ good: 1, ok: 1, bad: 1 });
  });
});
