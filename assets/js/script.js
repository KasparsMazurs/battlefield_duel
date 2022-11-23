
// This function will allow choosing a weapon. If the player carries a pistol he will be allowed to shout at two places simultaneously
function confirm_gun() {
    let weapon = document.querySelector('input[name="weapon"]:checked').value
    if (weapon === "pistol"){
       document.getElementById("second_gun").style.visibility = "visible";
    } else {
        document.getElementById("second_gun").style.visibility = "hidden";
    }
}

function your_soldier() {
    document.getElementById("your_soldier").style.top = "50%";
    y = document.getElementById("your_soldier").offsetTop;
    while ( y = 61) {
        setTimeout(function() {
            document.getElementById("your_soldier").style.top = y + "%";
            y++;
        }, 1000)
    }
}