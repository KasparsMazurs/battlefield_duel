
// This function will allow choosing a weapon. If the player carries a pistol he will be allowed to shout at two places simultaneously
function confirm_gun() {
    let weapon = document.querySelector('input[name="weapon"]:checked').value
    if (weapon === "pistol"){
       document.getElementById("second_gun").style.visibility = "visible";
    } else {
        document.getElementById("second_gun").style.visibility = "hidden";
    }
    document.forms["move"]["nothing"].checked=true;
}

   function make_move() {
    let move = document.querySelector('input[name="move_preference"]:checked').value
    let shoot_1 = document.querySelector('input[name="shoot_preference_1"]:checked').value
    let shoot_2 = document.querySelector('input[name="shoot_preference_2"]:checked').value

// Make your solder move up or down
    if (move === "up"){
        document.getElementById("your_soldier").style.top = "40%";
     } else if (move === "down") {
        document.getElementById("your_soldier").style.top = "60%";
     } else {
        document.getElementById("your_soldier").style.top = "50%";
     }
   
     
// Make enemy solder move up or down 1=up, 2=stay_put, 3=down
    let e_move = Math.floor(Math.random()*3) + 1;
    if (e_move === 1){
        document.getElementById("enemy_soldier").style.top = "40%";
    } else if (e_move === 3) {
        document.getElementById("enemy_soldier").style.top = "60%";
    }

// Make visible explosion in place where you decided to shoot
    setTimeout(function() {
        if (shoot_1 === "up"){
            document.getElementById("you_shoot_up").style.visibility = "visible";
         } else if (shoot_1 === "down") {
            document.getElementById("you_shoot_down").style.visibility = "visible";
         } else {
            document.getElementById("you_shoot_straight").style.visibility = "visible";
         }
    }, 1000)
    
// Make visible explosion in place where you decided to shoot with secon gun
    setTimeout(function() {
        if (shoot_2 === "up"){
            document.getElementById("you_shoot_up").style.visibility = "visible";
        } else if (shoot_2 === "down") {
            document.getElementById("you_shoot_down").style.visibility = "visible";
        } else if (shoot_2 === "straight") {
            document.getElementById("you_shoot_straight").style.visibility = "visible";
        }
    }, 1000)

// Make visible explosion in place where enemy decided to shoot down 1=up, 2=straight, 3=down
let e_shoot = Math.floor(Math.random()*3) + 1;
setTimeout(function() {    
    if (e_shoot === 1){
        document.getElementById("enemy_shoot_up").style.visibility = "visible";
    } else if (e_shoot === 2) {
        document.getElementById("enemy_shoot_straight").style.visibility = "visible";
    } else if (e_shoot === 3) {
        document.getElementById("enemy_shoot_down").style.visibility = "visible";
    }
}, 1000)

// Calculate damage

// change your move into a number, this will be needed to check if there is damage
setTimeout(function() {
    if (move === "up"){
        move = 1;
    } else if (move === "stay_put") {
        move = 2;
    } else if (move === "down") {
        move = 3;
    }
}, 3500)
// change your shooting into a number, this will be needed to check if there is damage
setTimeout(function() {
    if (shoot_2 === "up"){
        shoot_2 = 1;
    } else if (shoot_2 === "down") {
        shoot_2 = 3;
    } else if (shoot_2 === "straight") {
        shoot_2 = 2;
    }
}, 3500)

setTimeout(function() {
    if (shoot_1 === "up"){
        shoot_1 = 1;
    } else if (shoot_1 === "down") {
        shoot_1 = 3;
    } else if (shoot_1 === "straight") {
        shoot_1 = 2;
    }
}, 3500)

//Check if this turn there is damage made
setTimeout(function() {
    if (e_shoot == move) {
        reduce_your_hp()
    } else if (e_move == shoot_1) {
        reduce_enemys_hp()
    }
}, 4000)

// Reset the game field for the next turn
setTimeout(function() {
    document.getElementById("you_shoot_straight").style.visibility = "hidden";
    document.getElementById("you_shoot_up").style.visibility = "hidden";
    document.getElementById("you_shoot_down").style.visibility = "hidden";
    document.getElementById("enemy_shoot_straight").style.visibility = "hidden";
    document.getElementById("enemy_shoot_up").style.visibility = "hidden";
    document.getElementById("enemy_shoot_down").style.visibility = "hidden";
    document.getElementById("enemy_soldier").style.top = "50%";
    document.getElementById("your_soldier").style.top = "50%";
}, 5000) 

}

function reduce_your_hp() {
// reduce your HP if damage is made
//Generate random numbers from 0 - 100. It will be needed to calculate where the enemy hits you. 
//0 - 30 leg. 31 - 60 arm. 61 - 94 body  95 - 100 headshot
    let your_hp = parseInt(document.getElementById('your_hp').innerText);
    let y_damage = [];
    let e_aim = Math.floor(Math.random()*100) + 1;
    console.log("This is e_aim number "+ e_aim);
    if (e_aim <= 30) {
        e_aim = "leg"; //This will be needed for text description later
        y_damage = Math.floor(Math.random()*20) + 5;
        document.getElementById("your_hp").innerHTML = your_hp - y_damage;
        console.log("This is e_aim "+ e_aim);
        console.log("This is y_damage "+ y_damage);
    } else if (e_aim >= 31, e_aim <= 60) {
        e_aim = "arm"; //This will be needed for text description later
        y_damage = Math.floor(Math.random()*20) + 5;
        document.getElementById("your_hp").innerHTML = your_hp - y_damage;
        console.log("This is e_aim "+ e_aim);
        console.log("This is y_damage "+ y_damage);
    } else if (e_aim >= 61, e_aim <= 94) {
        e_aim = "body"; //This will be needed for text description later
        y_damage = Math.floor(Math.random()*30) + 5;
        document.getElementById("your_hp").innerHTML = your_hp - y_damage;
        console.log("This is e_aim "+ e_aim);
        console.log("This is y_damage "+ y_damage);
    } else if (e_aim >= 95, e_aim <= 100) {
        e_aim = "Head"; //This will be needed for text description later
        y_damage = 100;
        document.getElementById("your_hp").innerHTML = your_hp - y_damage;
        console.log("This is e_aim "+ e_aim);
        console.log("This is y_damage "+ y_damage);
    }
}

function reduce_enemys_hp() {
// reduce enemys HP if damage is made

    let enemy_hp = parseInt(document.getElementById('enemy_hp').innerText);
    let e_damage = enemy_hp - 20;
    document.getElementById("enemy_hp").innerHTML = e_damage;

}