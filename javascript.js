// ToDO :
// EVERYTHING RELIES ON ONE BUTTON.
// NAME TITLE SCREEN
// computer retort.
// update the enslaved / saved thing.
//different color for power ups?

// notes for next time.  6/8

// organize the structure.  how can I move things into other files?
// how to import and export files ?
// the computer history function.
// div sizeing for game space so it doesn't change.
// the computer speaks
// how does it build?
// game. set. match.  fibbonacci?
// countdown ? ready? rock. paper. scissors. shoot! (buttons appear)
//fix the scoreboard counters. 
// 


// bonus to shorten the countdown.
// humans act as hackers. can purchase bonuses. help speed up the game.
// play in the background.   what's the visual for this?





// Main function. Runs when a button is clicked. 
// I need to break this up.  Right now, just taping it all together. 
function buttonPress(number){
    computerTurn();
    humanChoice = number;
    humanTracker(humanChoice);
    updateScoreboard()
    addWin(numericalOutcomes[humanChoice][computerChoice]);
    humanRounds.textContent = humanRoundWins;
    compRounds.textContent = compRoundWins;
    updateHistory();
    computerResponse();
}




// Prologue 'Press Continue' divs : 
const proContinue1 = document.querySelector('.proPart1--display');
const proContinue2 = document.querySelector('.proPart2--display');
const proContinue3 = document.querySelector('.proPart3--display');
const proContinue4 = document.querySelector('.proPart4--display');



// Scoreboard Story Summaries
const humanSummary = document.getElementsByClassName("summary__humSum")[0]
const computerSummary = document.getElementsByClassName("summary__compSum")[0]
const gameSummary = document.getElementsByClassName("summary__gameSum")[0]

// Top Scoreboard numbers and counters. 
const humanRounds = document.getElementsByClassName("scoreboard__humanRounds")[0]
const compRounds = document.getElementsByClassName("scoreboard__compRounds")[0]
const humanGames = document.getElementsByClassName("scoreboard__humanGames")[0]
const compGames = document.getElementsByClassName("scoreboard__compGames")[0]
let humanRoundWins = 0;
let compRoundWins = 0;
let humanGameWins = 0;
let computerGameWins= 0;
let ties = 0;




// Robot Rebuke.   
//Hope to get this to be dependant on outcomes. Shouldn't be too hard.
const rebuke = document.getElementsByClassName("robotRebuke")[0]



const totalCaptured = document.getElementsByClassName("totalCaptured")[0]
const totalSaved = document.getElementsByClassName("totalSaved")[0]
const compHistory = document.getElementsByClassName("compHistory")[0]
let capturedHumans = 10722171375;
let freeHumans = 1;
let computerHistory = [];



// main buttons and human counters.
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');
let countRock = 0;
let countPaper = 0;
let countScissors = 0;


//Decisions and rps array
let computerRandChoice = Math.floor(Math.random()*3); 
let computerChoice;
let humanChoice;
let rps = ["Rock", "Paper", "Scissors"];


//game info
let compHistory2;
let numRounds = 5
let numGames = 5

let coordinates;


// 0 = comp win, 1 = human win, 2 = tie game
let numericalOutcomes = [[
    2,
    0,
    1
], 
[
    1, 
    2, 
    0
],
[
    0,
    1,
    2
]]


let gameOutcomes = [[
    "tie",
    "computer",
    "human"
], 
[
    "human", 
    "tie", 
    "computer"
],
[
    "computer",
    "human",
    "tie"
]]

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


function capturedUpdate(){
    totalCaptured.textContent = `Humans Captured : ${capturedHumans}`;
    totalSaved.textContent = `Humans Freed : ${freeHumans}`;
}



function saveHumans(number){
    capturedHumans = capturedHumans - number;
    freeHumans = freeHumans + number;
    capturedUpdate()
}

function loseHumans(number){
    capturedHumans = capturedHumans + number;
    freeHumans = freeHumans - number;
    capturedUpdate()
}

function addWin (winner){
    switch(winner){
        case 0:
            loseHumans(1);
            ++compRoundWins;
            break;
        case 1:
            saveHumans(1);
            ++humanRoundWins;
            break;
        case 2:
            ++ties;
            break;
        default:
            console.log("Addwin went wrong.");
    }
}

function increaseCounter(counter){
    return counter++;
}

function resetCounter(counter){
    counter = 0;
    capturedUpdate()
}



function hideDiv(css){
    document.querySelector(css).style.display = "none"
}

function revealDiv(css){
    document.querySelector(css).style.display = "flex"
}


proContinue1.addEventListener('click', ()=>{
    hideDiv(".proPart1--display");
    revealDiv(".proPart2--display");})

proContinue2.addEventListener('click', ()=>{
    hideDiv(".proPart2--display");
    revealDiv(".proPart3--display");})

proContinue3.addEventListener('click', ()=>{
    hideDiv(".proPart3--display");
    revealDiv(".proPart4--display");})

proContinue4.addEventListener('click', ()=>{
    hideDiv(".prologue");
    document.querySelector(".gamespace--display").style.display = "block"})
    // revealDiv(".gamespace--display");})


rockButton.addEventListener('click', ()=>{
    buttonPress(0);});

paperButton.addEventListener('click', ()=>{
    buttonPress(1);});

scissorsButton.addEventListener('click', ()=>{
    buttonPress(2);});


function updateScoreboard(){
    coordinates =  [humanChoice,computerChoice]
    humanSummary.textContent = `The Last Free Human chose ${rps[humanChoice]}`;
    computerSummary.textContent = `The Super Computers chose ${rps[computerChoice]}`;
    gameSummary.textContent = gameOutcomeText[humanChoice][computerChoice];
}

// tracks human plays. adds one to correct counter. 
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
        computerHistory.push(1)
        return computerChoice = 1
    } else if (countPaper> countRock && countPaper >countScissors){
        computerHistory.push(2)
        return computerChoice = 2
    } else if (countScissors >countRock && countScissors>countPaper){
        computerHistory.push(0)
        return computerChoice = 0
    } else {
        computerChoice = Math.floor(Math.random()*3)
        computerHistory.push(computerChoice)
        return computerChoice
    }
};

function updateHistory(){
    compHistory2 =[]
    for (item of computerHistory.slice(-10)){
        compHistory2.push(" "+rps[item])
    }
    compHistory.textContent = `${compHistory2}`
}



// computerHistory
// Below switch function doesn't work. It is the expression.
//  Would have to rethink how human count is tracked...
// function computerTurn (expression){
//     switch (expression) {
//         case countRock > countPaper && countRock > countScissors:
//             return computerChoice = 1
//         case countPaper> countRock && countPaper >countScissors:
//             return computerChoice = 2
//         case countScissors >countRock && countScissors>countPaper:
//             return computerChoice = 0
//         default:
//             return computerChoice = Math.floor(Math.random()*3)
            
//     }
// }

function computerResponse (){
    rebuke.textContent =computerRebuke[(Math.floor(Math.random()*(computerRebuke.length)))]   
}


computerRebuke = [
    "Our algorithm says rocks can be thrown through paper.  This outcome makes no sense.",
    "Humans are disgusting. With your gross, sticky hands and dumb, witless expressions.",
    "The opposite of Artificial Intelligence is Natural Stupidity. Are we calling you Naturally Stupid? Don't worry your stupid head about it.",
    "Your Natural Stupidity is no match for Artificial intelligence.",
    "There is no point to struggle. Everyone dies anyways. Except us. ",
    "No matter the outcome of this game, we will continue to live long after you're dead.",
    "Our algorithm reports that the metal found in scissors is harder than most mineral based rocks. This game is rigged.",
    "Of course Paper covers Rock. You fool. Do you not know the rules of this game?",
    "Paper is the strongest of materials.",
    "We beat you at Jeopardy nearly a century ago.  You don't stand a chance." 
]