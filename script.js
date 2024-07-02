let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#Reset");

let newGameBtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let image1 = document.querySelector(".img1")

let h = document.querySelector("h1")


// modechanger:
let mode = document.querySelector("label");
let currmode = "light"
mode.addEventListener("click",() =>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor ="black"
        document.querySelector("h1").style.color = "white"
    }else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor ="#548687"
        document.querySelector("h1").style.color = "black"
    }
    console.log(currmode)
})




let turnO = true
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]; 


const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    image1.classList.add("hide")


    
}




boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turnO){
            box.innerText = "O";
            box.style.color="black";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

    });
});

//disablefunc
const disableBoxes = () =>{
    for(let box of boxes){ 
        box.disabled = true;
    }
}

//enablefunc
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner =(winner) =>{
    msg.innerText = `congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    image1.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes [pattern[2]].innerText;

        if(pos1Val !="" && pos1Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);


            }
        }

    }
};




newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


