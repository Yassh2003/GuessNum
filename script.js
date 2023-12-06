const guess = document.getElementById("Guess-input");


let x = parseInt(Math.random() * 100);

let chances = 5;

const prev = document.getElementById("prev");
const chance = document.getElementById("chance");
const arr = document.getElementById("arr");
const hint = document.getElementById("hint");
const bt = document.getElementById("bt");
const input = document.getElementById("Guess-input");

let values = [];
let i = 0;

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        condition();
    }
})

function condition(){
    if(chances == 0){
        x = parseInt(Math.random() * 100);
        chances = 7;
        values = [];
        i = 0;
        bt.textContent = "Start";
        hint.textContent = "Guess Between 0 to 100";
        chances--;
        return;
    }
    if(chances == 6){
        bt.textContent = "Submit";
        input.style.display = "block";
        chance.textContent = chances;
        guessNumber();
    }
    else if(chances > 0 && parseInt(guess.value) < 101 && parseInt(guess.value) > -1){
        guessNumber();
    }
}

function guessNumber(){
    let y = guess.value;
    values.push(parseInt(y));
    arr.style.display = "block";
    if(x === parseInt(y)){
        hint.textContent = "Bingo..Aap Jeet chuke hai..";
        bt.textContent = "New Game";
        input.style.display = "none";
        arr.style.display = "none";
        chances = 0;
        return;
    }
    else if(x < parseInt(y)){
        hint.textContent = "apni aukaat mai reh..";
    }
    else{
        hint.textContent = "Thoda upper kr le bhai...";
    }
    if(chances == 5){
        prev.textContent = values[i];
    }
    else if(chances == 6){
        values = [];
    }
    else if(chances < 5){
        prev.textContent = `${prev.textContent} ${values[i]}`;
    }
    chances--;
    chance.textContent = chances;
    i++;
    guess.value = "";
    if(chances == 0){
        bt.textContent = "New Game";
        input.style.display = "none";
        arr.style.display = "none";
        hint.textContent = "Kya Hua nhi ho paa rha hai kya..";
    }
    if(chances == 5){
        i = 0;
        arr.style.display = "none";
        hint.textContent = "Guess Between 0 to 100";
    }
}