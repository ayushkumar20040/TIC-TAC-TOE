let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-conatiner");
let msg=document.querySelector("#msg");
let turnO=true; //palyerX,playerO

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box)=>{                 //event listner
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;  
        }
        box.disabled=true //disable after one click
        checkWinner();

    });
});

const disabledBoxes=()=>{
    for(let box of boxes){ //diable after one round
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){ //diable after one round
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`; // corrected template literal
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
       let post1Val=boxes[pattern[0]].innerText;
       let post2Val=boxes[pattern[1]].innerText;
       let post3Val=boxes[pattern[2]].innerText;

       if(post1Val!="" && post2Val!="" && post3Val!=""){
        if(post1Val=== post2Val &&post2Val== post3Val){
            console.log("Winner",post1Val);
            showWinner(post1Val);

        }
       }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);