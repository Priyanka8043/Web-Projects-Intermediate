//Player 1//

var randomNo1=Math.floor(Math.random()*6) +1; //random no betn 1-5 with decimal points is given, math.floor gives whole no and +1 gives 1-6 nos randomly//

var randomimgno1 ="images/dice" + randomNo1 +".png"; //images/dice1.png - images/dice6.png , it will change the source of image randomly//

var img1= document.querySelectorAll("img")[0]; //selects first img i.e. for player 1//
img1.setAttribute("src",randomimgno1); //everytime we refresh we get new dice img for player1//



//Player 2//

var randomNo2=Math.floor(Math.random()*6)+1;

var randomimgno2 = "images/dice"+ randomNo2 + ".png";

var img2= document.querySelectorAll("img")[1];  //use setAttributeAll//
img2.setAttribute("src",randomimgno2); 



//to Change HTML

if(randomNo1 > randomNo2){
    document.querySelector("h1").innerHTML=("👑Player 1 wins!!"); //Use = sign
}
else if(randomNo2 > randomNo1){
    document.querySelector("h1").innerHTML=("Player 2 winss!!👑");
}
else{
    document.querySelector("h1").innerHTML=("It's a Draw !!");
 
}