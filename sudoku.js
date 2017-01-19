
//start with this

//123 456 789
//456 789 123
//789 123 456

//234 567 891
//567 891 234
//891 234 567

//345 678 912
//678 912 345
//912 345 678

//create 9 3x3 boards 
var exampleboard = 
[[1,2,3,4,5,6,7,8,9],
 [4,5,6,7,8,9,1,2,3],
 [7,8,9,1,2,3,4,5,6],
 [2,3,4,5,6,7,8,9,1],
 [5,6,7,8,9,1,2,3,4],
 [8,9,1,2,3,4,5,6,7],
 [3,4,5,6,7,8,9,1,2],
 [6,7,8,9,1,2,3,4,5],
 [9,1,2,3,4,5,6,7,8]];

console.log(exampleboard);

//begin
//enter desriable difficulty value
// 

//generate empty sudoku board

var rows = 9, 
	columns = 9,
	board = [];

	for (var i = 0; i < rows; i++) {
		var stuff = [];
		for (var j = 0; j < columns; j++) {
			stuff.push(0);
		}
		board.push(stuff);
	}

console.log(board);


//generate list of free cells on sudoku board
var free_cells = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
count = 0;
// while(count < 81){
// 	free_cells[count] = count + 1;
// 	count += 1;
// }

console.log(free_cells);




// board[0][0] = number;

for (var i = 0; i < board.length; i++) {
	//possibilities for rows
	var r = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (var j = 0; j < board[i].length; j++) {
			//possibilities for columns
		var	found = [1, 2, 3, 4, 5, 6, 7, 8, 9],
			index = i;
		while(index > 0){
			index--;
			found.splice(found.indexOf(board[index][j]),1);


		}
		var possibilities = found.filter(function(n){
			return r.indexOf(n) > -1;
		});
		number = possibilities[generateNumber(0, possibilities.length)];
		board[i][j] = number;
		r.splice(r.indexOf(number),1);

	}
}



//randomly place in one of the remaining free cells the number on sudoku board in accordance to the sudoku rules
for(i = 0; i <= 81; i++){
	// cell = Math.floor(Math.random() * free_cells.length());
	console.log(cell);
}



function printBoard(){
	var table = document.createElement("table");
	for (var i = 0; i < board.length; i++) {
		var row = document.createElement("tr");
		table.appendChild(row);
		var box;
		for (var j = 0; j < board[i].length; j++) {
			box = document.createElement("td");
			box.innerText = board[i][j] === 0 ? "": board[i][j];
			row.appendChild(box);
		}
	}
	document.body.appendChild(table);
}


//sudoku rules:
//1. unique number for the row
//2. unique number for the column
//3. unique number for the 3x3 box



//check that there is still at least one solution for the sudoku board (do this using backtracking solver)
//if not, undo the random number placement and repeat with another number and cell.

//do this until the board is full


/**
 * Generates random number to place on Sudoku board
 */
function generateNumber(min, max){
	//generate random number
	number = Math.floor((Math.random() * max) + min);
	return number;
}

function check(number, position){

}

function enter(position){

}

function navigation(){

}


function generate(argument) {
	//random number generator
	//generate randomly placed 1 for board1, randomly placed 2 for board2, etc...?

}

//analyze difficulty of sodoku puzzle?
//this is done by determining the number of logical decisions needed to make or something like that


//create puzzle navigtion controller
//
