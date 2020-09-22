var ball = document.getElementById('ball');
var header = document.getElementById('head')

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px"; 

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;
var headerHeight = header.offsetHeight;




// using keycode
function keycode(keypress){
    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    // w is pressed
    if (keypress == 119 || keypress == 87){
        if(top>5){
            ball.style.top = (top-5) + "px";
        }
    }

    // s is pressed
    if (keypress == 115 || keypress == 83){
        if ( top < (window.innerHeight-ballHeight - headerHeight) -5){
            ball.style.top = (top+5) + "px"
        }
    }

    // a is pressed
    if (keypress == 65 || keypress == 97){
        if (left > 5){
            ball.style.left = (left-5) + "px"
        }
    }

    // d id pressed
    if (keypress==100 || keypress == 68){
        if (left < (window.innerWidth - ballWidth)-5){
            ball.style.left = (left+5) + "px";
        }
    }
    
}


// function setValue(value) {
//     return value + "px";
// }


/*
//When using event.key;
function key(keyPress) {
    
    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    // W is pressed
    if (keyPress === "w" || keyPress === "W") {
        if (top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }

    // A is pressed
    else if (keyPress === "a" || keyPress === "A") {
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    // S is pressed
    else if (keyPress === "s" || keyPress === "S") {
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    // D is pressed
    else if (keyPress === "d" || keyPress === "D") {
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }

};
*/



/*
//When using event.code;
function code(keyPress) {
    
    console.log(keyPress);

    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    // W is pressed
    if (keyPress === "KeyW") {
        if (top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }

    // A is pressed
    else if (keyPress === "KeyA") {
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    // S is pressed
    else if (keyPress === "KeyS") {
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    // D is pressed
    else if (keyPress === "KeyD") {
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }

};
*/


window.addEventListener('keypress', function(event){
    // three ways to use this event
    // first is using => code(event.code);
    // second is using => key(event.key);
    // and thrid is 
    keycode(event.keyCode);
});