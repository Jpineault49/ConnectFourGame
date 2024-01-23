Write program that lets user play connect four and checks who wins 
Also a breif tutorial on how to play and history of the game.

Index.html (Main Page)

Make Heading called Connect Four 
Make button for 2 player option 

Make a button at the bottom that Sends user to info page
After Button is clicked Ask for Player 1 + 2 Names 




Script.js (code for game)

  Add event listener to check which column/column is clicked
  When Button (html) is clicked: 
  
  1. Check which column clicked
      -Use an event listener to check which columned clicked (DONE)
     -Which ever column is clicked start at the bottom and check if number or Image 
     -Make array that stores the numbers and grid of each column (DONE)
  2. Check whos turn
     - Either 1 or 2, image must correspond to turn (red or yellow)
  3. Add Image to free spot 
     -use document.getElementById to switch number with an image
     
  4. Decide Winner
     make a function / array that stores all the possibilities of winning           (Horizontally, vertically, diagonally)

     Step one : Find Placement of "id" ex: 05 , 64, 00
          
      Step Two: Make variable with the id let piece = $(id).src Right now its blank 
      Step Three: Check if placement on board is available with substring() meaning if the image is = "k" place a piece 
        -Substr(start, length of placement NOT a character place) Substring(start, end with character placement)
     Step Four: Make sure it is the correct turn for player if(turn is one) Make the image = /images/red.png


Explanation.html (Second Page)

Heading : How to Play Connect 4

use <p> to write  and <img to show examples 

Should Include : How to play game + tips n tricks and Brief History of Game

Button at bottom to bring back to Main Page 

Code:

Use Header 1 for Main title <h1> How to Play Connect Four </h1>

Use <p> to desrcibe, under image, 

Use Header 2-4 for sub topics Ex: Tips and Tricks, Important Dates, 

Use <i> and <b> for Important words & Dates. 
