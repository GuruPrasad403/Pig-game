'use strict';
// constants and variabels
alert("please enable desktop site if you are viewing in phone");
const roll = document.querySelector(".btn--roll");
const dice = document.querySelector(".dice");
const current1=document.querySelector("#current--0");
const hold= document.querySelector(".btn--hold");
const leftSide=document.querySelector(".player--0");
const rightSide=document.querySelector(".player--1");
const score1p = document.querySelector("#score--0");
const newBtn= document.querySelector(".btn--new")
const scores =[0,0]
let currentValue=0;
let activePlayer=0;
let playing = true;


//Event listener for roll when rolle button is pressed
roll.addEventListener("click", () =>{
    if(playing){
        const n = Math.ceil((Math.random())*6);
            if(n==1){
        dice.setAttribute("src","dice-"+n+".png")
               toggal();
            }
            else{
                dice.setAttribute("src","dice-"+n+".png")
                currentValue=currentValue+n;
                document.querySelector("#current--"+activePlayer).innerHTML=currentValue;
                if(currentValue>50){
                    document.querySelector("#current--"+activePlayer).innerHTML=currentValue;
                    win();
                }
            }
    }
});

//event listener for hold when hold button is pressed
hold.addEventListener("click" , () =>{
    // leftSide.classList.toggle("player--active");
    // rightSide.classList.toggle("player--active");
    if(playing){
        scores[activePlayer]+=currentValue;
    document.querySelector("#score--"+activePlayer).innerHTML=scores[activePlayer];
    if(scores[activePlayer]>20){
        win();
    }
    toggal();
    }
        
    
});    


    function toggal(){
        document.querySelector("#current--"+activePlayer).innerHTML=0;
        activePlayer =(activePlayer === 0 ? 1 : 0);
        currentValue=0;
        leftSide.classList.toggle("player--active");
        rightSide.classList.toggle("player--active");   
    }
function win(){
    document.querySelector(".player--"+activePlayer+"").classList.add("player--winner");
        playing=false;
}

newBtn.addEventListener("click", ()=>{
    location.reload();
})
