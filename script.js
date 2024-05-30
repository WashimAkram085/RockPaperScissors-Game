let userscr = 0;
let compscr = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScrPara = document.querySelector("#user-score");
const compScrPara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const DrawGame = () => {
    msg.innerText = "Game was Draw!! Play again.";
    msg.style.backgroundColor = "rgb(33, 85, 207)";
}
const showWinner = (userWin,userchoice,compchoice) => {
    if (userWin) {
        userscr++;
        userScrPara.innerText = userscr;
        msg.innerText = `You Win!! Your ${userchoice} beats ${compchoice}.`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscr++;
        compScrPara.innerText = compscr;
        msg.innerText = `You Lost!! ${compchoice} beats Your ${userchoice}.`;
        msg.style.backgroundColor = "Red";
    }
}
const playGame = (userchoice) => {
    //console.log("choice is ",userchoice);
    //computer choice
    const compchoice = genCompChoice();

    if (userchoice === compchoice) {
        DrawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            //scissor,paper
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});