/*===
Into Binary (https://davinci.intobinary.org)
&copy; Coryright 2022 Into Binary. All rights reserved.
Written for -- www.davinci.intobinary.org
===*/

/*=== LIBRARIES ===*/
/*== [DAT GUI] *==/

/*=== END LIBRARIES ===*/

/*=== CUSTOM ===*/

/** [DAVINCI -- Babylon19 and 'The Tree of Time'] ***/
/** https://davinci.intobinary.org/babylon19-and-the-tree-of-time ***/

	/*** GLOBAL VARIABLES & OBJECTS ***/
	/*** END GLOBAL VARIABLES & OBJECTS ***/
	
	/*** SETUP ***/
	/*** END SETUP ***/
	
	/*** EVENTS ***/
	/*** END EVENTS ***/
	
	/*** EVENTS ***/
	/*** END EVENTS ***/
	
	/*** ACTIONS ***/
	
 document.querySelector('.js-button').addEventListener('click', init);
// document.querySelector('.js-art').addEventListener('click', draw);
	/*** END ACTIONS ***/
	
	/*** FUNCTIONS ***/
	// ==============
// VARS & CONSTS
// ==============

var RADIUS = 50;

var canvas;
var context;
var color = "#000";
var root;
var slices = [];
var options = {
	radius: 50,
	branching: 0.8,
	size: 0.001
};

var Stage = {
//	width: window.innerWidth / 2,
//	width: document.querySelector(".museum-frame-art-img").width(),
	width: "350",
	height: "450"
//	height: window.innerHeight / 1.5
//	height: document.querySelector(".museum-frame-art-img").height()
//	height: document.querySelector(".museum-frame-art-img").height()
};


// ==============
// SETUP
// ==============

function init() {
	canvas = document.getElementById( "canvas" );
	context = canvas.getContext( "2d" );

	initGUI();
	bindListeners();
	rebuild();
}

function initGUI() {
	var gui = new dat.GUI();
  
  options.rebuild = rebuild;

	gui.add( options, "radius", 3, 500 ).onChange( render );
	gui.add( options, "branching", 0.1, 5 ).onFinishChange( rebuild );
	gui.add( options, "rebuild" ).name( "New Tree" );
}

function bindListeners() {
	window.addEventListener( "resize", onResize );
}

function rebuild() {
	root = new Slice( null );
	render();
}

function clear() {
	canvas.width = Stage.width;
	canvas.height = Stage.height;
}

function render() {
	clear();

	context.fillStyle = "#370854";
	context.strokeStyle = "#fff";

	root.update();
	root.render();
}

function onResize() {
//	Stage.width = window.innerWidth / 2;
	Stage.width = "15em";
//	Stage.height = window.innerHeight / 2;
	Stage.height = "20em";

	render();
}

// =============
// UTILS
// =============

function ellipse( x, y, width, height ) {
	var halfWidth = width / 2;
	var halfHeight = height / 2;

	context.moveTo( x - halfWidth, y );
	context.bezierCurveTo( x - halfWidth, y - halfHeight, x + halfWidth, y - halfHeight, x + halfWidth, y );
	context.bezierCurveTo( x + halfWidth, y + halfHeight, x - halfWidth, y + halfHeight, x - halfWidth, y );
}

function random( min, max ) {
	return min + Math.random() * ( max - min );
}

function angleToCoordinates( angle ) {
	return {
		x: Math.cos( angle ),
		y: Math.sin( angle )
	}
}

function distance( a, b ) {
	var x = b.x - a.x;
	var y = b.y - a.y;

	return Math.sqrt( x * x + y * y );
}


// ==============
// SLICE
// ==============

function Slice( predecesor, angle, branchingOffset ) {

	var x, y;
	var factor;
	var radius;
	var children = [];
	var self = this;

	function init() {
		angle += random( -0.1, 0.1 );

		slices.push( self );

		if ( predecesor === null ) {

			x = Stage.width / 2;
			y = Stage.height * 0.8;
			factor = 1;
			radius = options.radius;
			angle = Math.PI / 2;
			branchingOffset = Math.max( 0, options.branching + random( -0.2, 0.2 ) );

		} else {

			var values = angleToCoordinates( angle );

			x = predecesor.getX() + values.x * 10;
			y = predecesor.getY() - values.y * 6;
			factor = predecesor.getFactor() - ( options.size + random( 0.001, 0.04 ) );
			radius = factor * options.radius + random( 1, 4 );
		}

		createChild();
	}

	function createChild() {
		if ( factor < 0 ) return;

		branchingOffset -= 0.1;

		if ( branchingOffset < 0 ) {

			children.push( new Slice( self, angle + random( 0, 0.5 ), random( 0.5, 1 ) ) );
			children.push( new Slice( self, angle - random( 0, 0.5 ), random( 0.5, 1 ) ) );

		} else {

			children.push( new Slice( self, angle, branchingOffset ) );

		}
	}

	self.update = function() {
		radius = factor * options.radius + random( 10, 15 );

		if ( predecesor === null ) {
			x = Stage.width / 2;
			y = Stage.height * 0.8;
		} else {
			var values = angleToCoordinates( angle );

			x = predecesor.getX() + values.x * 10;
			y = predecesor.getY() - values.y * 6;
		}

		children.forEach( function( child ) {
			child.update();
		} );
	}

	self.render = function() {

		context.beginPath();
		ellipse( x, y, radius, radius );
		context.closePath();
		context.fill();
		context.stroke();

		children.forEach( function( child ) {
			child.render();
		} );
	};

	self.getFactor = function() {
		return factor;
	};

	self.getX = function() {
		return x;
	};

	self.getY = function() {
		return y;
	};

	init.call( self );
}


// ============================
// LET'S GET THIS PARTY STARTED
// ============================

init();

var guiMenu = document.querySelector(".dg.main.a");
document.querySelector(".dg.ac").remove();
//document.querySelector(".art-ai").appendChild(guiMenu);
//alert("HELLO!");
	/*** END FUNCTIONS ***/

/*=== END CUSTOM ===*/