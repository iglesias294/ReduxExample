var redux = require('redux');

//reducer
//create store
//get state

console.log('starting exercise');
var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
