var redux = require('redux');

console.log('starting redux example');

//A reduce is a pure function that takes your existing state as argument
var reducer = (state = {name: 'anonymous'}, action) => {
  //state = state || {name: 'anonymous'};
  console.log('New action', action);
  switch (action) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }

  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
};

store.dispatch(action);

console.log('name should be andrew', store.getState());
