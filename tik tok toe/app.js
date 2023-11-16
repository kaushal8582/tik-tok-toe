var turn = "X";
var win = false;

function changeTurn() {
    return turn === "X" ? "O" : "X";
}

// checkWin();
function checkWin() {
    let boxText = document.querySelectorAll(".text");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach((e) => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.btn h2').innerText = `winner is ${boxText[e[0]].innerText}`;
            win = true;
            bk();
            setTimeout(() => {
                document.querySelector(".bk").style.display = "none";
                clear();
            }, 2000);
        }
    })
}

let boxes = document.querySelectorAll(".box");
boxes.forEach((element) => {
    let bText = element.querySelector(".text");
    console.log(bText);
    element.addEventListener("click", (e) => {
        // console.log(e, "kaushal");
        if (bText.innerText === "") {
            bText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!win) {
                document.querySelector("#cTurn").innerText = turn;
            }
        }

    })
})


// reset 

document.querySelector("#reset").addEventListener("click",()=>{
    clear();    
})

function clear() {
    turn="X";
    win=false;
    document.querySelector(".btn h2").innerHTML = ` <h2>Turn for <span id="cTurn" >${turn}</span></h2>`;
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((element) => {
        let bText = element.querySelector(".text");
        bText.innerText="";
    })
}

function bk(){
    document.querySelector(".bk").style.display = "block";
}

