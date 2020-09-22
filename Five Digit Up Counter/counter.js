var countInterval;

function resetNumbers(currentDivNo, nextDivNo, end){
    for (var i= 0 ; i<end ; i++){
        currentDivNo[i].innerText = 0;
        nextDivNo[i].innerText = 1;

    }
}

function increaseCount(currentDivNo, nextDivNo, index){
    let current = currentDivNo[index];
    let next = nextDivNo[index];

    if(current.innerText == 9){
        increaseCount(currentDivNo, nextDivNo, index-1);
    }

    next.classList.add("animate");
    setTimeout(function(){
        current.innerText = next.innerText
        next.classList.remove('animate');
        next.innerText = parseInt(next.innerText) + 1;
        if(next.innerText > 9){
            next.innerText = 0;
        }
    }, 500)
}

function StartCounter(){
    var number = parseInt(document.getElementById('number').value);
    if(isNaN(number)){
        alert("Please Enter a Number");
        clearInterval(countInterval);
        return;
    }
    if(number<1 || number>99999){
        alert("out of range");
        clearInterval(countInterval);
        return;
    }

    var currentDivNo = document.querySelectorAll('.counter-div .current');
    var nextDivNo = document.querySelectorAll('.counter-div .next');
    var count = 0;
    resetNumbers(currentDivNo, nextDivNo , 5);
    clearInterval(countInterval);

    countInterval = setInterval(function(){

        if (count === number){
            clearInterval(countInterval);
            alert("counter has stopped");
            return;
        }
        increaseCount(currentDivNo, nextDivNo, 4);
        count++;
    }, 1000);


}