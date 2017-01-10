
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
var board = 
[[null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,]];

//generate list of free cells on sudoku board
var free_cells = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
count = 0;
while(count < 81){
	free_cells[count] = count + 1;
	count += 1;
}

console.log(free_cells);

//generate random number

number = Math.floor((Math.random() * 9) + 1);
if (number < 1 | number > 9){
	number = Math.floor((Math.random() * 9) + 1);
}
console.log(number);



//randomly place in one of the remaining free cells the number on sudoku board in accordance to the sudoku rules


//check that there is still at least one solution for the sudoku board (do this using backtracking solver)
//if not, undo the random number placement and repeat with another number and cell.

//do this until the board is full





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
