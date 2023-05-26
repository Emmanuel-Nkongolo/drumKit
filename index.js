//Detecting Button Press

var numberOfButtons=document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
});
} // Detecting Keyboard Press

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case ("w"):
        var snare= new Audio("assets/sounds/snare.mp3");
        snare.play();
        break;

       case "a":
        var tom1=new Audio("assets/sounds/tom-1.mp3");
        tom1.play();
        break;
       
        case "s":
            var tom2=new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;

            case "d":
                var tom3=new Audio("assets/sounds/tom-3.mp3");
                tom3.play();
                break;

                case "j":
                    var tom4=new Audio("assets/sounds/tom-4.mp3");
                    tom4.play();
                    break;
            case"k":
            var crash=new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;

            case"l":
            var kick=new Audio("assets/sounds/kick-bass.mp3");
            kick.play();
            break;
      default: console.log(buttonInnerHTML)
            
    };
}


function buttonAnimation(currentkey){
    var activeButton= document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");    
    }, 100);
}





