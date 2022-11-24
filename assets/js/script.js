
// This function will allow choosing a weapon. If the player carries a pistol he will be allowed to shout at two places simultaneously
function confirm_gun() {
    let weapon = document.querySelector('input[name="weapon"]:checked').value
    if (weapon === "pistol"){
       document.getElementById("second_gun").style.visibility = "visible";
    } else {
        document.getElementById("second_gun").style.visibility = "hidden";
    }
}


   // document.getElementById("your_soldier").style.top = "40%"; // move your soldier up
   // document.getElementById("your_soldier").style.top = "60%"; // move your soldier down
   // document.getElementById("enemy_soldier").style.top = "40%"; // move enemy_soldier up
   // document.getElementById("enemy_soldier").style.top = "60%"; // move enemy_soldier down

   // setTimeout(function() {
   // }, 1000) // set Timeout

   // let num1 = Math.floor(Math.random()*25) + 1; // mgenerate random number from 1 to 25
   // document.getElementById("you_shoot_straight").style.visibility = "visible";
   // document.getElementById("you_shoot_up").style.visibility = "visible";
   // document.getElementById("you_shoot_down").style.visibility = "visible";
   // document.getElementById("enemy_shoot_straight").style.visibility = "visible";
   // document.getElementById("enemy_shoot_up").style.visibility = "visible";
   // document.getElementById("enemy_shoot_down").style.visibility = "visible";

   function make_move() {
    let move = document.querySelector('input[name="move_preference"]:checked').value
//    let shoot_1 = document.querySelector('input[name="shoot_preference_1"]:checked').value
//    let shoot_2 = document.querySelector('input[name="shoot_preference_2"]:checked').value
// Make your solder move up or down and back
    if (move === "up"){
        document.getElementById("your_soldier").style.top = "40%";
        setTimeout(function() {
            document.getElementById("your_soldier").style.top = "50%"
        }, 5000)
     } else if (move === "down") {
        document.getElementById("your_soldier").style.top = "60%";
        setTimeout(function() {
            document.getElementById("your_soldier").style.top = "50%"
        }, 5000)
     } else {
        document.getElementById("your_soldier").style.top = "50%";
     }
   }