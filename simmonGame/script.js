let gameSeq=[];
let userSeq=[];
let highscore=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let started=false;
let level =0;

let btns=["yellow","red","purple","green"];

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },100);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
    {
        btn.classList.remove("userflash");
    },100);
}

function levelUp()
{
    userSeq=[];
    level++;
    highscore=highscore>level?highscore:level;
    h2.innerText=`Level ${level}`;
    h3.innerText=`Your HighScore is ${highscore}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function btnPress()
{
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allButtons=document.querySelectorAll(".btn");
for(btn of allButtons)
{
    btn.addEventListener("click",btnPress);
}

function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,500);
        }
    }
    else
    {
            h2.innerHTML=`Game Over! Press any Key to start.<br> <b>your score was ${level}</b>`
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function()
            {
                document.querySelector("body").style.backgroundColor="white";
            },250);
            reset();
    }
}

function reset()
{
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}
