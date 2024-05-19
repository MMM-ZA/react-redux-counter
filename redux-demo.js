const { configureStore } = require('@reduxjs/toolkit');

// Defining the initial state
const initialState = {
  counter: 0
};

// Defining the counter reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
};

// Creating the store using configureStore from @reduxjs/toolkit
const store = configureStore({
  reducer: counterReducer
});

// Defining a subscriber function
const counterSubscriber = () => {
  const currentState = store.getState(); // latest state from configureStore
  console.log(currentState);
};

// Subscribe the subscriber function to the store
store.subscribe(counterSubscriber);

// Dispatch an action to test
store.dispatch({ type: 'increment' });
