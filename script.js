"use strict";
window.addEventListener("load", start);

const newArray=[];
const sojler = document.querySelectorAll("#wrapper > div.graph");
sojler.forEach(element => {
    newArray.push(element.offsetHeight);
    
});

function myRandom(){
    return Math.random()*300+100;
}

function loopet(){
    newArray.shift();
    newArray.push(myRandom());
    console.log(myRandom());
    setHeight();
    setTimeout(loopet, 500);
    
}

function start(){
    console.log("start");
    setHeight();
    loopet();
 
}

function setHeight(){
    //find the first bar
    for (let i = 0; i < newArray.length; i++){   
        console.log("loopet kører");
         let bar = document.querySelector(`#wrapper > div:nth-child(${i+1})`);
        console.log("bar", bar);

        //set the height of that bar
        bar.style.setProperty("--my-heigth", newArray[i]);
    }


}
