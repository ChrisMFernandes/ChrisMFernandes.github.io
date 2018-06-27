let modal = document.getElementById('myModal');

let img = Array.from(document.getElementsByClassName('myImg'));
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');
let featureText = Array.from(document.getElementsByClassName('feature-text'));
let captionTitle = document.getElementById('caption-title');
let captionDesc = document.getElementById('caption-description');
let captionUrl = document.getElementById('caption-url');


let projects = {
	"PerfectPantry" : {
		name: "PerfectPantry",
		description: "An application built in Ruby on Rails and Bootstrap. The purpose of PerfectPantry is to store and search favorite recipes as well as read articles about cooking tips and tricks",
		repo: "https://github.com/ChrisMFernandes/perfectpantry"
	},

	"PerfectPlan" : {
		name: "PerfectPlan",
		description: "An application built with Ruby on Rails and Materialize. Built as a group project for NYCDA WDI and inspired by the local music scene. The purpose of the application is to connect local artists to venues in there area.",
		repo: "https://github.com/skhoule/nycda-perfectplan"
	}
}

img.forEach((element) => {
	element.addEventListener('click', function () {
		console.log(projects);	
	    modal.style.display = 'block';
	    modalImg.src = this.src;
    	let projectKey = element.dataset.name
    	captionTitle.innerText = projectKey;
    	let projectInfo = element.dataset.description;
    	captionDesc.innerText = projectInfo;
    	let projectUrl = element.dataset.repo;
    	captionUrl.href = projectUrl	
    	})
})

let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = 'none';
}

