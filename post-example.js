// Example of POST request from class

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer YOUR-GITHUB-TOKEN-GOES-HERE ");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"title":"Post data to a server, here is some JSON","body":"I'm having a problem with this."});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.github.com/repos/ronscode/prototype-inheritance-class/issues", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));