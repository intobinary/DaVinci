/*===
Into Binary (https://davinci.intobinary.org)
&copy; Coryright 2022 Into Binary. All rights reserved.
Written for -- www.davinci.intobinary.org
===*/

/*=== LIBRARIES ===*/
/*=== END LIBRARIES ===*/

/*=== CUSTOM ===*/
/** DAVINCI -- Paint Ubuntu ***/
/** https://davinci.intobinary.org/paint-ubuntu ***/

	/*** GLOBAL VARIABLES & OBJECTS ***/
	/*** END GLOBAL VARIABLES & OBJECTS ***/
	
	/*** SETUP ***/
	/*** END SETUP ***/
	
	/*** EVENTS ***/
	/*** END EVENTS ***/
	
	/*** EVENTS ***/
	document.onload = generateTiles();
	/*** END EVENTS ***/
	
	/*** ACTIONS ***/
document.getElementsByTagName("button")[0].onclick = function () {
	generateTiles();
};
document.getElementById("tilesWall").onclick = function () {
	generateTiles();
};
	/*** END ACTIONS ***/
	
	/*** FUNCTIONS ***/	
	function generateTiles() {
	// reset the HTML
	const tilesWall = document.getElementById("tilesWall");
	tilesWall.innerHTML = "";
	// variables
	const colorPalettes = [
		["#E8C547", "#30323D", "#4D5061", "#5C80BC", "#CDD1C4"],
		["#D6FFF6", "#231651", "#4DCCBD", "#2374AB", "#FF8484"],
		["#1C1D21", "#A288A6", "#BB9BB0", "#CCBCBC", "#F1E3E4"],
		["#DE9151", "#F34213", "#2E2E3A", "#BC5D2E", "#BBB8B2"],
		["#002A32", "#C4A29E", "#EBA6A9", "#FFC6AC", "#F40076"],
		["#FCFCFC", "#F7567C", "#FFFAE3", "#99E1D9", "#5D576B"]
	];
	const styles = [
		"circle-up",
		"circle-right",
		"circle-down",
		"circle-left",
		"circle",
		"triangle-up",
		"triangle-down"
	];
	const colors =
		colorPalettes[generateRandomNumber(0, colorPalettes.length - 1)];

	// populate the HTML with classes/styles
	for (var r = 1; r <= 100; r++) {
		const gridItem = document.createElement("div");
		const selectedStyle = `${styles[generateRandomNumber(0, styles.length - 1)]}`;
		gridItem.setAttribute("class", selectedStyle);
		if (selectedStyle === "triangle-up") {
			gridItem.style.background = `linear-gradient(225deg,  ${
				colors[generateRandomNumber(0, colors.length - 1)]
			} 50%, ${colors[generateRandomNumber(0, colors.length - 1)]} 50%)`;
		} else if (selectedStyle === "triangle-down") {
			gridItem.style.background = `linear-gradient(315deg, ${
				colors[generateRandomNumber(0, colors.length - 1)]
			} 50%, ${colors[generateRandomNumber(0, colors.length - 1)]} 50%)`;
		} else {
			gridItem.style.background = `radial-gradient(circle, ${
				colors[generateRandomNumber(0, colors.length - 1)]
			} 35%, ${colors[generateRandomNumber(0, colors.length - 1)]} 35%)`;
		}
		tilesWall.appendChild(gridItem);
	}
}
// HELPER FUNCTIONS utils.js
// generate random number between min and max
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

	/*** END FUNCTIONS ***/

/*=== END CUSTOM ===*/