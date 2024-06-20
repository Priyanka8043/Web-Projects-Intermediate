
//Detecting Button Press

var n =document.querySelectorAll(".drum").length;                //we use .drum class to select and target specifically//

for (var i=0;i<n;i++){                                           // i should start from 0 //

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){   //check the syntax for function and use All for query selector//
       // alert("I got clicked"); //

    var buttonInnerHTML= this.innerHTML;                           //to choose letters i.e. inner HTML of button  i.e. this is on what event is performed i.e. action done on button , so this = button//
    
    makeSound(buttonInnerHTML);                                     //function calling

    buttonAnimation(buttonInnerHTML);                                //function calling
                                   
     })
}


//Detecting Keyboard Press

document.addEventListener("keypress",function(event){             //an event which has keyboard keys pressed and triggers the function(its a parameter called event)       

    makeSound(event.key);                                         //event.key
    
    buttonAnimation(event.key);                                    //function calling
                                   

})


function makeSound(key){

    switch(key){   //variable//
        
        case "w":  //inverted commas//
            var audio0 = new Audio("sounds/tom-1.mp3");    //syntax//
            audio0.play();
            break;

        case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");    
            audio1.play();
            break;

        case "s":
            var audio2 = new Audio("sounds/tom-3.mp3");    
            audio2.play();
            break;
            
        case "d":
            var audio3 = new Audio("sounds/tom-4.mp3");    
            audio3.play();
             break;    
                
        case "j":
            var audio4 = new Audio("sounds/snare.mp3");   //There is no curly bracket for cases , just ; and break //
            audio4.play();
            break;       

        case "k":
            var audio5 = new Audio("sounds/crash.mp3");    
            audio5.play();
            break;
    
        case "l":
            var audio6 = new Audio("sounds/kick-bass.mp3");    
            audio6.play();
            break;

        default:
            console.log(buttonInnerHTML);

        
    }


}
 
function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+ currentKey);          //for example  ".w" class

    activeButton.classList.add("pressed");                              //returns classes and adds animation property pressed

    setTimeout(function (){
        activeButton.classList.remove("pressed");

    }, 100);                                                             //second parameter is 100 millisec i.e. b4 performing function wait for 100 millisec

}


    


 


















