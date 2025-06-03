let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random() * 3);
    return options[randomIdx];
};
const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw, Paly again";
    msg.style.backgroundColor="#081b31";

};

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you  win!");
        msg.innerText="you win" ;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText=compScore;

        console.log("you lose");
        msg.innerText="you lose! ";
        msg.style.backgroundColor="red";


    }
};
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const comChoice=genComChoice();
    console.log("comp choice =",comChoice);

    if(userChoice===comChoice){
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=comChoice==="paper"? false:true;
        } else if( userChoice==="paper"){
            userWin=comChoice==="scissor"? false:true;
        }
        else{
            userWin=comChoice==="rock"? false:true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        

    });

});