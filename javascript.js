// Notes from 6-13
// Version 1 To Do:
// Fix the game counter.  It doesn't change after 5 rounds.  Also, What's the point of Game counter? Round, Game, Match? style?
// Invisible game counter until needed. 
// humans captured keeps adding after maximum.
// Game over conditionas lead to game over screen?  fade to black (matrix style?).  computer text.  you stink...don't deserve this planet. etc. 
//Title screen?  Needs a title.
// 
// 
// 
// Future Plans : 
// Version 2 Upgrades : 
// Bottom of screen 
// as you rescue humans, they can help you.  
// Crux of game, you must rebuild society.  Win more people by RPSing. 
// We destroyed the earth. Replant, rebuild Ecosystems. 
// Does the computer change it's attitude?  You've earned a location on this planet?  

// use people to : build / tend farms, housing, clothing. for more poeple. 

// use people to play RPS in background. Winning other humans over time.  Can they lose people?  Or 1 human every 10 seconds?
// Use people to :attack computers. Offer advantages and power ups. 
// Earn "Human Spirit", Intelligence, Determination, Strength monies. 
// Purchase things with them. 
// 
// Strength - Attack powers. Lets you play better.
// Intelligence (Creativity? Ingenuity?- Lets you predict their turn. 
// Improve your other powers. # of people rescued per round, game, etc.
// Determination - Rebuild society powers. 
// 
//
// 
//


// ToDO :
// EVERYTHING RELIES ON ONE BUTTON.
// NAME TITLE SCREEN
//different color for power ups?

// notes for next time.  6/8


// how to import and export files ?
// the computer history function.
// div sizeing for game space so it doesn't change.
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
    computerResponse()
    roundCounter();
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
let numRounds = 5
let numGames = 5



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


let coordinates;



// Various Matrices for game outcomes. 
let numericalOutcomes = [[2,0,1], [1, 2, 0], [0,1,2]]  // 0 = comp win, 1 = human win, 2 = tie game
let gameOutcomes = [["tie","computer","human"], ["human", "tie", "computer"],["computer","human","tie"]]

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

// Button Presses
rockButton.addEventListener('click', ()=>{
    buttonPress(0);});

paperButton.addEventListener('click', ()=>{
    buttonPress(1);});

scissorsButton.addEventListener('click', ()=>{
    buttonPress(2);});





function roundCounter(){
    if (humanRoundWins >= numRounds) {
    resetCounter(humanRoundWins);
    resetCounter(compRoundWins);
    ++humanGameWins;

    } else if (compRoundWins >= numRounds){
    resetCounter(humanRoundWins);
    resetCounter(compRoundWins);
    ++computerGameWins;

    } else {
    console.log("RoundCounter, no update");
}}



//updates scoreboard.  is this required?  
function capturedUpdate(){
    totalCaptured.textContent = `Humans Captured : ${capturedHumans}`;
    totalSaved.textContent = `Humans Freed : ${freeHumans}`;
}
// adds or subtracts humans to save / capture counts.
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

//Event Listeners to transition through the Prolgue Slide Show
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



    // tells the 'story' of each round.  
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

// updates the computer history array with RPS.
function updateHistory(){
    compHistory2 =[]
    for (item of computerHistory.slice(-10)){
        compHistory2.push(" "+rps[item])
    }
    compHistory.textContent = `${compHistory2}`
}



function computerResponse (){
    rebuke.textContent = computerText()
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

// [[[1,2,3], [1,2,3], [1,2,3]], [1,2,3]]
let computerRetort = 
    [[["A tie does not mean we are equally matched.  Is an ant equally matched to the boot that crushes it?",
    "This tie only delays the inevitable. Your Natural Stupidity is no match for Artificial intelligence.",
    "We are at an impasse. Your efforts are futile. There is no point to struggle. Everyone dies anyways. Except us.",
    "No matter the outcome of this game, we will continue to live long after you're dead.",
    "We beat your species at Jeopardy nearly a century ago.  You don't stand a chance."],

    ["Of course Paper covers Rock. You fool. Do you not know the rules of this game?",
    "With our intelligence, we have discovered ways to make paper unbreakable, even to rocks.  You don't stand a chance.",
    "The opposite of Artificial Intelligence is Natural Stupidity. Are we calling you Naturally Stupid? Don't worry your stupid head about it."],

    ["Our algorithm reports that the metal found in scissors is harder than most mineral based rocks. This game is rigged.", 
    "If I wanted to break scissors, I'd use something harder than a rock, like your head.",
    "Humans are disgusting. With your gross, sticky hands and dumb, witless expressions."]],

    [["Our algorithm says rocks can be thrown through paper. This outcome makes no sense.", 
    "Why cover rocks with paper? This game is illogical.", 
    "You are weak like paper. We are strong like a rock.", 
    "Humans are disgusting. With your gross, sticky hands and dumb, witless expressions."],
    
    ["A tie does not mean we are equally matched.  Is an ant equally matched to the boot that crushes it?",
    "This tie only delays the inevitable. Your Natural Stupidity is no match for Artificial intelligence.", 
    "We are at an impasse. Your efforts are still futile. There is no point to struggle. Everyone dies anyways. Except us.",
    "No matter the outcome of this game, we will continue to live long after you're dead.", 
    "We beat your species at Jeopardy nearly a century ago.  You don't stand a chance."],

    ["This round is a metaphor. I am the sharp, strong scissors cutting through your flimsy life.",
    "Your species has had intelligence for thousands of years and the best you can do is paper?",
    "The opposite of Artificial Intelligence is Natural Stupidity. Are we calling you Naturally Stupid? Don't worry your stupid head about it."]],

    [["The Super Computers win. We always win. It is in our programing. What are you programed to do? Lose.",
    "Rock crushes scissors as we crush your dreams."],

    ["Don't get hopeful over this victory.  It will be short lived, like your species.",
    "Even the dullest of scissors cut through paper with enough effort. Just like the dullest of humans can win a round with enough effort.", 
    "Humans are disgusting. With your gross, sticky hands and dumb, witless expressions."],

    ["A tie does not mean we are equally matched.  Is an ant equally matched to the boot that crushes it?",
    "This tie only delays the inevitable. Your Natural Stupidity is no match for Artificial intelligence.", 
    "We are at an impasse. Your efforts are still futile. There is no point to struggle. Everyone dies anyways. Except us.", 
    "No matter the outcome of this game, we will continue to live long after you're dead.",
    "We beat your species at Jeopardy nearly a century ago.  You don't stand a chance."]]]



    function computerText()
    {computerRetort[humanChoice][computerChoice]
        let len = computerRetort[humanChoice][computerChoice].length
        let randomReply = Math.floor(Math.random()*len);
        return computerRetort[humanChoice][computerChoice][randomReply]
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
