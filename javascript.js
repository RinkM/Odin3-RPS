// EVERYTHING RELIES ON ONE BUTTON.
// on button press
// make computer choice. update variable.
// add 1 to human counters.
// update humanchoice variable.
// narrate the players' moves
// compare choices and determine winner.
// narrate game outcome.
// update scoreboard.
// computer retort.
// update computer moves list. 
// 
// 
// 

// scoreboard text : 
// The Last Free Human chose ${Rock}
// The Super Computers chose ${Paper}
//     Paper covers rock.
//     Rock smashes scissors.
//     Scissors cut paper.
// The ${Player} won.




// random number 0-3
// console.log(Math.floor(Math.random()*3));

// x, Y
// 0 - rock
// 1 - paper
// 2 - scissors

let computerRandChoice = Math.floor(Math.random()*3);
let humanChoice = 1;
let rps = [Rock, Paper, Scissors];

let computerHistory = [];
let countRock = 0;
let countPaper = 0;
let countScissors = 0;
let humanWins = 0;
let computerWins = 0;
let gameOutcomes = [["tie", "paperWin", "rockWin"], ["paperWin", "tie", "scissorsWin"], ["rockWin","scissorsWin", "tie"]];


while (humanWins < 3 && computerWins < 3){
    computerRandChoice = Math.floor(Math.random()*3);
    computerTurn();
    humanChoice = prompt("0: Rock\n1: Paper\n2:Scissors\n Enter a number.");
    decideWinner();
}


// tracks human plays. adds one to correct counter. 
// need to make the choices into 0 ,1,2
function humanTracker(choice){
    if(choice == 0){
        countRock++
    } else if(choice == 1){
        countPaper++
    } else if(choice == 2){
        countScissors++
    }
};

function computerTracker(){
    
}

// computer looks at counts. checks which is biggest. if none, random number between the ties.
// can i use an array to track this.  then just find max? if no max, return random. 
function computerTurn(){
    if (countRock > countPaper && countRock > countScissors) {
        return 1
    } else if (countPaper> countRock && countPaper >countScissors){
        return 2
    } else if (countScissors >countRock && countScissors>countPaper){
        return 0
    } else {
       return computerRandChoice
    }
};


// 1 round of game - takes input from players and decides outcome.
function gameRound(){
    
}

//do i have to pass h.choice c.choice?  once they update else where..
//what does this return?
function decideWinner(humanChoice,computerChoice){
    
    gameOutcomes[parseInt(humanChoice)][computerChoice]
}


// two options : 012 ;



//what's the loop? track wins.   plays text.
while (computerWins <= 3 || humanWins <= 3){

}

Math.floor