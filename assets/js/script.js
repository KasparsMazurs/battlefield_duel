// This function will allow choosing a weapon. If the player carries a pistol he will be allowed to shout at two places simultaneously
function confirm_gun() {
    let weapon = document.querySelector('input[name="weapon"]:checked').value
    if (weapon === "pistol"){
       document.getElementById("second_gun").style.visibility = "visible";
    } else {
        document.getElementById("second_gun").style.visibility = "hidden";
    }
// If you use ak-47 other pistol will do nothing
    document.forms["move"]["nothing"].checked=true;
}

   function make_move() {
    let description = document.getElementById('description');
    description.value += '----------------------' + '\r\n';
    document.getElementById("make_move_button").style.visibility = "hidden"; // Make the "make move" button invisible while this function is running
    setTimeout(function() {
        document.getElementById("make_move_button").style.visibility = "visible";
    }, 5000) // Make the "make move" button visible after 5 sec
    let move = document.querySelector('input[name="move_preference"]:checked').value
    let shoot_1 = document.querySelector('input[name="shoot_preference_1"]:checked').value
    let shoot_2 = document.querySelector('input[name="shoot_preference_2"]:checked').value

// Make your solder move up or down
    if (move === "up"){
        document.getElementById("your_soldier").style.top = "520px";
        description.value += "You choose to move up" + '\r\n';
     } else if (move === "down") {
        document.getElementById("your_soldier").style.top = "780px";
        description.value += "You choose to move down" + '\r\n';
     } else {
        document.getElementById("your_soldier").style.top = "650px";
        description.value += "You choose to stay put" + '\r\n';
     }
   
     
// Make enemy solder move up or down 1=up, 2=stay_put, 3=down
    let e_move = Math.floor(Math.random()*3) + 1;
    if (e_move === 1){
        document.getElementById("enemy_soldier").style.top = "520px";
    } else if (e_move === 3) {
        document.getElementById("enemy_soldier").style.top = "780px";
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
    } else if (e_move == shoot_2 == shoot_1 ) {
        reduce_enemys_hp()
        reduce_enemys_hp()
    } else if (e_move == shoot_2) {
        reduce_enemys_hp()
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
    document.getElementById("enemy_soldier").style.top = "650px";
    document.getElementById("your_soldier").style.top = "650px";
}, 5000) 

}

function reduce_your_hp() {
// reduce your HP if damage is made
//Generate random numbers from 0 - 100. It will be needed to calculate where the enemy hits you. 
//0 - 30 leg. 31 - 60 arm. 61 - 94 body  95 - 100 headshot
    let your_hp = parseInt(document.getElementById('your_hp').innerText);
    let y_damage = [];
    let e_aim = Math.floor(Math.random()*100) + 1;
    if (e_aim <= 30) {
        e_aim = "leg"; //This will be needed for text description later
        y_damage = Math.floor(Math.random()*20) + 5;
        document.getElementById("your_hp").innerHTML = your_hp - y_damage;
    } else if (e_aim >= 31, e_aim <= 60) {
        e_aim = "arm"; //This will be needed for text description later
        y_damage = Math.floor(Math.random()*20) + 5;
        document.getElementById("your_hp").innerHTML = your_hp - y_damage;
    } else if (e_aim >= 61, e_aim <= 94) {
        e_aim = "body"; //This will be needed for text description later
        y_damage = Math.floor(Math.random()*30) + 5;
        document.getElementById("your_hp").innerHTML = your_hp - y_damage;
    } else if (e_aim >= 95, e_aim <= 100) {
        e_aim = "Head"; //This will be needed for text description later
        y_damage = 100;
        document.getElementById("your_hp").innerHTML = your_hp - y_damage;
    }
}

function reduce_enemys_hp() {
    let enemy_hp = parseInt(document.getElementById('enemy_hp').innerText);
// Check which gun is used
    let weapon = document.querySelector('input[name="weapon"]:checked').value
// reduce enemys HP if damage is made
//Generate random numbers from 0 - 100. It will be needed to calculate where the enemy hits you. 
//0 - 30 leg. 31 - 60 arm. 61 - 94 body  95 - 100 headshot
    let e_damage = [];
    if (weapon === "pistol"){
        let y_aim = Math.floor(Math.random()*100) + 1;
        if (y_aim <= 30) {
            y_aim = "leg"; //This will be needed for text description later
            e_damage = Math.floor(Math.random()*7) + 5;
            document.getElementById("enemy_hp").innerHTML = enemy_hp - e_damage;
        } else if (y_aim >= 31, y_aim <= 60) {
            y_aim = "arm"; //This will be needed for text description later
            e_damage = Math.floor(Math.random()*7) + 5;
            document.getElementById("enemy_hp").innerHTML = enemy_hp - e_damage;
        } else if (y_aim >= 61, y_aim <= 97) {
            y_aim = "body"; //This will be needed for text description later
            e_damage = Math.floor(Math.random()*15) + 5;
            document.getElementById("enemy_hp").innerHTML = enemy_hp - e_damage;
        } else if (y_aim >= 98, y_aim <= 100) {
            y_aim = "Head"; //This will be needed for text description later
            e_damage = 100;
            document.getElementById("enemy_hp").innerHTML = enemy_hp - e_damage;
        }
    } else if (weapon === "ak-47"){
        let y_aim = Math.floor(Math.random()*100) + 1;
        if (y_aim <= 30) {
            y_aim = "leg"; //This will be needed for text description later
            e_damage = Math.floor(Math.random()*20) + 5;
            document.getElementById("enemy_hp").innerHTML = enemy_hp - e_damage;
        } else if (y_aim >= 31, y_aim <= 60) {
            y_aim = "arm"; //This will be needed for text description later
            e_damage = Math.floor(Math.random()*20) + 5;
            document.getElementById("enemy_hp").innerHTML = enemy_hp - e_damage;
        } else if (y_aim >= 61, y_aim <= 94) {
            y_aim = "body"; //This will be needed for text description later
            e_damage = Math.floor(Math.random()*30) + 5;
            document.getElementById("enemy_hp").innerHTML = enemy_hp - e_damage;
        } else if (y_aim >= 95, y_aim <= 100) {
            y_aim = "Head"; //This will be needed for text description later
            e_damage = 100;
            document.getElementById("enemy_hp").innerHTML = enemy_hp - e_damage;
        }
    }
}