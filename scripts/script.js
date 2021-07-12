
var rounds = 0
var wins = 0, losses=0, plays= wins+losses;

function capitalize(str) 
{
    return str.charAt(0).toUpperCase() + str.substring(str.length - (str.length - 1)).toLowerCase()
}
const move = ["Rock", "Paper", "Scissors"]
function computerPlay() 
{
    return move[Math.floor(Math.random() * move.length)]
}
function playRound(playerSelection) {
    playerSelection = capitalize(playerSelection)
    computerSelection = capitalize(computerPlay())
    if (playerSelection == computerSelection) {
        return document.querySelector("#result").textContent = "It's a tie ! "+ 
        playerSelection + " and " + computerSelection + " are the same.";
         //"tie"
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        wins += 1
        return document.querySelector("#result").textContent = "You win ! "+ 
        playerSelection + " beats " + computerSelection + ".";
        
        //return "win"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        wins += 1
        return document.querySelector("#result").textContent = "You win ! "+ 
        playerSelection + " beats " + computerSelection + ".";
        //return "win"
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        wins += 1
        return document.querySelector("#result").textContent = "You win ! "+ 
        computerSelection + " beats " + computerSelection + ".";
        //return "win"
    }
    /////////////
    //////////
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        losses += 1
        return document.querySelector("#result").textContent = "You lose ! "+ 
        computerSelection + " beats " + playerSelection + "."
        //return "loss"
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        losses += 1
        return document.querySelector("#result").textContent = "You lose ! "+ 
        computerSelection + " beats " + playerSelection + "."
        //return "loss"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        losses += 1
        return document.querySelector("#result").textContent = "You lose ! "+ 
        computerSelection + " beats " + playerSelection + "."
        //return "loss"
    }
    else {
        return("Incorrect Choice")
    }
}

let playerSelection = computerPlay();
let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
function game(ps){
    let wins = 0, losses=0, plays= wins+losses;
    while(plays<5){
        let playerSelection = ps;
        let computerSelection = computerPlay();
        let result=playRound(playerSelection, computerSelection)
        
    if (result=="win") {
        wins += 1
        plays+=1
        continue;
    } else if (result=="loss") 
    {
        losses +=1
        plays+=1
        continue;
    }
    }   
    return console.log("FINAL SCORE: Player: " + wins + " - COM: "+ losses)
}

function playGame(mv) {
    if (wins > 4 || losses > 4) {
        document.querySelector("#result").textContent = "FINAL SCORE: Player: " +
         wins + " - COM: "+ losses + ". Refresh to start over.";
        return;
    }
    else {
        rounds += 1
        return playRound(mv)
        
    }
}