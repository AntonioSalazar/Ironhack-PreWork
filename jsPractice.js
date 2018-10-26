

// for (var i = 1; i <= 30; i++){
//   if (i % 7 === 0) {
//     continue;
//   }
//     console.log(i)
// }



// for (let index = 1; index < 50; index++) {
//   if(index % 10 == 0 && index % 15 == 0){
//     console.log("donkey")
//   } else if (index % 2 != 0) {
//     console.log("Monkey")
//     continue;
//   } else{
//     console.log(index)
//   }
// }

//------------ forEach
//Crea una matriz con 6 de tus comidas favoritas.
//Con el ciclo que elijas, recorre el conjunto, pero solo imprime los alimentos con un índice par.

// let food = ["chilaquiles", "tortas", "tacos", "cochinita", "pollito", "alitas"];


// for (let index = 0; index < food.length; index++) {
//   if( index % 2 === 0){
//     console.log(food[index]);
//   }  
// }

//suma de elementos del array, la suma final debe ser 29

// var sum = 0;
// var numbers = [2, 3, 6, 1, 7, 10];

// for(var i = 0; i <= numbers.length; i++){
//    sum += numbers[i];
//    console.log(sum);
// }

// // Log the sum
// console.log(sum);

 



// var currentLargest = 0;
// var numbers = [10, 16, 99, 0, 52, 41, 7];

// for (var i = 0; i <= numbers.length; i++){
  
//   if( numbers[i] > currentLargest)
//   {
//     currentLargest = numbers[i]
//   }
  
// }

// console.log("The largest number is: " +     currentLargest);

//---------- OBJETOS 

// var olympicRecords = 
// {
//   athletics100Men: "Usain Bolt",
//   athleticsLongJumpMen: "Mike Powel",
//   swimming200Men: "Michael Phelps",
//   swimming400Women: "Katie Ledecky"
// }

// for (var keys in olympicRecords){
//   // recordName is a **key** in the object
//   console.log("keys: " + keys);
// }

//console.log(Object.keys(olympicRecords));

// for (var key in olympicRecords){
//   console.log("The value of " + key + " is " + olympicRecords[key]);
// }

//------------Battleship

// var board = [
//   [null, null, null, "S", null],
//   [null, "S", null, "S", null ],
//   ["S", null, null, null, null ],
//   [null, "S", null, null, null],
//   [null, null, null, null, "S"]
// ];

// var firstRow = board[0];
// console.log("First Row: " + firstRow);

// var secondRow = board[1];
// console.log("Second Row: " + secondRow);

// var thirdRow = board[2];
// console.log("Third Row: " + thirdRow);

// var firstRow = board[0];


// var emptySpace  = firstRow[0];
// var ship = firstRow[3];


// console.log("Empty Space: " + emptySpace);
// console.log("Ship: " + ship);

// We can also shortcut assigning the row to a variable
// console.log("Third row, first col: " + board[2][0]);


var board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null ],
  ["S", null, null, null, null ],
  [null, "S", null, null, null],
  [null, null, null, null, "S"]
];

for (var i = 0; i < 10; i++){
  var row = getRandomNum();
  var column = getRandomNum();

  var randomSquare = board[row][column];
  
  if (randomSquare === "S"){
    console.log("Hit on: " + row + ", " + column);
    board[row][column] = null;
  }
}

function getRandomNum(){
  return Math.floor(Math.random() * 5);
}





// for (var i = 0; i < board.length; i++){
//   // A single row, such as board[0], board[1], board[2]
//   var row = board[i];
//   // Loop over each element in the row
//   // We use "j" because "i" is already being used.
//   // What would happen if we used i in this loop instead? Try it.
//   for (var j = 0; j < row.length; j++){
//     var column = row[j];
//     // If the column is a ship, log the coords
//     if (column === "S"){
//       console.log(`Ship found at ${ i }, ${ j }`);
//     }
//     // Instead of using variables, you could reference: board[i][j]
//   }
// }
