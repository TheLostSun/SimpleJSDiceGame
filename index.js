var a=Math.floor(Math.random()*5)+1;
var b=Math.floor(Math.random()*5)+1;
var dice1="images/dice"+a+".png";
var dice2="images/dice"+b+".png";
document.querySelector("#Player1").setAttribute("src",dice1);
document.querySelector("#Player2").setAttribute("src",dice2);
if(a>b)
document.querySelector(".Title").innerHTML="Player 1 Wins";
else if(a<b)
document.querySelector(".Title").innerHTML="Player 2 Wins";
else 
document.querySelector(".Title").innerHTML="Draw";