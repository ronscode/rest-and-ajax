// create variables from the responses I get from Postman

let swPlanet = 'https://swapi.dev/api/planets/1/';

let swPerson = JSON.parse('{"name":"Tatooine","rotation_period":"23","orbital_period":"304","diameter":"10465","climate":"arid","gravity":"1 standard","terrain":"desert","surface_water":"1","population":"200000","residents":["http://swapi.dev/api/people/1/","http://swapi.dev/api/people/2/","http://swapi.dev/api/people/4/","http://swapi.dev/api/people/6/","http://swapi.dev/api/people/7/","http://swapi.dev/api/people/8/","http://swapi.dev/api/people/9/","http://swapi.dev/api/people/11/","http://swapi.dev/api/people/43/","http://swapi.dev/api/people/62/"],"films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/4/","http://swapi.dev/api/films/5/","http://swapi.dev/api/films/6/"],"created":"2014-12-09T13:50:49.641000Z","edited":"2014-12-20T20:58:18.411000Z","url":"http://swapi.dev/api/planets/1/"}')

let swMovie = JSON.parse('{
  "title": "Return of the Jedi",
  "episode_id": 6,
  "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
  "director": "Richard Marquand",
  "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
  "release_date": "1983-05-25",
  "characters": [
      "http://swapi.dev/api/people/1/",
      "http://swapi.dev/api/people/2/",
      "http://swapi.dev/api/people/3/",
      "http://swapi.dev/api/people/4/",
      "http://swapi.dev/api/people/5/",
      "http://swapi.dev/api/people/10/",
      "http://swapi.dev/api/people/13/",
      "http://swapi.dev/api/people/14/",
      "http://swapi.dev/api/people/16/",
      "http://swapi.dev/api/people/18/",
      "http://swapi.dev/api/people/20/",
      "http://swapi.dev/api/people/21/",
      "http://swapi.dev/api/people/22/",
      "http://swapi.dev/api/people/25/",
      "http://swapi.dev/api/people/27/",
      "http://swapi.dev/api/people/28/",
      "http://swapi.dev/api/people/29/",
      "http://swapi.dev/api/people/30/",
      "http://swapi.dev/api/people/31/",
      "http://swapi.dev/api/people/45/"
  ],
  "planets": [
      "http://swapi.dev/api/planets/1/",
      "http://swapi.dev/api/planets/5/",
      "http://swapi.dev/api/planets/7/",
      "http://swapi.dev/api/planets/8/",
      "http://swapi.dev/api/planets/9/"
  ],
  "starships": [
      "http://swapi.dev/api/starships/2/",
      "http://swapi.dev/api/starships/3/",
      "http://swapi.dev/api/starships/10/",
      "http://swapi.dev/api/starships/11/",
      "http://swapi.dev/api/starships/12/",
      "http://swapi.dev/api/starships/15/",
      "http://swapi.dev/api/starships/17/",
      "http://swapi.dev/api/starships/22/",
      "http://swapi.dev/api/starships/23/",
      "http://swapi.dev/api/starships/27/",
      "http://swapi.dev/api/starships/28/",
      "http://swapi.dev/api/starships/29/"
  ],
  "vehicles": [
      "http://swapi.dev/api/vehicles/8/",
      "http://swapi.dev/api/vehicles/16/",
      "http://swapi.dev/api/vehicles/18/",
      "http://swapi.dev/api/vehicles/19/",
      "http://swapi.dev/api/vehicles/24/",
      "http://swapi.dev/api/vehicles/25/",
      "http://swapi.dev/api/vehicles/26/",
      "http://swapi.dev/api/vehicles/30/"
  ],
  "species": [
      "http://swapi.dev/api/species/1/",
      "http://swapi.dev/api/species/2/",
      "http://swapi.dev/api/species/3/",
      "http://swapi.dev/api/species/5/",
      "http://swapi.dev/api/species/6/",
      "http://swapi.dev/api/species/8/",
      "http://swapi.dev/api/species/9/",
      "http://swapi.dev/api/species/10/",
      "http://swapi.dev/api/species/15/"
  ],
  "created": "2014-12-18T10:39:33.255000Z",
  "edited": "2014-12-20T09:48:37.462000Z",
  "url": "http://swapi.dev/api/films/3/"
}')

console.log(swPerson,swPerson.diameter)
