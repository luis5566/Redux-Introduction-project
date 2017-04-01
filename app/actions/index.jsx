var axios = require('axios');
export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
}

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

export var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

export var startLocationFeatch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

export var completeLocationFeatch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFeatch());

    axios.get('http://ipinfo.io').then((res) => {
      var loc = res.data.loc;
      var baseUrl = 'http://maps.google.com?q=';

      dispatch(completeLocationFeatch(baseUrl + loc));
    });
  };
};
