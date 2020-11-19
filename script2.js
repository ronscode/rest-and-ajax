fetch('https://swapi.dev/api/people/4') 
.then((response) => response.json()) // THEN means promise to give a response, which is now a variable
.then((cat) => console.log(JSON.stringify(cat))) 
.catch((error) => console.error(error))