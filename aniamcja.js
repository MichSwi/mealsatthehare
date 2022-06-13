let box1 = document.querySelector("#animacjajp");
// setInterval(function() {console.log(box1.getBoundingClientRect().top)}),1000);
box1.firstElementChild.classList.remove("inner");
box1.firstElementChild.classList.add("inner2");
let interval = setInterval(function(){box1.getBoundingClientRect().top <= 0 ? 
changeClass() : null});

function changeClass() {
	box1.firstElementChild.classList.remove("inner2");
	box1.firstElementChild.classList.add("inner");
	clearInterval(interval);
}