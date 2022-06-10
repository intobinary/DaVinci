/*===
Into Binary (https://davinci.intobinary.org)
&copy; Coryright 2022 Into Binary. All rights reserved.
Written for -- www.davinci.intobinary.org
===*/

/*=== LIBRARIES ===*/
/*== [DAT GUI] *==/

/*=== END LIBRARIES ===*/

/*=== CUSTOM ===*/

/** [DAVINCI -- Alphazet and 'The Robe'] ***/
/** https://davinci.intobinary.org/alphazet-and-the-robe ***/

	/*** GLOBAL VARIABLES & OBJECTS ***/
	/*** END GLOBAL VARIABLES & OBJECTS ***/
	
	/*** SETUP ***/
	/*** END SETUP ***/
	
	/*** EVENTS ***/
	/*** END EVENTS ***/
	
	/*** EVENTS ***/
	/*** END EVENTS ***/
	
	/*** ACTIONS ***/
	
 document.querySelector('.js-button').addEventListener('click', glyphIt(fillRatio));
// document.querySelector('.js-art').addEventListener('click', draw);
	/*** END ACTIONS ***/
	
	/*** FUNCTIONS ***/
	// Hmmmm. What glyphs do we want to use? I usually use cuss words, but I’ll tone it down.
const glyphs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Colors? Sure, we can have 5, 3, 11, 666… There’s a lot out there. Have fun with it! (I hate when people say that).
const colors = ['#f67809', '#faf7db', '#060606'];
// Choose the main thing to put the stuff in. (The Stuff was a good movie.)
//const main = document.querySelector('body');
const main = document.querySelector('.artBG');

/*
All right now, this is where my brain fails and I feel dumber. We need to decide the number glyphs that get plopped and the font size on the square pixelage, so it's evenly filled when the window is big, small, short, wide and the font isn't HUGE on itty bitty windows or too small on the BIG ones.
*/

// How big is that window?
const width = window.innerWidth;
//const width = main.width;
const height = window.innerHeight;
//const height = main.height;
// We want to know how big the room is in square footage… er, window and square pixelage.
//const squarePixelage = width * height;
const squarePixelage = width * height;
const ratio = Math.floor(squarePixelage / 30000);
//var fillRatio = ratio + 20;
var fillRatio = 50;

// Give us a random number. We can tell it how high we want to get.
const rand = max => Math.floor(Math.random() * max);

// Give the background a random color. I hope it’s a good one.
/*
main.style = `
  --background-color: ${colors[rand(colors.length)]};
  --opacity: ${rand(100) / 100 + 0.1}
  `;
  */
//main.style = `background-color: ${colors[rand(colors.length)]};opacity: ${rand(100) / 100 + 0.1}`;
main.style = `background-color: ${colors[rand(colors.length)]};opacity: ${rand(100) / 100 + 0.25}`;

// The main event, plopping glyphs on the page.
function glyphIt(max) {
  // We’re only gonna do this so many times.
  for (let i = 0; i < max; i++) {
    // Let’s get a random glyph
    const glyph = glyphs[rand(glyphs.length)];
    // OK, let's style that glyph with some random choices and make some HTML, a programming language.
	/*
    const glyphElement = `
      <span style="
        --font-size: ${rand(fillRatio) + 5}rem;
        --font-weight: ${300 + rand(700)};
        --top: ${rand(height + 300) - 300}px;
        --left: ${rand(width + 300) - 300}px;
        --color: ${colors[rand(colors.length)]};
        --opacity: ${rand(100) / 100 + 0.1}
      ">
        ${glyph}
      </span>
    `;
	*/
	/*
    const glyphElement = `
      <span style="font-size: ${rand(fillRatio) + 5}rem; font-weight: ${300 + rand(700)}; top: ${rand(height + 300) - 300}px; left: ${rand(width + 300) - 300}px; color: ${colors[rand(colors.length)]}; opacity: ${rand(100) / 100 + 0.1}">${glyph}</span>
    `;
	*/
    const glyphElement = `<span style="font-size: ${rand(fillRatio) / 1.75}em; font-weight: ${300 + rand(700)}; position: absolute; top: ${rand(height + 300) - 300}px; left: ${rand(width + 150) - 150}px; color: ${colors[rand(colors.length)]}; opacity: ${rand(100) / 100 + 0.25}">${glyph}</span>`;
    // Here we go, puttin’ it on the page or whatever.
    main.insertAdjacentHTML('beforeend', glyphElement);
  }
}

// Yup, we’re gonna do this. How many times?
// This is based on window size (see notes above).
// You could also replace the parameter with a number, multiple it, divide it, randomize it…. Neat thing about things is you can do many things or nothing.
glyphIt(fillRatio);
document.querySelector("button").addEventListener("click", function() {
	main.innerHTML = "";
	glyphIt(fillRatio);
});

// Let’s do this! Ready‽ Oh, we already did.

// Thanks for stopping by! I hope you like this or at least I helped you exercise your eye muscles while you rolled them. I made this on my birthday, more fun than having a party.

	/*** END FUNCTIONS ***/

/*=== END CUSTOM ===*/