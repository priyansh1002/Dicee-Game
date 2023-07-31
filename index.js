var randomnumber1=Math.floor(Math.random()*6)+1; //choosing random number between 1-6

var diceimagechange= "dice" + randomnumber1 + ".png"; //dice1.png to dice6.png

var diceimagesource= "images/" + diceimagechange;// image/dice1.png to image/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", diceimagesource);

var randomnumber2=Math.floor(Math.random()*6)+1;

var diceimagesource2="images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceimagesource2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!!!";  //Player 1 wins 
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!!!";   //player 2 wins
}
else
{
    document.querySelector("h1").innerHTML="That's A Tie!!!";  // Draw
}