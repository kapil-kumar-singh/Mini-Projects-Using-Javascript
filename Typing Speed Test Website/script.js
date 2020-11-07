const msg = document.getElementById('msg');
const mytext = document.getElementById('mytext');
const btn = document.getElementById('btn')

const setOfWords = [
    "Developed by Brendan Eich in 1995, JavaScript is one of the most popular language.",
    "It was initially created to develop dynamic web pages. Every JS program is called a script.",
    "A language which was initially used to create dynamic web pages."
];

let startTime,  endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = 'Done';
}

const wordCounter = (typedWords) =>{
    let c = typedWords.split(' ').length;
    return c;
}

const compareWords = (str1, str2)=>{
    let words1 = str1.split(' ');
    let words2 = str2.split(' ');
    let cnt = 0

    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++;
        }
    });

    let errorWords = ( words1.length - cnt);

    return (cnt + " correct out of "  + words1.length + " words and the total number of error are " + errorWords + ".");
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    let typedWords = mytext.value;
    let wordCount = wordCounter(typedWords);

    let speed = Math.round((wordCount/totalTime)*60);
    let finalMsg = " Your typed total at " + speed + " words per minutes ";
    finalMsg += compareWords(msg.innerText, typedWords);
    msg.innerHTML = finalMsg; 
}


btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        mytext.disabled = false;
        playGame();
    }else if(this.innerText == 'Done'){
        mytext.disabled = true;
        btn.innerText = 'Start';
        endPlay();
    }
})