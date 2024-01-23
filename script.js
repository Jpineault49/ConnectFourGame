'use strict';

/**
 * ICS3UC Final Project S1 2023-24
 * 
 * Author: Joshua Pineault
 * Description: Game of Connect Four
 * 
 */

$("two_player").addEventListener("click", new_game)
$("btn_1").addEventListener("click", piece_placement)
$("btn_2").addEventListener("click", piece_placement)
$("btn_3").addEventListener("click", piece_placement)
$("btn_4").addEventListener("click", piece_placement)
$("btn_5").addEventListener("click", piece_placement)
$("btn_6").addEventListener("click", piece_placement)
$("btn_7").addEventListener("click", piece_placement)

let grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0] // BL = "05" JS = grid[5][0] = 0
]
let player_one;
let player_two;
let turn = 1 //Player 1 always (Red)
function $(id) {
  return document.getElementById(id);
}

function new_game() {
  player_one = prompt("Player 1 Name (RED):")
  player_two = prompt("Player 2 Name (YELLOW):")

  $("game_board").hidden = false
  $("whos_turn").hidden = false
  turn_indicator()
}

function turn_indicator() {
  let output = document.getElementById("whos_turn");

  if (turn == 1) {
    output.innerText = "Player One's Turn! (RED)";
  } else if (turn == 2) {
    output.innerText = "Player Two's Turn! (YELLOW)";
  }
}


function winner() {
  //Check Horizontal
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 4; col++) {

      if (grid[row][col] !== 0 &&
        grid[row][col] === grid[row][col + 1] &&
        grid[row][col] === grid[row][col + 2] &&
        grid[row][col] === grid[row][col + 3]) {
        return true;
      }

    }
  }

  //Check Vertical 
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 7; col++) {
      if (grid[row][col] !== 0 &&
        grid[row][col] === grid[row + 1][col] &&
        grid[row][col] === grid[row + 1][col] &&
        grid[row][col] === grid[row + 3][col]) {
        return true;
      }
    }
  }

  //Check Diagnal
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      if (grid[row][col] !== 0 &&
        grid[row][col] === grid[row + 1][col + 1] &&
        grid[row][col] === grid[row + 2][col + 2] &&
        grid[row][col] === grid[row + 3][col + 3]) {
        return true;
      }
    }
  }

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 7; col++) {
      if (grid[row][col] !== 0 &&
        grid[row][col] === grid[row + 1][col - 1] &&
        grid[row][col] === grid[row + 1][col - 1] &&
        grid[row][col] === grid[row + 3][col - 3]) {
        return true;

      }
    }
  }
  return false;

}

function piece_placement(event) {

  let column_picked = Number(event.target.id[4]) - 1; //"1" = 0
  let row = 5;
  let id; //Used to make id with right placement of column_picked and row
  let img_src; //Used to store URL of image 


  if (winner()) {
    return $("display_winner").innerText = "Player has won!";
  } else if (winner() != true || false) {
    console.log("Not a winning move!")
  } else {
    return $("display_winner").innerText = "Its a Tie!";
  }

  while (row >= 0) {
    if (grid[row][column_picked] === 0) { //check to see if the place is blank 
      id = `${row}${column_picked}`;  //id is the string that represents the HTML element        

      img_src = $(id).src = "images/blankcircle.png" // make variable that stores id of choosen spot with URL 
      break;
    } else {
      row--
    }

  }
  if (img_src === "images/blankcircle.png") {


    if (turn == 1) { //Player 1 goes first
      $(id).src = "images/red.png"
      grid[row][column_picked] = 1 //Make the blank a 1 / taken spot 
      turn = 2 //Change turn to Player 2
    } else if (turn == 2) {
      $(id).src = "images/yellow.png"
      grid[row][column_picked] = 2
      turn = 1
    }

  }

  if (row < 0) {
    return "Column is full!";
  }
}