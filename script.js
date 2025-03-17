let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")


const choices = document.querySelectorAll(".choice");

const genComChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =  () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw. play again!.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice ,compchoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win")
        msg.innerText = `You win your ${userChoice} beats ${compchoice}!.`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lost")
        msg.innerText = `You lost ${compchoice} beats your ${userChoice}!.`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice",userChoice);
    const compchoice = genComChoice();
    console.log("Computer choice",compchoice);

    if(userChoice === compchoice){
        drawGame();
    }else{
        userWin = true;
        if(userChoice === "rock"){
            //paper,scissor
            userWin = compchoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissor
            userWin = compchoice === "scissor" ? false : true;
        }else{
            //rock,paper
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compchoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})