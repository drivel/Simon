// TODO dev-mode only
console.clear();

const interval = 1000;

const simon = document.querySelector(".simon");

const btns = simon.querySelectorAll(".btn");

const green = simon.querySelector(".green");
const red = simon.querySelector(".red");
const blue = simon.querySelector(".blue");
const yellow = simon.querySelector(".yellow");

let bops = [];
let userBops = [];

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const classes = e.target.classList;

		switch(true) {
			case classes.contains("green"):
				userBops.push(0);
				console.log(userBops);
				break;
			case classes.contains("red"):
				userBops.push(1);
				console.log(userBops);
				break;
			case classes.contains("yellow"):
				userBops.push(2);
				console.log(userBops);
				break;
			case classes.contains("blue"):
				userBops.push(3);
				console.log(userBops);
		}

		checkBops();
	});
});

play = () => {
	userBops = [];
	bops.push(Math.round(Math.random() * 3));

	console.log(bops);

	bops.forEach((bop, index) => {

		setTimeout(() => {
			btns[bop].classList.add("active");

			setTimeout(() => {
				btns[bop].classList.remove("active");
			}, (interval / 2))
		}, (index) * interval);

	});
};

play();

checkBops = () => {
	if (userBops.length < bops.length) {
		if (userBops.slice(-1)[0] === bops[userBops.length-1]) {
			console.log("good so far");
		} else {
			console.log("game over");

			bops = [];
			play();
		}
	} else {
		// TODO next round
		console.log("next round");
		play();
	}
};