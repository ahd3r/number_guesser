// Game values
let min=1,
    max=10,
    winNum=getRandomNum(min,max),
    guessesLeft=3;

// UI values
const gameForm = document.querySelector('#guesser'),
      minNum = document.querySelector('#min-num'),
      maxNum = document.querySelector('#max-num'),
      tryBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('#message');

message.style.marginTop='-40px';
message.style.fontSize='12px';

minNum.textContent=min;
maxNum.textContent=max;

gameForm.addEventListener('submit', tryit);

gameForm.addEventListener('click', playAgain);

function playAgain(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
}

function tryit(e){
    let num = parseInt(guessInput.value);
    if(isNaN(num)){
        guessInput.value='';
        guessInput.style.border='red 1px solid';
        message.style.color='red';
        message.textContent='Type something.';
    } else if(num>10 || num<1){
        guessInput.style.border='red 1px solid';
        guessInput.value='';
        message.style.color='red';
        message.textContent='This num is not in the range.';
    } else if(num!==winNum){
        guessesLeft-=1;
        if(guessesLeft===0){
            guessInput.style.borderColor='red';
            guessInput.disabled=true;
            tryBtn.value='Play again';
            tryBtn.className+='play-again';
            tryBtn.setAttribute('type', 'button');
            message.style.color='red';
            message.textContent=`You lost. Correct num was ${winNum}`;
        } else {
            guessInput.style.borderColor='red';
            guessInput.value='';
            message.style.color='red';
            message.textContent=`Wrong. Left ${guessesLeft} guesses`;
        }
    }else{
        guessInput.style.borderColor='green';
        guessInput.disabled=true;
        tryBtn.value='Play again';
        tryBtn.className+='play-again';
        tryBtn.setAttribute('type', 'button');
        message.style.color='green';
        message.textContent=`Right. ${winNum} is correct`;
    }
    e.preventDefault();
}

function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
