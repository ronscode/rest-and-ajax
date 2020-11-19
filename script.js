console.log("SW script file is working...")

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://swapi.dev/api/planets/2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
