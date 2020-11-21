function loadRepos() {
	console.log("Load repos has fired!");
	let ulHTML = document.getElementById("repos");
	console.log(ulHTML);
	ulHTML.innerHTML = "";

	let usernameToFetch = document.getElementById("username").value;
	console.log("The username to find is ", usernameToFetch);

	let repoToGet = `https://api.github.com/users/${usernameToFetch}/repos`;
	console.log(repoToGet);

	fetch(repoToGet) // We looked it up
		.then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw Error(response.statusText);
			}
		})
		.then((data) => {
			console.log("The data from Fetch is " + data);
			data.map((repo) => {
				let newLI = document.createElement("li");
				let newLink = document.createElement("a");
				newLink.textContent = repo.name;
				newLink.href = repo.html_url;
				newLI.appendChild(newLink);
				ulHTML.appendChild(newLI);
			});
		})
		.catch((error) => {
			console.log(error);
			ulHTML.innerHTML = `<li>${error}</li>`;
		});
}
