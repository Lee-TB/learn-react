import React, { useContext, useReducer } from 'react';

const CounterContext = React.createContext();

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {children}
    </CounterContext.Provider>
  );
}

const useCounterContext = () => {
  return useContext(CounterContext);
};

export { useCounterContext };

export default CounterProvider;
