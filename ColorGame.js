var numSquares = 6;
var body = document.querySelector("body");
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = colors[randomColor()];
console.log(randomColor());
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", function(){
		hardButton.classList.remove("selected");
		easyButton.classList.add("selected");
		numSquares = 3;
		colors = generateRandomColor(numSquares);
		pickedColor = colors[randomColor()];
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			}
			else {
				squares[i].style.display = "none";
			}
		}

})

hardButton.addEventListener("click", function(){
		hardButton.classList.add("selected");
		easyButton.classList.remove("selected");
		numSquares = 6;
		colors = generateRandomColor(numSquares);
		pickedColor = colors[randomColor()];
		colorDisplay.textContent = pickedColor;	
		for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}	
			

})

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	// regenerate new colors
	colors = generateRandomColor(numSquares);
	pickedColor = colors[randomColor()];
	colorDisplay.textContent = pickedColor;
	geColorInSquares();
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Game";

});


function geColorInSquares(){
		for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		// grabbing color
		var clickedColor = this.style.backgroundColor;
		// Comparing color of the square to the color in the h1
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColor(pickedColor);
			resetButton.textContent = "Play again?"
			h1.style.backgroundColor = pickedColor;   
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});

}
}
geColorInSquares();

function changeColor(color){
	// looping through all the squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function randomColor(){
	return Math.floor(Math.random() * colors.length); 
}

function generateRandomColor(num){
	// create an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++ ){
			arr.push(randomrgb());
	}
	return arr;
}

function randomrgb(){
	var r = Math.floor(Math.random() *  256);
	var g = Math.floor(Math.random() *  256);
	var b = Math.floor(Math.random() *  256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

