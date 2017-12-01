var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  name: 'anonymous',
  hobbies: [],
  movies: [] //ID, TITLE, and GENRE
};
var nextHobbyId = 1;
var nextMovieID = 1;


//A reducer is a pure function that takes your existing state as argument
var reducer = (state = stateDefault, action) => {
  //state = state || {name: 'anonymous'};
  console.log('New action', action);
  switch (action) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
      case 'REMOVE_HOBBY':
        return {
          ...state,
          hobbies: state.hobbies.filter((hobby) => {
            return hobby.id !== action.id
          })
        }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieID++,
            name: action.name,
            genre: action.genre
          }
        ]
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter( (movie) => {
          return movie.id !== action.id
        })
      }
    default:
      return state;
  }


  return state;
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension() ? window.devToolsExtension() : f => f
));

// .subscribe() to changes in your state
store.subscribe(() => {
  var state = store.getState();

  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New State', store.getState());
})


// .getState() the current state
var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

//HOBBIES

store.dispatch({
  type: 'ADD_HOBBY',
  name: 'Running',

});

store.dispatch({
  type: 'ADD_HOBBY',
  name: 'Walking',

});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});


//MOVIES
store.dispatch({
  type: 'ADD_MOVIE',
  name: 'Die Hard',
  genre: 'Action'
});

store.dispatch({
  type: 'ADD_MOVIE',
  name: 'Der Herd',
  genre: 'Action'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Arturo'
})
