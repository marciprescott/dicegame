var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png";  //dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2;  //images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Change the text in the h1, 
// (which currently says Refresh Me) to show which user won or 
// if there was a draw depending on the dice values of player 1 (left) and player 2 
// (right).



// Hint: You'll need to use an if statement, 
// querySelector() and the innerHTML property to change the text in the h1.
var h1 = document.querySelector('h1')
if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    h1.innerHTML = "Player 2 Wins! 🚩";
}
else {
    h1.innerHTML = "Draw!";
}