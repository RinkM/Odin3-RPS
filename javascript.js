// EVERYTHING RELIES ON ONE BUTTON.
// update scoreboard.
// computer retort.
// update computer moves list.
// update the enslaved / saved thing.
//different color for power ups?



const humanSummary = document.getElementsByClassName("summary__humSum")[0]
const computerSummary = document.getElementsByClassName("summary__compSum")[0]
const gameSummary = document.getElementsByClassName("summary__gameSum")[0]


const humanScore = document.getElementsByClassName("scoreboard__humanScore")[0]
const compScore = document.getElementsByClassName("scoreboard__compScore")[0]

const rebuke = document.getElementsByClassName("robotRebuke")[0]

const totalEnslaved = document.getElementsByClassName("totalEnslaved")[0]
const totalSaved = document.getElementsByClassName("totalSaved")[0]
const compHistory = document.getElementsByClassName("compHistory")[0]
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');


// const gameSummary = document.getElementsByClassName("scoreboard__humanScore")[0]
// const gameSummary = document.getElementsByClassName("scoreboard__compScore")[0]
// const gameSummary = document.getElementsByClassName("robotRebuke")[0]




// can select directaly by class name. Use the [0] array locatiniio.  change the text SVGTextContentElement.LENGTHADJUST_SPACING
// learn to spell..

// random number 0-3
// console.log(Math.floor(Math.random()*3));

// x, Y
// 0 - rock
// 1 - paper
// 2 - scissors

let computerRandChoice = Math.floor(Math.random()*3); 
let computerChoice ;
let humanChoice ;
let rps = ["Rock", "Paper", "Scissors"];

// lots of variables and counters. could be held as an object?
// would that be better? 

let computerHistory = [];
let countRock = 0;
let countPaper = 0;
let countScissors = 0;
let humanWins = 0;
let compWins = 0;
let ties = 0
let humanSetWins = 0
let computerSetWins= 0 
let enslavedHumans = 10722171375;
let freeHumans = 1;

// while (freeHumans != 0){

// }

// let gameOutcomes = [["tie", "paperWin", "rockWin"], ["paperWin", "tie", "scissorsWin"], ["rockWin","scissorsWin", "tie"]];

let gameOutcomeText = [[
    "It's a Tie. No Winner.",
    "Paper covers Rock. The Super Computers Win",
    "Rock destroys Scissors. The Last Free Human Wins."
], 
[
    "Paper covers Rock. The Last Free Human Wins.", 
    "It's a Tie. No Winner.", 
    "Scissors cut Paper. The Super Computers Win."
],
[
    "Rock destroys Scissors. The Super Computers win.",
    "Scissors cut Paper. The Last Free Human Win.",
    "It's a Tie. No Winner."
]]


function increaseCounter(counter){
    return counter++;
}

function resetCounter(counter){
    return counter = 0;
}

function saveHuman(number, bonus){

}

function loseHuman(){

}

let gameOutcomes = [[
    ties++,
    compWins++,
    humanWins++
], 
[
    humanWins++, 
    ties++, 
    compWins++
],
[
    compWins++,
    humanWins++,
    ties++
]]

// function trackWins(){
//     switch(){
//         case
//         case
//         case
//     }
// }

// Will break this up.  Right now, just taping it all together. 
function buttonPress(number){
    computerTurn();
    humanChoice = number;
    humanTracker(humanChoice);
    updateScoreboard()
    gameSummary.textContent = gameOutcomeText[computerChoice][humanChoice];
    gameOutcomes[computerChoice][humanChoice];
    humanScore.textContent = `Last Free Human : ${humanWins}`;
    compScore.textContent = `Super Computers : ${compWins};`
}


rockButton.addEventListener('click', ()=>{
    buttonPress(0);});

paperButton.addEventListener('click', ()=>{
    buttonPress(1);});

scissorsButton.addEventListener('click', ()=>{
    buttonPress(2);});


function updateScoreboard(){
    humanSummary.textContent = `The Last Free Human chose ${rps[humanChoice]}`;
    computerSummary.textContent = `The Super Computers chose ${rps[computerChoice]}`;
}



// paperButton.addEventListener('click', buttonPress(1));
// scissorsButton.addEventListener('click', buttonPress(2));

// tracks human plays. adds one to correct counter. 
// need to make the choices into 0 ,1,2
function humanTracker(choice){
    switch (choice) {
        case 0:
            countRock++
            break;
        case 1:
            countPaper++
            break;
        case 2:
            countScissors++
            break;
    }
}

// computer looks at counts. checks which is biggest. if none, random number between the ties.
// can i use an array to track this.  then just find max? if no max, return random. 
function computerTurn(){
    if (countRock > countPaper && countRock > countScissors) {
        return computerChoice = 1
    } else if (countPaper> countRock && countPaper >countScissors){
        return computerChoice = 2
    } else if (countScissors >countRock && countScissors>countPaper){
        return computerChoice = 0
    } else {
       return computerChoice = Math.floor(Math.random()*3)
    }
};


// function computerTurn written as a swtich expression - 95% complete. 
// switch (expression) {
//     case countRock > countPaper && countRock > countScissors:
//         computerChoice = 1
//         break;
//     case countPaper> countRock && countPaper >countScissors:
//         computerChoice = 2
//         break;
//     case countScissors >countRock && countScissors>countPaper:
//         computerChoice = 0
//         break;
//     default:
//         computerChoice = Math.floor(Math.random()*3)
        
// }





//do i have to pass h.choice c.choice?  once they update else where..
//what does this return?
function decideWinner(humanChoice,computerChoice){
    
    gameOutcomes[parseInt(humanChoice)][computerChoice]
}

