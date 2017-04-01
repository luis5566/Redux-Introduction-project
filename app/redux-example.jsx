var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example.');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New State', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>'
  }
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Luis Martins'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Isabel'));

store.dispatch(actions.addMovie('Mad Max', 'action'));

store.dispatch(actions.addMovie('New Movie', 'Romance'));

store.dispatch(actions.removeMovie(1));
